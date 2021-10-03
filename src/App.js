import "./App.css";
function App() {
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        {" "}
        <h3>Welcome to Brooke's Portfolio</h3>{" "}
        <div className="img">
          <a href="https://github.com/brookecalhoun">
            <img
              src={`${process.env.PUBLIC_URL}/github.png`}
              className="App-logo"
              alt="logo"
            />{" "}
          </a> &nbsp;
          <a href="https://www.linkedin.com/in/brooke-calhoun/">
            <img
              src={`${process.env.PUBLIC_URL}/linkedin.png`}
              className="App-logo"
              alt="logo"
            />{" "}
          </a>
        </div>
        <br />
        <p>
          Site under way! Click the symbol to checkout my GitHub or LinkedIn in
          the meantime!
        </p>{" "}
      </header>{" "}
    </div>
  );
}
export default App;
