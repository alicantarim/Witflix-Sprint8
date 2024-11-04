import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Form.css";
import Profile from "./components/Profile";

const APIDataStatic = [
  {
    createdAt: "2024-10-17T03:53:51.456Z",
    name: "Alyssa Reinger IV",
    avatarUrl: "https://api.multiavatar.com/1212.svg",
    id: "1",
  },
  {
    createdAt: "2024-10-17T07:00:18.480Z",
    name: "Dr. Sharon Howe",
    avatarUrl: "https://api.multiavatar.com/740.svg",
    id: "2",
  },
  {
    createdAt: "2024-10-16T19:29:04.974Z",
    name: "Lila Murray",
    avatarUrl: "https://api.multiavatar.com/128.svg",
    id: "3",
  },
  {
    createdAt: "2024-10-16T19:54:13.416Z",
    name: "Mildred Grimes",
    avatarUrl: "https://api.multiavatar.com/1135.svg",
    id: "4",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

/*
  function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
