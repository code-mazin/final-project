import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Input, FormField, Label, Button } from "../styles";

function CourseList({setUser}) {
    const [courses, setCourses] = useState([]);
    const [course_id, setCourse_id] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <Wrapper>
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

export default CourseList
