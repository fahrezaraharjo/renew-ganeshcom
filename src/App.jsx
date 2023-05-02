import { Navbar, Tabs } from "./components";
import { CategoryList, FeaturedProduct, Services, TrustedBySection, GetInTouch, Welcome, Artikel, AboutUs } from "./Sections";

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
    </div>
      <TrustedBySection />
    <div className="bg-getintouch">
      <CategoryList />
      <GetInTouch />
    </div>
    <div className="gradient-bg-product">
      <FeaturedProduct />
      <Artikel />
    </div>
    <div className="gradient-bg-footer">
      <AboutUs />
    </div>
  </div>
);

export default App;
