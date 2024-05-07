import Header from "./components/Header/Header";
import SectionMainPage from "./components/SectionMainPage";
import SectionMembership from "./components/SectionMembership/SectionMembership";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionMainPage />
        <SectionMembership />
      </main>
    </>
  );
}

export default App;
