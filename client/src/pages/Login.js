import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button, Box } from "../styles";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Wrapper>
            <Box>
            {/* <Logo>Den of Devs </Logo> */}
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <Divider />
                    <p>
                        Don't have an account? &nbsp;
                        <Button onClick={() => setShowLogin(false)}>
                            Sign up
                        </Button>
                    </p>
                </>
            ) : (
                <>
                <SignUpForm onLogin={onLogin} />
                <Divider />
                <p>
                    Already have an account? &nbsp;
                    <Button onClick={() => setShowLogin(true)}>
                        Login
                    </Button>
                </p>
                </>
            )}
        </Box>
        </Wrapper>
    );
}


const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;