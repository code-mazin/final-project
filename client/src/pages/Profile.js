import { useState} from "react";
import styled from "styled-components";
import { Box, Button, FormField, Input, Label } from "../styles";

function Profile({user, setUser}) {
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [years_of_exp, setYears_of_exp] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();

        const body = {};
        if (bio) body.bio = bio;
        if (email) body.email = email;
        if (age) body.age = age;
        if (years_of_exp) body.years_of_exp = years_of_exp;

        fetch("/me", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedUser) => {
                    setUser(updatedUser);
                    setBio("");
                    setEmail("");
                    setAge("");
                    setYears_of_exp("");
                });
            }
        });
    }
    
    return (
        <Wrapper>
            <Logo>Profile:</Logo>
            <Box>
                <p>Username: {user.username}</p>
                <p>Bio: {user.bio}</p>
                <p>Email: {user.email}</p>
                <p>age: {user.age} years old.</p>
                <p>years of experience: {user.years_of_exp} years.</p>
                <h3>Applied Jobs: </h3>
                <ul>
                    {user.jobs?.map((job) => (
                        <li key={job.id}>{job.title}</li>
                    ))}
                </ul>

            </Box>
            <br></br>
            
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
                            type="number"
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

const Logo = styled.h2`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: black;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;


export default Profile;