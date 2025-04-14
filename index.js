function createLoginTracker(userInfo) {
  const {
    password = "password123",
    username = "user1"
  } = userInfo;

  let attemptCount = 0;

  const LoginAttempt = (passwordAttempt) => {
    attemptCount++;


    if (passwordAttempt === password) {
      return "Login successful";
    } 
    else if (attemptCount === 1) {
      return "Attempt 1: Login failed";
    } else if (attemptCount === 2){
      return "Attempt 2: Login failed";
    }
    else if (attemptCount === 3) {
      return "Attempt 3: Login failed" 
    }
    else {
      return "Account locked due to too many failed login attempts"
    }
  };

  return LoginAttempt;
}


// Example usage:










module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};