import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Syed Khalid</h1>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          3rd Year B.Tech EEE student interested in all things quantumy and computery.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Haskell</li>
          <li>Scientifc Computing</li>
          <li>Quantum Physics</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="project">
          <h3>Partial Differential Equations Solver</h3>
          <p>Implemented Finite Element Method in python to solve simple PDEs.</p>
        </div>
        <div className="project">
          <h3>Arch Linux pseudo-distro</h3>
          <p>A set of GNU/Linux dotfiles aiming at creating a powerful, optimized, all-purpose and lightweight general computing environment.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me at imsyedkhalid@gmail.com.
        </p>
      </section>
    </div>
  );
}

export default App;

