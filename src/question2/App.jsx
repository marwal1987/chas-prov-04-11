// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
      );
      const data = await response.json();
      setPosts(data); // Jag begränsar till 10 posts redan i fetchen ( ?_start=0&_limit=10 ) och behöver inte slice(0, 10).
    }
    getPosts();
  }, []);

  // Inte nöjd att alla posts body visas och det är förmodligen fel... Härdsmälta i hjärnan

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            {!show ? "" : <p>{post.body}</p>}
            {!show ? (
              <button onClick={() => setShow(true)}>Visa detaljer</button>
            ) : (
              <button onClick={() => setShow(false)}>Visa mindre</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
