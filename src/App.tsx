import './App.css'
import { useNavigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const PageTwo = () => {
  return (
    <>
      <section className='page2'>
        <a className="btn" href='/'>hello</a>
      </section>
    </>
  );
};
function App() {
  return (
    <>
      <section className='home'>
        <a className='btn' href='/page2'>hii</a>
      </section>

      <Router>
        <Routes>
          <Route path="/page2" element={<PageTwo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
