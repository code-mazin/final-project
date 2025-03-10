import React from "react";
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Box } from "../styles";

function Profile({user}) {
    
    return (
        <div>
            <h1>Username: {user.username}</h1>
            <h2>Bio: {user.bio}</h2>
            <h2>Email: {user.email}</h2>
            <h2>age: {user.age}</h2>
            <h2>years of experience: {user.years_of_exp}</h2>
            <h2>Jobs: </h2>
            <ul>
                {user.jobs.map((job) => (
                    <li key={user.id}>
                        {job.title}
                    </li>
                ))}
            </ul>
        </div>
    );
    }
    


export default Profile;