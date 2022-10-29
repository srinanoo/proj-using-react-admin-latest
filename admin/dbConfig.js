require('dotenv').config();
const mongo = require('mongodb').MongoClient;

let conn;

// const connectDB = async () => {
//     await mongo.connect(process.env.DB_URL, (err, db) => {
//         if(err) throw err;
    
//         // connect or create database
//         conn = db.db("studentProj");
//         console.log("Database Connected!");
//         // console.log(conn);

//         // let collections = await conn.listCollections().toArray();
//         // let collectionNames = collections.map(c => c.name);

//         // if(!collectionNames.includes("studentsDetails")) {
//         //     conn.createCollection("studentsDetails", (err, res)=> {
//         //         if(err) throw err;
//         //         console.log("Collection is created!");
//         //         // console.log(res);
//         //     });
//         // }
//     });

//     return conn;
// }

// module.exports = connectDB;

module.exports = {
    connectToServer: function( callback ) {
        // process.env.DB_URL
        mongo.connect( "mongodb+srv://srinanoo:<password>@cluster0.pyvufrs.mongodb.net/?retryWrites=true&w=majority", ( err, db ) => {
            conn = db.db("students");
            return callback( err );
        } );
    },
    getDb: function() {
        return conn;
    }
};
