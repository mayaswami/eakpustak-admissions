import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Programs from "./components/Programs";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <WhyChoose />
        <Programs />
        <Highlights />
      </main>
    </>
  );
}

export default App;
