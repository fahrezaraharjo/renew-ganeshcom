import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, AboutPage, WorkPages, DetailsPage, SolutionPage } from './Pages'
import { Navbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPages />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/solution" element={<SolutionPage /> } />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;