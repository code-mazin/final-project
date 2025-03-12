// import { useHistory } from "react-router-dom";
import { useState } from "react";
// import styled from "styled-components";
// import { Box } from "../styles";

function Profile({user, setUser}) {
    const [bio, setBio] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [age, setAge] = useState([]);
    // const [years_of_exp, setYears_of_exp] = useState([]);
    // const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/me", {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({bio}),
        }).then((r) => {
            if (r.ok) {
                setBio("");
                // history.push("/");
                fetch("/me").then((r) => {
                    if (r.ok) {
                        r.json().then((user) => setUser(user))
                    }
                });
            }
        })
        
    }
    


    
    return (
        <div>
            <h1>Username: {user.username}</h1>
            <h2>Bio: {user.bio}</h2>
            <h2>Email: {user.email}</h2>
            <h2>age: {user.age} years old.</h2>
            <h2>years of experience: {user.years_of_exp} years.</h2>
            <h2>Applied Jobs: </h2>
            <ul>
                {user.jobs.map((job) => (
                    <li key={job.id}>
                        {job.title}
                    </li>
                ))}
            </ul>
            <h2>Enrolled Courses: </h2>
            <ul>
                {user.courses.map((course) => (
                    <li key={course.id}>
                        {course.name}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <h2>Update Details</h2>
                <div>
                    <label htmlFor="bio">Bio:</label>
                </div>
                <div>
                    <input
                    type="text"
                    id="bio"
                    placeholder="Enter New Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    />
                    <button type="submit">
                        Update
                    </button>
                </div>

            </form>
        </div>
    );
    }
    


export default Profile;