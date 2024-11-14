import { Routes, Route, Link } from "react-router-dom"; // +
import bg from '/Rabbit_face.jpg'
import './App.css';

// +
function App() {
  return (
      <Routes>  
        <Route path="/test-react-pages" element={<Home />} />
        <Route path="/test-react-pages/about" element={<About />} />
      </Routes>
  );
}

// + Home() & About()
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <img src={bg}></img>
      </main>
      <nav>
        <Link to="/test-react-pages/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/test-react-pages">Home</Link>
      </nav>
    </>
  );
}
export default App;