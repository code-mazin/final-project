import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Input, FormField, Label, Button } from "../styles";

function CourseList({setUser}) {
    const [courses, setCourses] = useState([]);
    const [course_id, setCourse_id] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'

    useEffect(() => {
        fetch("/courses")
        .then((r) => r.json())
        .then(setCourses);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/enrolls", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ course_id }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                setCourse_id("");
                fetch("/me").then((r) => {
                    if (r.ok) {
                        r.json().then((user) => setUser(user))
                    }
                });
            }
        })
    }

    function likeSwitch(e) {
        const heart = e.target;
        if ( heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.className = "activated-heart";
        } else {
            heart.innerText = EMPTY_HEART;
            heart.className = "Like! ♡"
        }
    }

    return (
        <Wrapper>
            <Logo>Courses:</Logo>
            {courses.length > 0 ? (
                courses.map((course) => (
                    <Course key={course.id}>
                        <Box>
                            <h2>{course.name}</h2>
                            <p>
                                <em>Course ID: {course.id}</em>
                            </p>
                            <p>
                                <em>Technology: {course.technology}</em>
                            </p>
                            <p>
                                <em>Duration: {course.duration} Hours</em>
                            </p>
                            <p>
                                <em>Price: {course.price} $</em>
                            </p>
                            <Divider/>
                            <footer>
                                <span>Like! <span onClick={(likeSwitch)}>&#x2661;</span></span>
                            </footer>
                        </Box>
                    </Course>
                ))
            ) : (
                <>
                <h2>No Courses Found</h2>
                </>
            )}
                <form onSubmit={handleSubmit}>
                <Box>
                    <FormField>
                        <h2>Course Enrollment</h2>
                            <Label htmlFor="course_id"> Course ID:</Label>
                            <Input
                                type="text"
                                placeholder="Enter Course ID..."
                                id="course_id"
                                autoComplete="off"
                                value={course_id}
                                onChange={(e) => setCourse_id(e.target.value)}
                            />
                    </FormField>
                    <FormField>
                        <Button variant="fill" color="primary" type="submit">
                            {isLoading ? "Loading..." : "Enroll"}
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

const Course = styled.article`
  margin-bottom 24px;
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


export default CourseList
