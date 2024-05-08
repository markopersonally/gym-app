import Header from "./components/Header/Header";
import SectionGallery from "./components/SectionGallery/SectionGallery";
import SectionMainPage from "./components/SectionMainPage/SectionMainPage";
import SectionMembership from "./components/SectionMembership/SectionMembership";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionMainPage />
        <SectionMembership />
        <SectionGallery />
      </main>
    </>
  );
}

export default App;
