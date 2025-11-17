/* Form Validation Utilities */

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} - Whether valid
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate required field
 * @param {string} value - Field value
 * @returns {boolean} - Whether valid
 */
export function validateRequired(value) {
  return value.trim().length > 0;
}

/**
 * Validate minimum length
 * @param {string} value - Field value
 * @param {number} minLength - Minimum length
 * @returns {boolean} - Whether valid
 */
export function validateMinLength(value, minLength) {
  return value.trim().length >= minLength;
}

/**
 * Validate maximum length
 * @param {string} value - Field value
 * @param {number} maxLength - Maximum length
 * @returns {boolean} - Whether valid
 */
export function validateMaxLength(value, maxLength) {
  return value.trim().length <= maxLength;
}

/**
 * Validate password strength (at least 8 characters, contains letters and numbers)
 * @param {string} password - Password
 * @returns {boolean} - Whether valid
 */
export function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasLetter && hasNumber;
}

/**
 * Validate phone number format (simple validation)
 * @param {string} phone - Phone number
 * @returns {boolean} - Whether valid
 */
export function validatePhone(phone) {
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Get validation error message
 * @param {string} fieldName - Field name
 * @param {string} errorType - Error type
 * @returns {string} - Error message
 */
export function getValidationMessage(fieldName, errorType) {
  const messages = {
    required: `${fieldName} is required`,
    email: `${fieldName} format is incorrect`,
    minLength: `${fieldName} is too short`,
    maxLength: `${fieldName} is too long`,
    password: `${fieldName} must be at least 8 characters and contain letters and numbers`,
    phone: `${fieldName} format is incorrect`,
  };
  
  return messages[errorType] || `${fieldName} is invalid`;
}

