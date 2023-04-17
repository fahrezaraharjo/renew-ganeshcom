import { Navbar, Welcome, Footer, Services, Transactions, Tabs } from "./components";

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
    {/* 
    <Transactions />
    <Footer /> */}
  </div>
);

export default App;
