import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { Box, Button } from "../styles";

function IdeaList() {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        fetch("/ideas")
            .then((r) => r.json())
            .then(setIdeas);
    }, []);

    return (
        <Wrapper>
            <Logo>Ideas:</Logo>
            {ideas.length > 0 ? (
                ideas.map((idea) => (
                    <Idea key={idea.id}>
                        <Box>
                            <h2>{idea.idea}</h2>
                            <p>
                               <h4><em>Details: {idea.details}</em></h4>
                                &nbsp;·&nbsp;
                                <cite>Suggested By {idea.user.username}</cite>
                            </p>
                        </Box>
                    </Idea>
                ))
            ) : (
                <>
                <h2>No Ideas Found</h2>
                <Button as={Link} to="/new">
                    new idea
                </Button>
                </>
            )}
            <Button as={Link} to="/new">
                New Idea
            </Button>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Idea = styled.article`
  margin-bottom: 24px;
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

export default IdeaList;

