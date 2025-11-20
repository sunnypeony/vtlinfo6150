import { useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [profile, setProfile] = useState({
    profilePic: 'fox.svg',
    username: 'jorts',
    actualName: 'Jorts',
    isDogFree: false,
  });

  const handleNavigateHome = () => {
    setCurrentPage('home');
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleUpdateProfile = (updates) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...updates,
    }));
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <Home
          profile={profile}
          onNavigateToProfile={handleNavigateToProfile}
          onNavigateHome={handleNavigateHome}
        />
      )}
      {currentPage === 'profile' && (
        <Profile
          profile={profile}
          onUpdateProfile={handleUpdateProfile}
          onNavigateHome={handleNavigateHome}
        />
      )}
    </div>
  );
}

export default App;
