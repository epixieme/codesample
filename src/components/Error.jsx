export default function Error({ error }) {
  return (
    <section
      style={
        error && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }
      }
    >
      <h1>{error}</h1>
    </section>
  );
}
