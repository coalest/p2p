import "./App.css";

function App() {
  const uuid = crypto.randomUUID();

  return (
    <>
      <h1>Peer to Peer</h1>
      <div>client UUID: {uuid}</div>
      <div className="card"></div>
    </>
  );
}

export default App;
