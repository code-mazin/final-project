import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {Box} from "../styles"


function JobShow (){
    const [{ data: job, error, status }, setJob] =useState({
        data: null,
        error: null,
        status: "pending",
    });
    const { id } = useParams();

    useEffect(() => {
        fetch(`/jobs/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((job) =>
                    setJob({data: job, error: null, status: "resolved" })
            );
            } else {
                r.json().then((err) =>
                    setJob({data: null, error: err.error, status: "rejected" })
            );
            }
        });
    }, [id]);

    if (status === "pending") return <h2>Loading...</h2>;
    if (status === "rejected") return <h2>Error: {error}</h2>;

    return (
        <Wrapper>
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
                    <em>Description: {job.desc}</em>
                </p>
            </Box>
        </Wrapper>
    )   
}

const Wrapper = styled.section`
max-width: 800px;
margin:40px auto;
`;

export default JobShow;