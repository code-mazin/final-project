import { useEffect, useState } from "react";
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
            <Logo>Jobs:</Logo>
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <Job key={job.id}>
                        <Box>
                            <h2>{job.title}</h2>
                            <p>
                                <em>Salary: {job.salary} $</em>
                            </p>
                            <p>
                                <em>Technology: {job.technology}</em>
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
