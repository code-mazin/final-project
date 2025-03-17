// import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { Box, Button, FormField, Input, Label } from "../styles";

function Profile({user, setUser}) {
    const [bio, setBio] = useState([]);
    const [email, setEmail] = useState([]);
    const [age, setAge] = useState([]);
    const [years_of_exp, setYears_of_exp] = useState([]);
    // const history = useHistory();
    // const [enrolls, setEnrolls] = useState([]);
    
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/me", {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                bio,
                email,
                age,
                years_of_exp
                }),
        }).then((r) => {
            if (r.ok) {
                // history.push("/");
                fetch("/me").then((r) => {
                    if (r.ok) {
                        r.json().then((user) => setUser(user))
                    }
                });
                setBio("");
                setEmail("");
                setAge("");
                setYears_of_exp("");
            }
        })
        
    }

    // function handleDeleteEnroll(id) {
    //     fetch(`/enrolls/${id}`, {
    //         method: "DELETE",
    //     }).then((r) => {
    //         if (r.ok) {
    //             setEnrolls((enrolls) =>
    //             enrolls.filter((enroll) => enroll.id !== id)
    //         );
    //         }
    //     });
    // }
    
    return (
        <Wrapper>
            <Box>
                <h1>Profile</h1>
                <p>Username: {user.username}</p>
                <p>Bio: {user.bio}</p>
                <p>Email: {user.email}</p>
                <p>age: {user.age} years old.</p>
                <p>years of experience: {user.years_of_exp} years.</p>
                <h3>Applied Jobs: </h3>
                <ul>
                    {user.jobs.map((job) => (
                        <li key={job.id}>
                            {job.title}
                        </li>
                    ))}
                </ul>
                <h3>Enrolled Courses: </h3>
                <ul>
                    {user.courses.map((course) => (
                        <li key={course.id}>
                            <span>{course.name}</span>
                            {/* <p>Enroll ID: {enrolls.id}</p> */}
                        </li>
                    ))}
                </ul>
            </Box>
            
            <form onSubmit={handleSubmit}>
            <Box>
                <FormField>
                    <h2>Update Details</h2>
                        <div>
                            <Label htmlFor="bio">Bio:</Label>
                        </div>
                    
                        <Input
                            type="text"
                            id="bio"
                            placeholder="Enter New Bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                </FormField>
                <FormField>
                        <div>
                            <Label htmlFor="email">Email:</Label>
                        </div>
                    
                        <Input
                            type="text"
                            id="email"
                            placeholder="Enter New Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                </FormField>
                <FormField>
                        <div>
                            <Label htmlFor="age">Age:</Label>
                        </div>
                    
                        <Input
                            type="text"
                            id="age"
                            placeholder="Enter Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        
                </FormField>
                <FormField>
                        <div>
                            <Label htmlFor="years_of_exp">Years of experience:</Label>
                        </div>
                    
                        <Input
                            type="text"
                            id="years_of_exp"
                            placeholder="Enter Experience"
                            value={years_of_exp}
                            onChange={(e) => setYears_of_exp(e.target.value)}
                        />
                        
                </FormField>
                <FormField>
                    <Button type="submit">
                            Update
                    </Button>        
                </FormField>
                    
                
            </Box>
            </form>
        </Wrapper>
        
    );
    }
    
    const Wrapper = styled.section`
        max-width: 800px;
        margin: 40px auto;
    `;


export default Profile;