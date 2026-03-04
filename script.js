// ========== LOGIN VALIDATION ==========
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    let errors = [];

    // Email check
    if (email === "") {
      errors.push("Email is required.");
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address.");
    }

    // Password check
    if (password === "") {
      errors.push("Password is required.");
    } else if (password.length < 6) {
      errors.push("Password must be at least 6 characters.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Login successful! Redirecting to profile...");
      window.location.href = "profile.html";
    }
  });
}

// ========== SIGNUP VALIDATION ==========
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirm = document.getElementById("signupConfirm").value.trim();
    let errors = [];

    // Name check
    if (name === "") {
      errors.push("Full name is required.");
    }

    // Email check
    if (email === "") {
      errors.push("Email is required.");
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address.");
    }

    // Password check
    if (password === "") {
      errors.push("Password is required.");
    } else if (password.length < 6) {
      errors.push("Password must be at least 6 characters.");
    }

    // Confirm password check
    if (confirm === "") {
      errors.push("Please confirm your password.");
    } else if (confirm !== password) {
      errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Account created successfully! Redirecting to login...");
      window.location.href = "login.html";
    }
  });
}

// ========== SETTINGS VALIDATION ==========
const settingsForm = document.getElementById("settingsForm");

if (settingsForm) {
  settingsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("settingsEmail").value.trim();
    const password = document.getElementById("settingsPassword").value.trim();
    let errors = [];

    // Email check (only if filled in)
    if (email !== "" && (!email.includes("@") || !email.includes("."))) {
      errors.push("Please enter a valid email address.");
    }

    // Password check (only if filled in)
    if (password !== "" && password.length < 6) {
      errors.push("New password must be at least 6 characters.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Settings saved successfully!");
    }
  });
}
