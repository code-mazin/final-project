import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import JobList from "../pages/JobList";
import CourseList from "../pages/CourseList";
import Profile from "../pages/Profile";
import JobShow from "../pages/JobShow";



function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            }
        });
    }, []);

    
    
    if (!user) return <Login onLogin={setUser} />;
    
    return (
        <>
        <NavBar user={user} setUser={setUser} />
        <main>
            <Switch>
                <Route exact path="/">
                    <JobList user={user} setUser={setUser} />
                </Route>
                <Route exact path="/courses">
                    <CourseList setUser={setUser} />
                </Route>        
                <Route exact path="/Profile">
                    <Profile user={user} setUser={setUser} />
                </Route>  
                <Route exact path="/jobs/:id">
                    <JobShow />
                </Route>      
            </Switch>
        
        </main>
            
        </>
    );
}

export default App;