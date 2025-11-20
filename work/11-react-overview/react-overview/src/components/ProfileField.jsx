import '../styles/components/ProfileField.css';

function ProfileField({
  label,
  value,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  validationMessage,
  fieldId,
  children,
}) {
  return (
    <div className="profile-field">
      <div className="profile-field-label">{label}:</div>
      {isEditing ? (
        <div className="profile-field-edit-container">
          {children}
          {validationMessage && (
            <div className="validation-message" role="alert" id={`${fieldId}-error`}>
              {validationMessage}
            </div>
          )}
          <div className="profile-field-buttons">
            <button
              type="button"
              onClick={onSave}
              className="save-button"
              disabled={!!validationMessage}
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="profile-field-display">
          <span className="profile-field-value">{value}</span>
          <button
            type="button"
            onClick={onEdit}
            className="edit-button"
            aria-label={`Edit ${label}`}
          >
            <img
              src="/images/edit-icon.svg"
              alt=""
              className="edit-icon"
            />
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileField;

