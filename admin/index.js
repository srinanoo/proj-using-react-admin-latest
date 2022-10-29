const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// const path = require('path');
// app.use('/public/images', express.static(path.join(__dirname), '/public/images'));

const whileList = [
    'http://localhost',
    'http://localhost:3000',
    'http://localhost:4000',
    'https://srinanoo.github.io/april-online-batch',
    'https://dinesh-students-backend.herokuapp.com'
];
app.use(cors({
    origin: (origin, callback) => {
        if(whileList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log(origin);
            callback(new Error('Not allowed because CORS policy!'));
        }
    },
    optionsSuccessStatus: 200,
}));

// const studentRoute = 

// app.get('/', (req, res)=>{
//     res.send("Main Application!");
// });

// app.get('/create', (req, res)=> {
//     res.send("User to be created here...");
// });

// app.get('/show', (req, res)=> {
//     res.send("To show the data");
// });

// app.get('/show/:id', (req, res)=> {
//     res.send("To show the data = " + req.params.id);
// });

// app.get('/update', (req, res)=> {
//     res.send("Updating the user will be done here...");
// });

// app.get('/delete', (req, res)=> {
//     res.send("Deleting the user will be done here...");
// });

const studentDetails = require('./routes/student');
app.use('/api/v1/studentDetails', studentDetails); // http://localhost:4000/api/v1/studentDetails

const classDetails = require('./routes/class');
app.use('/api/v1/classDetails', classDetails); // http://localhost:4000/api/v1/classDetails

const teacherDetails = require('./routes/teachers');
app.use('/api/v1/teacherDetails', teacherDetails); // http://localhost:4000/api/v1/teacherDetails

app.get('/*', (req, res)=> {
    return res.send("Invalid Route access");
})


// app.listen(process.env.BE_PORT || 4000, ()=> console.log("Server started in the port %d in %s mode: ", 4000, process.env.BE_PORT));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));