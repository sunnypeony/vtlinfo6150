import '../styles/components/ProfileDropdown.css';

function ProfileDropdown({ username, isDogFree, onNavigateToProfile, isOpen }) {
  if (!isOpen) {
    return null;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onNavigateToProfile();
    }
  };

  return (
    <div className="profile-dropdown" role="menu">
      <div className="profile-dropdown-username">
        <span className={isDogFree ? 'username-fabulous' : 'username-normal'}>
          {username}
        </span>
      </div>
      <button
        type="button"
        onClick={onNavigateToProfile}
        onKeyDown={handleKeyDown}
        className="profile-settings-link"
        role="menuitem"
      >
        Profile Settings
      </button>
    </div>
  );
}

export default ProfileDropdown;

