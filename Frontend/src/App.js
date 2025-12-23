import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My First Jenkins Pipeline</h1>
      <p>Backend says: <strong>{data || "Loading..."}</strong></p>
    </div>
  );
}

export default App;