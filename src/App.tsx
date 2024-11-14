import { Routes, Route, Link } from "react-router-dom"; // +
import bg from '/Rabbit_face.jpg'
// +
function App() {
  return (
    <>
      <section>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <img src={bg}></img>
      </section>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}


function About() {
  return (
    <>
      <section>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </section>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;