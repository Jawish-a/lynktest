import logo from "./download.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showLogo, setShowLogo] = useState(0);

  useEffect(() => {
    if (showLogo === 1) {
      setTimeout(() => {
        setShowLogo(2);
      }, 900);
    }
  }, [showLogo]);

  return (
    <div className="App">
      <header className="App-header">
        {showLogo === 2 ? (
          <img
            src={logo}
            alt="logo"
            className={`App-logo ${showLogo === 2 ? "" : "fadeIn"}`}
          />
        ) : (
          <p
            onClick={() => setShowLogo(1)}
            className={`App-link ${showLogo === 0 ? "" : "fade"}`}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            بسم الله
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
