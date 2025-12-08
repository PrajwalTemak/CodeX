export default function Editor({ code, setCode }) {
  return (
    <textarea
      rows="20"
      value={code}
      placeholder="Write your code here..."
      onChange={(e) => setCode(e.target.value)}
      style={{ width: "100%" }}
    ></textarea>
  );
}
