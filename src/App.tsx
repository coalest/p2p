import { useRef } from "react";
import SharingLink from "./components/SharingLink.tsx";
import fetchOrCreateSessionId from "./lib/fetchOrCreateSessionId.tsx";
import "./App.css";
// import { Peer } from "peerjs";

function App() {
  const clientId = useRef(crypto.randomUUID());

  const searchParams = window.location.search;
  const currentSessionId = fetchOrCreateSessionId(searchParams);
  const sessionId = useRef(currentSessionId);

  // const peer = new Peer(sessionId as UUID);
  return (
    <>
      <h1>Peer to Peer</h1>
      <div>client UUID: {clientId.current}</div>
      <div>session id: {sessionId.current}</div>
      <SharingLink sessionId={sessionId.current} />
    </>
  );
}

export default App;
