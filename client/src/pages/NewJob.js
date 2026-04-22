// This component is not rendered.
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea, Box } from "../styles";


function NewJob({ user }) {
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [technology, setTechnology] = useState("");
    const [email, setEmail] = useState("");
    const [workFromHome, setWorkFromHome] = useState(false);
    const [desc, setDesc] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useDocumentTitle("Den of Devs | New Job")

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/jobs", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                title,
                salary,
                technology,
                email,
                work_from_home: workFromHome,
                desc
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Wrapper>
            <WrapperChild>
                <Logo>Create Job</Logo>
                <br></br>
                <Box>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            type="text"
                            id="title"
                            placeholder="Title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="technology">Technology</Label>
                        <Input
                            type="text"
                            id="technology" 
                            placeholder="Technology"
                            value={technology}
                            onChange={(e) => setTechnology(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="salary">Salary</Label>
                        <Input
                            type="text"
                            id="salary"
                            placeholder="Salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="email">Employer Email</Label>
                        <Input
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label>Work Location</Label>
                        <Label>
                            <input
                                type="radio"
                                name="workFromHome"
                                checked={workFromHome === true}
                                onChange={() => setWorkFromHome(true)}
                            />
                            Work From Home
                        </Label>
                        <Label>
                            <input
                                type="radio"
                                name="workFromHome"
                                checked={workFromHome === false}
                                onChange={() => setWorkFromHome(false)}
                            />
                            Work From Office
                        </Label>
                    </FormField>
                    <FormField>
                        <Label htmlFor="desc">Description</Label>
                        <Textarea
                            id="desc"
                            rows={10}
                            placeholder="Description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Submit"}
                        </Button>
                    </FormField>
                    <FormField>
                        {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </FormField>
                </form>
                </Box>
            </WrapperChild>
            <WrapperChild>
                <h1>{title}</h1>
                <h3>{technology}</h3>
                <h4>{salary} $ </h4>
                <h5>{email}</h5>
                <p>
                    <em>{desc}</em>
                </p>
                
            </WrapperChild>
            
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
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

export default NewJob; 