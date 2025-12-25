import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Button } from "../styles";
import { Link } from "react-router-dom"

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
                            <em><h2>{job.title}</h2></em>
                            <p>
                                <em><strong>Salary:</strong> {job.salary} $</em>
                            </p>
                            <p>
                                <em><strong>Technology:</strong> {job.technology}</em>
                            </p>
                            <p>
                                <em><strong>Work from home:</strong>{job.work_from_home ? "✅ Available" : "❌ Not Available"}</em> 
                            </p>
                            <p>
                                <em><strong>Employer Email:</strong> {job.email}</em>
                            </p>
                            <p>
                                <em><strong>Description:</strong> {job.desc}</em>
                            </p>
                            <Divider/>
                            <Button 
                                as={Link}
                                to={`jobs/${job.id}/apply`}
                            >
                                Apply
                            </Button>
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
