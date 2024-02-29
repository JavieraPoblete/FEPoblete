const Card = ({ title, content }) => {
  return (
    <div style={{ border: "1px solid black", padding: "800px", margin: "800px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};