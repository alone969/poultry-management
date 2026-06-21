# Poultry Management Dashboard - React App

A React-based farm management system with role-based authentication (Owner, Employee, Customer).

## Features

- **Role-Based Login System**: Users select their role and authenticate with role-specific credentials
- **Responsive Dashboard**: Modern UI with sidebar navigation and metrics overview
- **Sample Credentials**:
  - **Owner**: `admin123` / `password123` or `owner1` / `ownerpass`
  - **Employee**: `emp1` / `emppass` or `employee42` / `emp42pass`
  - **Customer**: `cust1` / `custpass` or `guest` / `guestpass`

## Project Structure

```
src/
├── components/
│   ├── Login.jsx          # Login form with role selection
│   └── Dashboard.jsx      # Main dashboard with sidebar & metrics
├── styles/
│   ├── Login.css          # Login page styles
│   └── Dashboard.css      # Dashboard & layout styles
├── App.jsx                # Main app component with auth state
├── App.css                # Global app styles
├── main.jsx               # React entry point
└── index.css              # Base styles
```

## Installation & Setup

1. **Install dependencies**:
   ```bash
   cd poultry-management
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173/`

3. **Build for production**:
   ```bash
   npm run build
   ```

## How to Use

1. Open the app in your browser
2. Select a role (Owner, Employee, or Customer)
3. Enter credentials from the sample list above
4. Click "Log In"
5. You'll be redirected to the dashboard
6. Click the logout button (🚪) in the top-right to log out

## Technologies

- **React 19.2.6**: UI library
- **Vite 8.0.12**: Build tool & dev server
- **CSS3**: Styling (no frameworks, pure CSS)

## Future Enhancements

- Add React Router for multi-page support
- Implement backend API integration
- Add data persistence with localStorage
- Create role-specific dashboard views
- Add more detailed analytics and reporting
