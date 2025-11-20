import { useState, useEffect, useRef } from 'react';
import Logo from '../components/Logo';
import ProfilePic from '../components/ProfilePic';
import ProfileDropdown from '../components/ProfileDropdown';
import '../styles/pages/Home.css';

function Home({ profile, onNavigateToProfile, onNavigateHome }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileSectionRef = useRef(null);

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
        profileSectionRef.current &&
        !profileSectionRef.current.contains(event.target)
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
        <div className="profile-section" ref={profileSectionRef}>
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
        <h1>Welcome To The Home Page</h1>
        <p>This is the Home page — a simple text-based introduction demonstrating routing and components.</p>
      </main>
    </div>
  );
}

export default Home;

