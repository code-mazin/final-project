import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../styles";

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/jobs")
        .then((r) => r.json())
        .then(setJobs);
    }, []);

    return (
        <Wrapper>
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <Job key={job.id}>
                        <Box>
                            <h2>{job.title}</h2>
                            <p>
                                <em>Salary: {job.salary} $</em>
                            </p>
                        
                        </Box>
                    </Job>
                ))
            ) : (
                <>
                <h2>No Jobs Found</h2>
            </>
            )}
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
