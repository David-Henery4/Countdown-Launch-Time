import { Countdown, Footer } from "./layout";
function App() {
  return (
    <div className="App layout">
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.djhwebdevelopment.com">David Henery</a>
        .
      </div>
      <main className="main">
        <div className="main__title">
          <h1>We're launching soon</h1>
        </div>
        <Countdown />
      </main>
      <Footer />
    </div>
  );
}

export default App;
