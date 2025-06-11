document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  const showSignupLink = document.getElementById("show-signup");
  const showLoginLink = document.getElementById("show-login");

  showSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Sign-Up form submit handler
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (!username || !password) {
      alert("Please fill in both username and password");
      return;
    }

    if (localStorage.getItem(username)) {
      alert("Username already exists. Try logging in.");
      return;
    }

    localStorage.setItem(username, password);
    alert("Account created successfully! Please login.");
    signupForm.reset();

    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Login form submit handler
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Login successful!");
      // Redirect to resume screening page after login
      window.location.href = "file:///C:/Users/WELCOME/Desktop/new/r2.html";
    } else {
      alert("Invalid username or password!");
    }
  });
});
