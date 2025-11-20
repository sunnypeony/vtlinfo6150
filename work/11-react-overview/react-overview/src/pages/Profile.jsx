import { useState } from 'react';
import ProfileField from '../components/ProfileField';
import '../styles/pages/Profile.css';

function Profile({ profile, onUpdateProfile, onNavigateHome }) {
  const [editingField, setEditingField] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [validationMessages, setValidationMessages] = useState({});

  const profilePicOptions = [
    'fox.svg',
    'horse.svg',
    'redfox.svg',
    'wolf.svg',
  ];

  const validateUsername = (value) => {
    const trimmed = value.trim();
    if (trimmed === '') {
      return 'Username cannot be empty or contain only whitespace';
    }
    if (trimmed.toLowerCase() === 'dog') {
      return "You're kidding, right?";
    }
    return null;
  };

  const validateActualName = (value) => {
    if (value.trim() === '' && value !== '') {
      return 'Name cannot contain only whitespace';
    }
    return null;
  };

  const handleEdit = (field) => {
    setEditingField(field);
    if (field === 'username') {
      setEditValues({ [field]: profile.username });
    } else if (field === 'actualName') {
      setEditValues({ [field]: profile.actualName });
    } else if (field === 'profilePic') {
      setEditValues({ [field]: profile.profilePic });
    } else if (field === 'isDogFree') {
      setEditValues({ [field]: profile.isDogFree });
    }
    setValidationMessages({ [field]: null });
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValues({});
    setValidationMessages({});
  };

  const handleSave = (field) => {
    const validationMessage = getValidationMessage(field, editValues[field]);
    if (validationMessage) {
      setValidationMessages({ [field]: validationMessage });
      return;
    }

    let valueToSave = editValues[field];
    if (field === 'actualName' && valueToSave.trim() === '') {
      valueToSave = profile.username;
    }

    onUpdateProfile({ [field]: valueToSave });
    setEditingField(null);
    setEditValues({});
    setValidationMessages({});
  };

  const getValidationMessage = (field, value) => {
    if (field === 'username') {
      return validateUsername(value);
    } else if (field === 'actualName') {
      return validateActualName(value);
    }
    return null;
  };

  const handleInputChange = (field, value) => {
    setEditValues({ [field]: value });
    const validationMessage = getValidationMessage(field, value);
    setValidationMessages({ [field]: validationMessage || null });
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <button
          type="button"
          onClick={onNavigateHome}
          className="back-button"
          aria-label="Navigate to home page"
        >
          ← Back to Home
        </button>
      </header>
      <main className="profile-content">
        <h1>Profile Settings</h1>
        <div className="profile-fields">
          <ProfileField
            label="Profile Picture"
            value={profile.profilePic}
            isEditing={editingField === 'profilePic'}
            onEdit={() => handleEdit('profilePic')}
            onSave={() => handleSave('profilePic')}
            onCancel={handleCancel}
            validationMessage={validationMessages.profilePic}
            fieldId="profile-pic"
          >
            <label htmlFor="profile-pic-select" className="sr-only">
              Profile Picture
            </label>
            <select
              value={editValues.profilePic || ''}
              onChange={(e) => handleInputChange('profilePic', e.target.value)}
              className="profile-input"
              id="profile-pic-select"
              aria-describedby={validationMessages.profilePic ? 'profile-pic-error' : undefined}
            >
              {profilePicOptions.map((pic) => (
                <option key={pic} value={pic}>
                  {pic}
                </option>
              ))}
            </select>
          </ProfileField>

          <ProfileField
            label="Username"
            value={profile.username}
            isEditing={editingField === 'username'}
            onEdit={() => handleEdit('username')}
            onSave={() => handleSave('username')}
            onCancel={handleCancel}
            validationMessage={validationMessages.username}
            fieldId="username"
          >
            <label htmlFor="username-input" className="sr-only">
              Username
            </label>
            <input
              type="text"
              value={editValues.username || ''}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="profile-input"
              id="username-input"
              aria-describedby={
                validationMessages.username ? 'username-error' : undefined
              }
            />
          </ProfileField>

          <ProfileField
            label="Actual Name"
            value={profile.actualName}
            isEditing={editingField === 'actualName'}
            onEdit={() => handleEdit('actualName')}
            onSave={() => handleSave('actualName')}
            onCancel={handleCancel}
            validationMessage={validationMessages.actualName}
            fieldId="actual-name"
          >
            <label htmlFor="actual-name-input" className="sr-only">
              Actual Name
            </label>
            <input
              type="text"
              value={editValues.actualName || ''}
              onChange={(e) => handleInputChange('actualName', e.target.value)}
              className="profile-input"
              id="actual-name-input"
              aria-describedby={
                validationMessages.actualName ? 'actual-name-error' : undefined
              }
            />
          </ProfileField>

          <ProfileField
            label="Verified Dog Free"
            value={profile.isDogFree ? 'Yes' : 'No'}
            isEditing={editingField === 'isDogFree'}
            onEdit={() => handleEdit('isDogFree')}
            onSave={() => handleSave('isDogFree')}
            onCancel={handleCancel}
            validationMessage={validationMessages.isDogFree}
            fieldId="dog-free"
          >
            <label htmlFor="dog-free-checkbox" className="checkbox-label">
              <input
                type="checkbox"
                checked={editValues.isDogFree || false}
                onChange={(e) => handleInputChange('isDogFree', e.target.checked)}
                className="profile-checkbox"
                id="dog-free-checkbox"
                aria-describedby={validationMessages.isDogFree ? 'dog-free-error' : undefined}
              />
              <span>Verified Dog Free</span>
            </label>
          </ProfileField>
        </div>
      </main>
    </div>
  );
}

export default Profile;

