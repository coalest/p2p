const fetchOrCreateSessionId = (params: string) =>
  params.includes("?") ? params.substring(1) : crypto.randomUUID();

export default fetchOrCreateSessionId;
