import Header from "./components/Header/Header";
import SectionGallery from "./components/SectionGallery/SectionGallery";
import SectionMainPage from "./components/SectionMainPage/SectionMainPage";
import SectionSmallPanel from "./components/SectionSmallPanel/SectionSmallPanel";
import SectionMembership from "./components/SectionMembership/SectionMembership";
import SectionMotivation from "./components/SectionMotivation/SectionMotivation";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionMainPage />
        <SectionSmallPanel />
        <SectionGallery />
        <SectionMotivation />
        <SectionMembership />
      </main>
    </>
  );
}

export default App;
