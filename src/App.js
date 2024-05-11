import Header from "./components/Header/Header.jsx";
import SectionGallery from "./components/SectionGallery/SectionGallery.jsx";
import SectionMainPage from "./components/SectionMainPage/SectionMainPage.jsx";
import SectionMembership from "./components/SectionMembership/SectionMembership.jsx";
import SectionSmallPanel from "./components/SectionSmallPanel/SectionSmallPanel.jsx";
import SectionAbout from "./components/SectionAbout/SectionAbout.jsx";
import SectionContact from "./components/SectionContact/SectionContact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionMainPage />
        <SectionSmallPanel />
        <SectionGallery />
        <SectionMembership />
        <SectionAbout />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
