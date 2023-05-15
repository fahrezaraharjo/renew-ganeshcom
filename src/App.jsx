import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, AboutPage, WorkPages, DetailsPage, SolutionPage, DetailsSolutionPage, Contact } from './Pages'
import { Navbar } from './components';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPages />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/solutions/:id" element={<DetailsSolutionPage />} />
          <Route path="/contact" element={<Contact />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;