import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Programs from "./components/Programs";
import Highlights from "./components/Highlights";
import Facilities from "./components/Facilities";
import AdmissionProcess from "./components/AdmissionProcess";
import ImportantDates from "./components/ImportantDates";
import RequiredDocuments from "./components/RequiredDocuments";


function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <WhyChoose />
        <Programs />
        <Highlights />
        <Facilities />
        <AdmissionProcess />
        <ImportantDates />
        <RequiredDocuments />
      </main>
    </>
  );
}

export default App;
