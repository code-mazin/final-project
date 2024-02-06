import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((jobs) => console.log(jobs));
  }, [])
  return <h1>Hello</h1>
}

export default App;