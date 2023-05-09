import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, AboutPage, WorkPages, DetailsPage, SolutionPage, DetailsSolutionPage } from './Pages'
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
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/solutions/:id" element={<DetailsSolutionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;