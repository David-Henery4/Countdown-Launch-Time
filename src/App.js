import { Countdown, Footer } from "./layout";
function App() {
  return (
    <div className="App layout">
      <section className="main">
        <div className="main__title">
          <h1>We're launching soon</h1>
        </div>
          <Countdown />
      </section>
      <Footer />
    </div>
  );
}

export default App;
