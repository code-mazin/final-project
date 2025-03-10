// import React, { useState } from "react";
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Box } from "../styles";

function Profile({user}) {
    // const [bio, setBio] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [age, setAge] = useState([]);
    // const [years_of_exp, setYears_of_exp] = useState([]);
    
    return (
        <div>
            <h1>Username: {user.username}</h1>
            <h2>Bio: {user.bio}</h2>
            <h2>Email: {user.email}</h2>
            <h2>age: {user.age} years old.</h2>
            <h2>years of experience: {user.years_of_exp} years.</h2>
            <h2>Jobs: </h2>
            <ul>
                {user.jobs.map((job) => (
                    <li key={job.id}>
                        {job.title}
                    </li>
                ))}
            </ul>
            <h2>Courses: </h2>
            <ul>
                {user.courses.map((course) => (
                    <li key={course.id}>
                        {course.name}
                    </li>
                ))}
            </ul>
        </div>
    );
    }
    


export default Profile;