import AboutUs from "./AboutUs";
import "./App.css";
import ContactsContainer from "./ContactsContainer";
import DesignText from "./DesignText";
import Footer from "./Footer";
import Header from "./Header";
import Illustration from "./Illustration";
import ImageCover from "./ImageCover";
import PartnerContainer from "./PartnerContainer";
import SkillsContainer from "./SkillsContainer";
import Subscribe from "./Subscribe";
import Team from "./Team";
import ToolKitConatiner from "./ToolKitContainer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Illustration />
        <DesignText />
        <AboutUs />
        <ToolKitConatiner />
        <SkillsContainer />
        <Team />
      </div>
      <div>
        <ImageCover />
      </div>
      <div className="App">
        <PartnerContainer />
        <Subscribe />
        <ContactsContainer />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
