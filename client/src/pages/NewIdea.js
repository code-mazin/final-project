import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewIdea({ user }) {
    const [idea, setIdea] = useState("");
    const [details, setDetails] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/ideas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idea,
                details
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/ideas");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <Wrapper>
            <WrapperChild>
                <h2>New Idea</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="idea">Idea</Label>
                        <Input
                            type="text"
                            id="idea"
                            placeholder="Title..."
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="details">Details</Label>
                        <Textarea
                            id="details"
                            rows={10}
                            placeholder="Details..."
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Submit Idea"}
                        </Button>
                    </FormField>
                    <FormField>
                        {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </FormField>
                </form>
            </WrapperChild>
            <WrapperChild>
                <h1>{idea}</h1>
                <p>
                    <em>Details: {details}</em>
                    &nbsp;·&nbsp;
                    <cite>By {user.username}</cite>
                </p>
            </WrapperChild>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewIdea;