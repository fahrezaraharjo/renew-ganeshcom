import { Navbar, Tabs } from "./components";
import { CategoryList, FeaturedProduct, Services, TrustedBySection, GetInTouch, Welcome, Artikel } from "./Sections";

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
      <TrustedBySection />
    </div>
    <div className="bg-getintouch">
      <CategoryList />
      <GetInTouch />
    </div>
    <div className="gradient-bg-product">
      <FeaturedProduct />
      <Artikel />
    </div>
  </div>
);

export default App;
