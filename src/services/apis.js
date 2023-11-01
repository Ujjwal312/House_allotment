const BASE_URL = "http://localhost:4000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SENDLOGINOTP_API: BASE_URL + "/auth/sendloginotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  VERIFY_OTP:BASE_URL+"/auth/verifyotp",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_ALL_HOUSE_API: BASE_URL + "/house/getallhouse",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
}
export const houseEndpoints = {
  GET_ALL_HOUSE_API: BASE_URL + "/house/getallhouse",
  SAVE_CHOICES_API: BASE_URL + "/house/savechoices",
  GET_SAVED_HOUSE_API : BASE_URL + "/house/getsevedhouse",
  LOCK_CHOICES_API:BASE_URL + "/house/lockhouses",

}


// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}