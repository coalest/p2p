import { useState } from "react";

const SharingLink = ({ sessionId }: { sessionId: string }) => {
  const [copyStatus, setCopyStatus] = useState<string>("");

  const copyToClipboard = async (sessionId: string) => {
    setCopyStatus("Copied!");
    await navigator.clipboard.writeText(`localhost:5173?${sessionId}`);
    setTimeout(() => setCopyStatus(""), 1000);
  };

  return (
    <>
      <button onClick={() => copyToClipboard(sessionId)}>Sharing link</button>
      <span className="copy-status">{copyStatus}</span>
    </>
  );
};

export default SharingLink;
