import "./App.css";
function App() {
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        {" "}
        <h3>Welcome to Brooke's Portfolio</h3>{" "}
        <a href="https://github.com/brookecalhoun">
          <img
            src={`${process.env.PUBLIC_URL}/github.png`}
            className="App-logo"
            alt="logo"
          />{" "}
        </a>
        <br />
        <p>Site under way! Click the symbol to checkout my GitHub in the meantime!</p>{" "}
      </header>{" "}
    </div>
  );
}
export default App;
