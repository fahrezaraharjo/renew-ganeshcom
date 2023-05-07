import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, AboutPage, WorkPages, DetailsPage } from './Pages'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='gradient-bg-welcome'>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPages />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          {/* <Route path="/solution" component={Solution} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;