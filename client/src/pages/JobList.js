import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Button} from "../styles";
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
            <br></br>
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <Job key={job.id}>
                        <Box>  
                            <h2>{job.title}</h2>
                            <p>
                                <strong>Salary:</strong> {job.salary} $
                            </p>
                            <p>
                                <strong>Technology:</strong> {job.technology}
                            </p>
                            <p>
                                <strong>Work from home:</strong>{job.work_from_home ? "✅ Available" : "❌ Not Available"} 
                            </p>
                            <p>
                                <strong>Employer Email:</strong> {job.email}
                            </p>
                            <p>
                                <strong>Description:</strong> {job.desc}
                            </p>
                            <Divider/>
                    
                           <ButtonGroup>
                                <Button 
                                    as={Link}
                                    to={`jobs/${job.id}/apply`}
                                >
                                    Apply
                                </Button>

                                <Button>
                                    Save
                                </Button>
                            </ButtonGroup>
                    
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

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`

export default JobList;
