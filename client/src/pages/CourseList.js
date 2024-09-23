import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../styles";

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/courses")
        .then((r) => r.json())
        .then(setCourses);
    }, []);

    return (
        <Wrapper>
            {courses.length > 0 ? (
                courses.map((course) => (
                    <Course key={course.id}>
                        <Box>
                            <h2>{course.name}</h2>
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
