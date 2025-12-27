import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
   
    return (
        <Wrapper>
            <Logo>
                <Link to="/">Den of Devs</Link>
            </Logo>
            <Nav>
                <Button
                    as={NavLink}
                    to="/profile"
                    activeClassname="active"
                >
                    Profile
                </Button>
                <Button
                    as={NavLink}
                    to="/ideas"
                    activeClassname="active"
                >
                    Ideas
                </Button>
                {user.admin && (
                <Button
                    as={NavLink}
                    to="/new-job"
                    activeClassname="active"
                >
                    New Job
                </Button>
                )}
                <Button onClick={handleLogoutClick}>
                    Logout
                </Button>
                
                
                
            </Nav>
        </Wrapper>
    );
}


const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: blue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;

  .active {
    background-color: #2563eb;
    color: white:
    border: 2px solid #1d4ed8;
  }
`;

export default NavBar;
