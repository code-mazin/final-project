import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Button } from "../styles";
import { useHistory } from "react-router-dom";

function JobApp({ setUser}) {
    const { id } = useParams();  // <--- this reads :id from "/jobs/:id/apply"
    const [job, setJob] = useState(null);
    const [coverLetter, setCoverLetter] = useState("");
    const history = useHistory();

    // Load job details
    useEffect(() => {
        fetch(`/jobs/${id}`)
            .then((r) => r.json())
            .then(setJob);
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/job_applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                job_id: job.id,
                cover_letter: coverLetter,
            }),
        }).then((r) => {
            if (r.ok) {
                fetch("/me")
                    .then((res) => res.json())
                    .then((updatedUser) => {
                        // update global user state
                        setUser(updatedUser)
                        alert("Application submitted!");
                        setCoverLetter("");
                        history.push("/profile");
                    })   
            }
            else {
                r.json().then(err => alert(err.errors.join(", ")))
            }
        })
    }
    
    if (!job) return <p>Loading job details...</p>;
    return (
        <Wrapper>
            <Box>
                <h1>Apply for: {job.title}</h1>
                <p><strong>Salary</strong> {job.salary} $</p>
                <p><strong>Technology:</strong> {job.technology}</p>
                <p><strong>Email:</strong> {job.email}</p>
                <p><strong>Description:</strong> {job.desc}</p>
                <Divider />
                <h2>Your Application</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Cover Letter:
                        <textarea
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            required
                            rows={6}
                            style={{width: "100%"}}
                        />
                    </label>
                    <Button type="submit" disabled={!coverLetter.trim()}>
                        Submit Application
                    </Button>
                </form>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default JobApp;