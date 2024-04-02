import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // useEffect to check votesInteresting and votesMindBlowing on component mount
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  useEffect(() => {
    const votesInteresting = 20;
    const votesMindBlowing = 20;
    if (votesInteresting === votesMindBlowing) {
      alert("This fact is equally interesting and mindblowing!");
    }
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="src\assets\image.png" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open" onClick={toggleForm}>
          {formVisible ? "Close" : "Share a Fact"}
        </button>
      </header>

      {formVisible && (
        <form className="fact-form">
          <input type="text" placeholder="Share a fact with the world..." />
          <span>200</span>
          <input type="text" placeholder="Trustworthy source..." />
          <div className="selectdiv">
            <select>
              <option value="">Choose category</option>
              <option value="technology">Technology</option>
              <option value="science">Science</option>
              <option value="finance">Finance</option>
            </select>
          </div>
          <button className="btn btn-large">Post</button>
        </form>
      )}

      <main className="main">
        <aside>
          <ul>
            <li>
              <button className="btn btn-all-categories">All</button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Technology
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#16a34a" }}
              >
                Science
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#f97316" }}
              >
                History
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#eab308" }}
              >
                Society
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#ef4444" }}
              >
                Finance
              </button>
            </li>
          </ul>
        </aside>

        <section>
          <ul>
            <li className="fact">
              <p>
                React is being developed by Meta (formerly facebook)
                <a
                  className="source"
                  href="https://opensource.fb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Source)
                </a>
              </p>
              <span className="tag" style={{ backgroundColor: "#3b82f6" }}>
                Technology
              </span>
              <div className="vote-buttons">
                <button>👍 20</button>
                <button>🤯 12</button>
                <button>⛔ 4</button>
              </div>
            </li>
            <li className="fact">
              <p>
                The shortest war in history lasted 38 minutes! It was between
                Britain and Zanzibar on August 27, 1896. It was over the
                ascension of the next Sultan in Zanzibar and resulted in a
                British victory.
                <a
                  className="source"
                  href="https://www.historic-uk.com/HistoryUK/HistoryofBritain/The-Shortest-War-in-History/#:~:text=The%20little%20known%20Anglo%2DZanzibar,Britain%20and%20Germany%20in%201890."
                  target="_blank"
                  rel="noreferrer"
                >
                  (Source)
                </a>
              </p>

              <span className="tag" style={{ backgroundColor: "#f97316" }}>
                History
              </span>

              <div className="vote-buttons">
                <button className="vote-button">👍 20</button>
                <button className="vote-button">🤯 12</button>
                <button className="vote-button">⛔ 4</button>
              </div>
            </li>
            <li className="fact">
              <p>
                Millennial dads spend 3 times as much time with their kids than
                their fathers spent with them. In 1982, 43% of fathers had never
                changed a diaper. Today, that number is down to 3%
                <a
                  className="source"
                  href="https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids/?rebelltitem=1#rebelltitem1"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Source)
                </a>
              </p>

              <span className="tag" style={{ backgroundColor: "#eab308" }}>
                Society
              </span>

              <div className="vote-buttons">
                <button className="vote-button">👍 20</button>
                <button className="vote-button">🤯 12</button>
                <button className="vote-button">⛔ 4</button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
