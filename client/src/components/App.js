import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import JobList from "../pages/JobList";
import Profile from "../pages/Profile";
import NewJob from "../pages/NewJob";
import JobApp from "../pages/JobApp";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      body {
    margin: 0;
    background-color: #EBD5AB;
    font-family: system-ui, sans-serif;
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/saved_jobs")
      .then((r) => r.json())
      .then(setSavedJobs);
  }, []);

  return (
    <>
      <GlobalStyle />

      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <>
          <NavBar user={user} setUser={setUser} setSavedJobs={setSavedJobs} />
          <main>
            <Switch>
              <Route exact path="/">
                <JobList user={user} setUser={setUser} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
              </Route>

              <Route exact path="/profile">
                <Profile
                  user={user} 
                  setUser={setUser} 
                  savedJobs={savedJobs}
                  setSavedJobs={setSavedJobs}
                />
              </Route>

              {user.admin && (
                <Route exact path="/new-job">
                  <NewJob user={user} />
                </Route>
              )}

              <Route exact path="/jobs/:id/apply">
                <JobApp setUser={setUser} />
              </Route>
            </Switch>
          </main>
        </>
      )}
    </>
  );
}

export default App;