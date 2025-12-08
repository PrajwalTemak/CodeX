import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("print('Hello')");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const res = await fetch(
        "https://special-sniffle-v6g9j7xp6wcwvvg-8000.app.github.dev/run",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ language, code, input }),
        }
      );

      const data = await res.json();
      setOutput(data.output || data.error || "No output");
    } catch (err) {
      setOutput("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🧑‍💻 Online Code Runner</h1>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="javascript">JavaScript</option>
      </select>

      <br /><br />

      <textarea
        rows={10}
        cols={50}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br /><br />

      <textarea
        rows={4}
        cols={50}
        placeholder="Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={runCode}>Run Code</button>

      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
