// ========== HELPER FUNCTIONS ==========
function showError(inputElement, message) {
  // Remove existing error if any
  const existing = inputElement.parentNode.querySelector(".error-msg");
  if (existing) existing.remove();

  // Add error styling to input
  inputElement.classList.remove("input-success");
  inputElement.classList.add("input-error");

  // Create and insert error message
  const error = document.createElement("span");
  error.className = "error-msg";
  error.textContent = message;
  inputElement.insertAdjacentElement("afterend", error);
}

function clearError(inputElement) {
  const existing = inputElement.parentNode.querySelector(".error-msg");
  if (existing) existing.remove();
  inputElement.classList.remove("input-error");
  inputElement.classList.add("input-success");
}

function clearAllErrors(form) {
  form.querySelectorAll(".error-msg").forEach((e) => e.remove());
  form.querySelectorAll("input").forEach((i) => {
    i.classList.remove("input-error", "input-success");
  });
}

// ========== LOGIN VALIDATION ==========
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearAllErrors(loginForm);

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    let isValid = true;

    if (email.value.trim() === "") {
      showError(email, "⚠ Email is required.");
      isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      showError(email, "⚠ Please enter a valid email address.");
      isValid = false;
    }

    if (password.value.trim() === "") {
      showError(password, "⚠ Password is required.");
      isValid = false;
    } else if (password.value.trim().length < 6) {
      showError(password, "⚠ Password must be at least 6 characters.");
      isValid = false;
    }

    if (isValid) {
      window.location.href = "profile.html";
    }
  });

  loginForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => clearError(input));
  });
}

// ========== SIGNUP VALIDATION ==========
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearAllErrors(signupForm);

    const name = document.getElementById("signupName");
    const email = document.getElementById("signupEmail");
    const password = document.getElementById("signupPassword");
    const confirm = document.getElementById("signupConfirm");
    let isValid = true;

    if (name.value.trim() === "") {
      showError(name, "⚠ Full name is required.");
      isValid = false;
    }

    if (email.value.trim() === "") {
      showError(email, "⚠ Email is required.");
      isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      showError(email, "⚠ Please enter a valid email address.");
      isValid = false;
    }

    if (password.value.trim() === "") {
      showError(password, "⚠ Password is required.");
      isValid = false;
    } else if (password.value.trim().length < 6) {
      showError(password, "⚠ Password must be at least 6 characters.");
      isValid = false;
    }

    if (confirm.value.trim() === "") {
      showError(confirm, "⚠ Please confirm your password.");
      isValid = false;
    } else if (confirm.value !== password.value) {
      showError(confirm, "⚠ Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      window.location.href = "login.html";
    }
  });

  signupForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => clearError(input));
  });
}

// ========== SETTINGS VALIDATION ==========
const settingsForm = document.getElementById("settingsForm");

if (settingsForm) {
  settingsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearAllErrors(settingsForm);

    const email = document.getElementById("settingsEmail");
    const password = document.getElementById("settingsPassword");
    let isValid = true;

    if (
      email.value.trim() !== "" &&
      (!email.value.includes("@") || !email.value.includes("."))
    ) {
      showError(email, "⚠ Please enter a valid email address.");
      isValid = false;
    }

    if (password.value.trim() !== "" && password.value.trim().length < 6) {
      showError(password, "⚠ Password must be at least 6 characters.");
      isValid = false;
    }

    if (isValid) {
      const successMsg = document.getElementById("settingsSuccess");
      if (successMsg) {
        successMsg.style.display = "block";
        setTimeout(() => (successMsg.style.display = "none"), 3000);
      }
    }
  });

  settingsForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => clearError(input));
  });
}
