import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CardsPage from './pages/CardsPage';
import PanelsPage from './pages/PanelsPage';
import Modal from './components/Modal';


function App() {
  const [page, setPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'cards':
        return <CardsPage setPage={setPage} />;
      case 'panels':
        return <PanelsPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} openModal={() => setIsModalOpen(true)} />
      <main>{renderPage()}</main>
      <Footer />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
