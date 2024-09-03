
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">LEXICON</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-danger text-white text-center py-4">
        <h1>Marketplace UI!</h1>
      </header>

      {/* Main Content */}
      <div className="container mt-5">
        <h2>Advertisement List</h2>
        <div className="row">
          {/* Advertisement Card */}
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3" style={{ backgroundColor: '#ccc', height: '150px' }}>
                    <p className="text-muted">150 x 150</p>
                  </div>
                  <h5 className="card-title">Ad {i + 1}</h5>
                  <p className="card-text">
                    This is the {i === 0 ? 'first' : i === 1 ? 'second' : i === 2 ? 'third' : i + 1 + 'th'} advertisement.
                  </p>
                  <p className="card-text"><strong>Contact:</strong> ***</p>
                  <a href="/" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
