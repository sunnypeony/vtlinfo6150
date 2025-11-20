import '../styles/components/ProfilePic.css';

function ProfilePic({ profilePic, onClick, isDropdownOpen }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="profile-pic-button"
      aria-label="Open profile menu"
      aria-expanded={isDropdownOpen}
      aria-haspopup="true"
    >
      <img
        src={`/images/profile-pics/${profilePic}`}
        alt="Profile"
        className="profile-pic-image"
      />
    </button>
  );
}

export default ProfilePic;

