import { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle"
import styled from "styled-components";
import { Box, Button, Input} from "../styles";
import { Link } from "react-router-dom"

function JobList({ savedJobs, setSavedJobs}) {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useDocumentTitle("Den of Devs")
    
    useEffect(() => {
        fetch("/jobs")
        .then((r) => r.json())
        .then(setJobs);
    }, []);

    function handleSave(jobId) {
        fetch("/saved_jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ job_id: jobId }),
        })
            .then((r) => r.json())
            .then((newSavedJob) => {
                console.log("NEW:", newSavedJob);
                setSavedJobs((prev) => [...prev, newSavedJob]);
            });
    }

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.technology.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <Wrapper>
            <Logo>Jobs:</Logo>
            <br></br>
            <Box>
                <h2>Search</h2>
                    <Input type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />                        
            </Box>
            <br></br>
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => {
                    const isSaved = savedJobs.some((j) => j.job_id === job.id);

                    return(
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

                                <Button onClick={() => handleSave(job.id)} disabled={isSaved}>
                                    {isSaved ? "Saved ✅" : "Save"}
                                </Button>
                            </ButtonGroup>
                    
                        </Box>
                    </Job>
                )})
            ) : (
                <>
                <h2>No Matching Jobs Found</h2>
            </>
            )}
            <Footer>
                To post jobs email: <strong>denofdevs.jobs@gmail.com</strong>
            </Footer>
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

const Footer = styled.footer`
    margin-top: 40px;
    padding: 20px;
    text-align: center;
    font-size: 0.9rem;
    color: #555;
    border-top: 1px solid #ccc;
`

export default JobList;
