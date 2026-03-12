import { useState} from "react";
import styled from "styled-components";
import { Box, Button, FormField, Input } from "../styles";

function Profile({user, setUser}) {
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [years_of_exp, setYears_of_exp] = useState("");
    
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
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
            <br></br>
            <Box>
                <h2>Username: {capitalize(user.username)}</h2>
                <h3>Bio: {user.bio}</h3>
                <h3>Email: {user.email}</h3>
                <h3>age: {user.age} years old.</h3>
                <h3>years of experience: {user.years_of_exp} years.</h3>
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
                            <h3 htmlFor="bio">Bio:</h3>
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
                            <h3 htmlFor="email">Email:</h3>
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
                            <h3 htmlFor="age">Age:</h3>
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
                            <h3 htmlFor="years_of_exp">Years of experience:</h3>
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
            <br></br>
            <Box>
                <h2>Saved jobs:</h2>
            </Box>
        </Wrapper>
        
    );
    }
    
const Wrapper = styled.section`
    max-width: 800px;
    margin: 40px auto;
`;

const Logo = styled.h2`
  font-family: "Times New Roman", cursive;
  font-size: 3rem;
  color: #628141;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;


export default Profile;