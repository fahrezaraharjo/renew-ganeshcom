import { Navbar, Welcome, Footer, Services, Tabs, TrustedBy, CategoryList } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <div className="gradient-bg-transactions">
      <Services />
      <Tabs />
    </div>
    <div className="gradient-bg-footer">
      <TrustedBy />
      <CategoryList />
    </div>
    
  </div>
);

export default App;
