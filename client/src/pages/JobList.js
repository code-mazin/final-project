import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Input, FormField, Label, Button } from "../styles";

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [job_id, setJob_id] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
            }
        })
    }

    return (
        <Wrapper>
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
                        <h2>Job application</h2>
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

export default JobList;
