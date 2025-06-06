import { useRef, useState } from "react";
// import { Peer } from "peerjs";
import "./App.css";

function App() {
  const clientId = useRef(crypto.randomUUID());

  let currentSession;
  if (window.location.search.includes("?")) {
    currentSession = window.location.search.substring(1);
  } else {
    currentSession = crypto.randomUUID();
  }

  const [text, setText] = useState<string>("");
  const [sessionId, setSessionId] = useState<string | null>(currentSession);

  // const peer = new Peer(sessionId as UUID);
  return (
    <>
      <h1>Peer to Peer</h1>
      <div>client UUID: {clientId.current}</div>
      <div>session id: {sessionId}</div>
      <h2>Create a session</h2>
      <p>Either paste a session in or create your own and share it</p>
      <input onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => setSessionId(text)}>Submit</button>
    </>
  );
}

export default App;
