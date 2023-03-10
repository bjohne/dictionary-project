import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded{" "}
          <a
            href="https://github.com/bjohne/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          by Betina Johne
        </footer>
      </div>
    </div>
  );
}

export default App;
