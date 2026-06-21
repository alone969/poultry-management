/**
 * Login Validation Script
 * Links to the login form to handle validation and submission
 */

// Wait until the HTML DOM is fully loaded before attaching events
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const roleCheckboxes = document.getElementsByName("role");

    if (loginForm) {
        loginForm.addEventListener("submit", validateLogin);
    }

    // Attach click events to checkboxes to ensure only one is selected
    Array.from(roleCheckboxes).forEach((checkbox) => {
        checkbox.addEventListener("click", () => {
            Array.from(roleCheckboxes).forEach((item) => {
                if (item !== checkbox) item.checked = false;
            });
        });
    });
});

/**
 * Main validation logic function
 */
function validateLogin(event) {
    // Prevent the form from refreshing the page automatically
    event.preventDefault();

    // 1. Get input values and remove surrounding whitespace
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // 2. Determine which role checkbox is selected
    const checkboxes = document.getElementsByName("role");
    let selectedRole = "";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedRole = checkboxes[i].value;
            break;
        }
    }

    // 3. Target message containers (Assumes elements with these IDs exist in HTML)
    const errorBox = document.getElementById("errorBox");
    const successBox = document.getElementById("successBox");

    // Reset UI message states
    if (errorBox) { errorBox.style.display = "none"; errorBox.innerText = ""; }
    if (successBox) { successBox.style.display = "none"; successBox.innerText = ""; }

    // 4. Validation Rules
    if (userId === "" || password === "") {
        displayMessage(errorBox, "Please fill out both ID and Password fields.");
        return false;
    }

    if (selectedRole === "") {
        displayMessage(errorBox, "Please select your role (Owner, Employee, or Customer).");
        return false;
    }

    if (userId.length < 4) {
        displayMessage(errorBox, "User ID must be at least 4 characters long.");
        return false;
    }
    // 5. Role-based Mock Authentication Verification
    // (In a real app, send these details to your backend server for verification)
    const credentials = {
        owner: [
            { userId: 'admin123', password: 'password123' },
            { userId: 'owner1', password: 'ownerpass' }
        ],
        employee: [
            { userId: 'emp1', password: 'emppass' },
            { userId: 'employee42', password: 'emp42pass' }
        ],
        customer: [
            { userId: 'cust1', password: 'custpass' },
            { userId: 'guest', password: 'guestpass' }
        ]
    };

    const allowed = (credentials[selectedRole] || []).some((cred) => {
        return cred.userId === userId && cred.password === password;
    });

    if (allowed) {
        displayMessage(successBox, `Success! Logging you in as ${selectedRole.toUpperCase()}...`);
        openHomePage();
        return true;
    } else {
        displayMessage(errorBox, "Invalid User ID or Password for the selected role.");
        return false;
    }
}

/**
 * Redirect to the home page after successful login.
 */
function openHomePage() {
    window.location.href = 'home_page.html';
}

/**
 * Helper function to safely display error/success boxes if they exist
 */
function displayMessage(element, message) {
    if (element) {
        element.innerText = message;
        element.style.display = "block";
    } else {
        // Fallback if the HTML doesn't have the message elements
        alert(message);
    }
}

// Provide a global function to support inline `onclick="selectOnlyOne(this)"` attributes
function selectOnlyOne(checkbox) {
    const checkboxes = document.getElementsByName('role');
    Array.from(checkboxes).forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}