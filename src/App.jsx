import { Navbar, Welcome, Footer, Services, Tabs, TrustedBy, CategoryList, GetInTouch } from "./components";

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
    </div>
    <div className="bg-getintouch h-screen">
      <CategoryList />
      <GetInTouch />
    </div>
  </div>
);

export default App;
