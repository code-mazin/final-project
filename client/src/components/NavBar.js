import React from "react";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser, setSavedJobs }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setSavedJobs([]);
                setUser(null);

                toast.success("Logged out successfully!");
            }
        });
    }
   
    return (
        <Wrapper>
            <Logo>
                <Link to="/">Den of Devs</Link>
            </Logo>
            <Nav>
                {!user && (
                    <Button
                        as={NavLink}
                        to="/login"
                        activeClassname="active"
                    >
                        Login
                    </Button>
                )}
                { user && (
                    <Button
                        as={NavLink}
                        to="/profile"
                        activeClassname="active"
                     >
                        Profile
                    </Button>
                )}
                {user?.admin && (
                <Button
                    as={NavLink}
                    to="/new-job"
                    activeClassname="active"
                >
                    New Job
                </Button>
                )}

                {user && (
                    <Button onClick={handleLogoutClick}>
                    Logout
                </Button>
                )}
                
                
                
                
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

// const Logo = styled.h1`
//   font-family: "Times New Roman", cursive;
//   font-size: 3rem;
//   color: #628141;
//   margin: 0;
//   line-height: 1;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;

  .active {
    background-color: #8BAE66;
    color: white;
    border: 2px solid #1B211A;
  }
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #628141;
  margin: 0;
  line-height: 1;

  a,
  a:visited,
  a:hover,
  a:active {
    color: #628141;
    text-decoration: none;
  }
`;

export default NavBar;
