import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="flex flex-col min-h-[3000px]">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <div className="py-10 min-h-[1000px]"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
