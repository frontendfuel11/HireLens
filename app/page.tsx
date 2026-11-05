export default function HomePage() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">YOUR NEXT MOVE STARTS HERE</p>
        <h1 id="hero-title">
          Find the right role.
          <br />
          <span>Show them your best.</span>
        </h1>
        <p className="intro">
          HireLens helps you bring your experience into focus and take the next
          step in your career with confidence.
        </p>
        <a className="button" href="mailto:hello@hirelens.com">
          Get started <span aria-hidden="true">→</span>
        </a>
      </section>
      <footer className="footer">A clearer view of your next opportunity.</footer>
    </main>
  );
}
