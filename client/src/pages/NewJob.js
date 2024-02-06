import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

function NewJob({ user }) {
    const [title, setTitle] = useState("new job");
    const [salary, setSalary] = useState("new salary")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

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
                <h2>Create Job Application</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="salary">Salary</Label>
                        <Input
                        type="text"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
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

export default NewJob; 