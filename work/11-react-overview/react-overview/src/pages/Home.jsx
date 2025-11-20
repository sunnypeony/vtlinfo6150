import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import ProfilePic from '../components/ProfilePic';
import ProfileDropdown from '../components/ProfileDropdown';
import '../styles/pages/Home.css';

function Home({ profile, onNavigateToProfile, onNavigateHome }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfilePicClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigateToProfile = () => {
    setIsDropdownOpen(false);
    onNavigateToProfile();
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.profile-pic-button') &&
        !event.target.closest('.profile-dropdown')
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  return (
    <div className="home-page">
      <header className="home-header">
        <Logo onNavigateHome={onNavigateHome} />
        <div className="profile-section">
          <ProfilePic
            profilePic={profile.profilePic}
            onClick={handleProfilePicClick}
            isDropdownOpen={isDropdownOpen}
          />
          <ProfileDropdown
            username={profile.username}
            isDogFree={profile.isDogFree}
            onNavigateToProfile={handleNavigateToProfile}
            isOpen={isDropdownOpen}
          />
        </div>
      </header>
      <main className="home-content">
        <h1>Welcome Home</h1>
        <p>This is the Home page — a simple text-based introduction demonstrating routing and components.</p>
      </main>
    </div>
  );
}

export default Home;

