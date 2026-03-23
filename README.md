# NEONODE

# ACTIVITY 1 January 1, 2026

## Description

NEONODE is an AI assistant designed to answer questions about health, like an online doctor.
It provides reliable information backed by research, so users can trust what they read.
NEONODE is for everyone, but it specifically helps young and older people who are concerned about their health.

It solves the problem of not knowing who to ask or what to do about health issues, like when you are unsure what to do about pain in your hips or other health concerns.

## Technologies Used

- HTML5
- CSS3

## Features

- Futuristic cyan-themed UI design
- Hero section with call-to-action button
- Clean single-page layout

## AI Assistance Disclosure

Yes. I used ChatGPT to help generate layout ideas, CSS styling suggestions, and improve wording for the landing page content. I also used Gemini to guide me if my code was correct. All code was reviewed and modified by me.

---

# ACTIVITY 2

# JANUARY 26, 2026

# LOG-IN AND SIGN-UP PAGE

## Description

NEONODE is an AI assistant designed to answer questions about health, like an online doctor.
It provides reliable information backed by research, so users can trust what they read.
NEONODE is for everyone, but it specifically helps young and older people who are concerned about their health.

It solves the problem of not knowing who to ask or what to do about health issues, like when you are unsure what to do about pain in your hips or other health concerns.

## Technologies Used

- HTML5
- CSS3

## Features

- Futuristic cyan-themed UI design
- Hero section with call-to-action button
- Clean single-page layout
- Multi-page navigation (Landing → Login → Signup)
- Consistent futuristic UI across pages

## AI Assistance Disclosure

Yes, I used Chatgpt to help me suggest design layout and guiding me build the program.

---

# ACTIVITY 3

# FEBUARY 04, 2026

## Profile & Settings UI Extension

### Description

This project extends the NEONODE web interface by adding Profile and Settings pages.
The goal of this activity is to practice multi-page navigation, dashboard-style layout,
and consistent UI design using only HTML and CSS.  
This implementation is UI-only and prepares the project structure for future JavaScript
and backend integration.

### Technologies Used

- HTML5
- CSS3
- GitHub Pages (for deployment)

### Features

- Multi-page navigation flow:
  - Landing page → Login → Profile → Settings
- Profile page with:
  - Static user information (name, email, address)
  - Profile avatar
  - About Me section
  - Navigation links (Home, Logout, Settings)
- Settings page with visual-only form:
  - Change email
  - Change address
  - Change password
  - Theme toggle option
- Consistent neon-themed UI using a shared stylesheet
- No JavaScript, backend, or database (UI only)

### AI Assistance Disclosure

AI tools were used to assist with layout planning, UI structure guidance,
and code refinement. All code was reviewed, understood, and manually
integrated by the developer to meet the project requirements.git add README.md

---

# ACTIVITY 4

# MARCH 04, 2026

## Client-Side Validation Rule

### Description

This activity extends the NEONODE project by implementing client-side form validation
using JavaScript. Validation logic was added to the Login, Sign Up, and Settings pages
to prevent invalid form submissions and improve user experience.

### Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub Pages (for deployment)

### Features

- Login form validation:
  - Email field must not be empty and must contain "@" and "."
  - Password must not be empty and must be at least 6 characters
  - On success, redirects automatically to Profile page
- Sign Up form validation:
  - Full name must not be empty
  - Email must be in valid format
  - Password must be at least 6 characters
  - Confirm Password must match Password
  - On success, redirects to Login page
- Settings form validation:
  - Only validates fields that the user fills in
  - Email format is checked if provided
  - Password length is checked if provided
  - On success, shows a confirmation message
- All validation logic is contained in `script.js`
- GitHub Pages site remains fully functional

### AI Assistance Disclosure

AI tools were used to assist with JavaScript validation logic, code structure,
and debugging guidance. All code was reviewed, understood, and manually
integrated by the developer to meet the project requirements.

---

## Create Admin Pages

Implemented a simple admin interface including:

- Admin Dashboard (`admin.html`) with navigation menu
- Manage Users page (`manage-users.html`) with a dynamic table and delete functionality
- Add User form (`add-user.html`) with input validation
- Admin access is restricted via login role check using localStorage

---

# NEONODE

## Description

NEONODE is an AI health assistant web application that helps users access reliable health and nutrition information. It features user authentication, a profile system, admin management pages, and a Nutrition Checker powered by a live public API that displays real food nutrition data.

---

## API Used

**Open Food Facts API**

- URL: https://world.openfoodfacts.org
- Provides detailed nutrition information for food products worldwide including calories, protein, carbohydrates, fat, sugar, fiber, salt, ingredients, and Nutri-Score health ratings.

---

## Features

- User login and signup with form validation
- Profile page displaying user information
- Settings page for updating account details
- Admin Dashboard accessible only to admin users
- Manage Users page with dynamic table and delete functionality
- Add User form with input validation
- Nutrition Checker — search any food and get real nutrition facts from the API
- Displays calories, protein, carbs, fat, sugar, fiber, salt per 100g
- Shows Nutri-Score health rating (A to E) and product image
- Save food nutrition data using localStorage
- Saved Foods page displaying all saved entries
- Delete individual saved entries
- Duplicate prevention when saving food items
- Data persists after page refresh

---

## How to Use

1. Open the live site
2. Click **Login** and sign in with any email and password (6+ characters)
3. To access admin pages, log in with `admin@neonode.com`
4. From the landing page, click **Get Health Tips** to open the Nutrition Checker
5. Type a food name (e.g. apple, milk, bread) or click a suggestion chip
6. View the nutrition facts and Nutri-Score for that food
7. Click **Save Food** to save the entry to your list
8. Click **View Saved Foods** to see all saved entries
9. Refresh the page — your saved data will still be there

---

## Challenges Encountered

- Finding a free public API that requires no API key and works on GitHub Pages without breaking on deployment
- Handling missing or undefined nutrition fields from the API response gracefully so the page never breaks
- Preventing duplicate entries in localStorage using product name comparison
- Keeping the UI consistent with the existing NEONODE neon cyberpunk design across all new pages

---

## Screenshot

> Add a screenshot of your working Nutrition Checker page here.
> Example: ![Nutrition Checker](assets/screenshot.png)
