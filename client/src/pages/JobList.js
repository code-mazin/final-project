import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Box, Input, FormField, Label, Button } from "../styles";

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [job_id, setJob_id] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        fetch("/jobs")
        .then((r) => r.json())
        .then(setJobs);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/seeks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ job_id }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                setJob_id("");
                history.push('/');
            }
        })
    }

    return (
        <Wrapper>
            <Logo>Jobs:</Logo>
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <Job key={job.id}>
                        <Box>
                            <h2>{job.title}</h2>
                            <p>
                                <em>Job ID: {job.id}</em>
                            </p>
                            <p>
                                <em>Salary: {job.salary} $</em>
                            </p>
                            <p>
                                <em>Technology: {job.technology}</em>
                            </p>
                            <p>
                                <Link to={`/jobs/${job.id}`}>Read More...</Link>
                            </p>
                            <Divider/>
                        </Box>
                    </Job>
                ))
            ) : (
                <>
                <h2>No Jobs Found</h2>
            </>
            )}
            <form onSubmit={handleSubmit}>
                <Box>
                    <FormField>
                        <h2>Job Application</h2>
                            <Label htmlFor="job_id">Job ID:</Label>
                            <Input
                                type="text"
                                placeholder="Enter Job ID..."
                                id="job_id"
                                autoComplete="off"
                                value={job_id}
                                onChange={(e) => setJob_id(e.target.value)}
                            />
                    </FormField>
                    <FormField>
                        <Button variant="fill" color="primary" type="submit">
                            {isLoading ? "Loading..." : "Apply"}
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

const Job = styled.article`
  margin-bottom: 24px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
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

export default JobList;
