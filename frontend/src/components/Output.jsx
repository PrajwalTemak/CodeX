export default function Output({ output }) {
  return (
    <>
      <h2>Output</h2>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontSize: "16px",
          backgroundColor: "#000",
          padding: "10px",
          borderRadius: "8px",
          height: "90%",
        }}
      >
        {output}
      </pre>
    </>
  );
}
