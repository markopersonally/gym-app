import Header from "./components/Header/Header";
import SectionGallery from "./components/SectionGallery/SectionGallery";
import SectionMainPage from "./components/SectionMainPage/SectionMainPage";
import SectionSmallPanel from "./components/SectionSmallPanel/SectionSmallPanel";
import SectionMembership from "./components/SectionMembership/SectionMembership";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionMainPage />
        <SectionSmallPanel />
        <SectionGallery />
        <SectionMembership />
      </main>
    </>
  );
}

export default App;
