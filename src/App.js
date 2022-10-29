import logo from './logo.svg';
import React, { useEffect, useState, useContext, createContext, useRef } from 'react';

import './App.css';
import {fetchUtils, Admin, Resource} from 'react-admin';
// import StudentData from './student.json';
// import jsonProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import { StudentsList } from './components/students';

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  const token = 'XXXXXXXXXXXXX';
      options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

// const StudentData = jsonProvider('http://localhost:4000/api/v1/studentDetails/show');
// const StudentData = simpleRestProvider('http://localhost:5000/api/v1/studentDetails/show', fetchJson);
const StudentData = simpleRestProvider('https://dinesh-students-backend.herokuapp.com/api/v1/studentDetails/show', fetchJson);


function App() {
    const [students, fetchStudents] = useState([]);

    useEffect(() => {
      fetch('https://dinesh-students-backend.herokuapp.com/api/v1/studentDetails/show/students', {
        headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000'}})
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          fetchStudents(data);
        })
    }, []);
    

  return (
    <div className="App">
      {/* <Admin dataProvider={StudentData}> */}
        {/* <Resource name="schools" list={ListGuesser} />
        <Resource name="teachers" list={ListGuesser} />
        <Resource name="classrooms" list={ListGuesser} />
        <Resource name="subjects" list={ListGuesser} /> */}
        {/* <Resource name="students" list={StudentsList} />
      </Admin> */}
      <div>
      {students.map((v, i) => <p key={i}><a href={`?id=${v.id}`}>{v.id}</a> {v.name}</p>)}
      </div>

    </div>
  );
}

export default App;
