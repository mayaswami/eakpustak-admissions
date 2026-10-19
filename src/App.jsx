import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Programs from "./components/Programs";
import Highlights from "./components/Highlights";
import Facilities from "./components/Facilities";
import AdmissionProcess from "./components/AdmissionProcess";

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
      </main>
    </>
  );
}

export default App;
