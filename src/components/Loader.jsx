export default function Loader({ loading }) {
  return (
    <section className="Loader-container">
      <section className="spinner-container">
        <section className="loading-spinner">
          <h1>{loading}</h1>
        </section>
      </section>
    </section>
  );
}
