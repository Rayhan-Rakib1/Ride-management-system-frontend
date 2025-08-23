# Ride Management System - Frontend

![Project Banner](https://via.placeholder.com/1200x400.png?text=Ride+Management+System) <!-- Replace with actual banner image -->

## Overview

The **Ride Management System** is a production-grade, fully responsive, role-based full-stack application designed for a ride booking platform similar to Uber or Pathao. This repository contains the frontend implementation built with **React.js**, **Redux Toolkit**, and **RTK Query**, seamlessly integrated with a Node.js/Express backend API (see backend repository). The application delivers tailored experiences for **Riders**, **Drivers**, and **Admins**, ensuring a polished UI/UX, robust state management, and secure API interactions.

Key features include:
- Responsive design optimized for mobile, tablet, and desktop.
- JWT-based authentication with role-based access control.
- Real-time ride tracking (optional), data visualizations, and an SOS safety feature.
- Comprehensive error handling, form validations, and toast notifications.

For the backend repository, visit: [Ride Management System - Backend](https://github.com/your-username/ride-management-backend) <!-- Replace with actual backend repo URL -->

## Live Deployment

- **Frontend**: [https://ride-management-frontend.vercel.app](https://ride-management-frontend.vercel.app) <!-- Replace with actual deployment URL -->
- **Backend**: [https://ride-management-backend.herokuapp.com](https://ride-management-backend.herokuapp.com) <!-- Replace with actual deployment URL -->

## Features  

### Public Pages (No Authentication Required)
- **Home**: Five distinct sections, including Hero Banner, How-it-Works, Service Highlights, Testimonials, and Call-to-Action.
- **About Us**: Company mission, background, and team profiles.
- **Features**: Detailed breakdown of Rider, Driver, and Admin capabilities.
- **Contact**: Validated inquiry form with simulated submission.
- **FAQ**: Searchable list of frequently asked questions.

### Authentication & Authorization
- JWT-based registration and login with role selection (`Rider`, `Driver`, `Admin`).
- Persistent authentication state with secure logout functionality.
- Role-based redirects to respective dashboards.
- **Account Status Handling**:
  - Blocked/suspended users are redirected to a status page with resolution instructions.
  - Offline drivers can access dashboards but see prompts to go online for ride requests.

### Rider Features
- **Ride Request Form**: Pickup/destination fields, fare estimation, and payment method selection.
- **Live Ride Tracking**: Real-time updates with driver details and map (optional).
- **Ride History**: Paginated list with search and filters (date, fare, status).
- **Ride Details**: Timestamps, driver info, and status timeline.
- **Profile Management**: Edit name, phone number, and password.

### Driver Features
- **Availability Control**: Toggle Online/Offline status.
- **Incoming Requests**: Accept or reject ride offers.
- **Active Ride Management**: Update ride statuses (Accepted → Picked Up → In Transit → Completed/Cancelled).
- **Earnings Dashboard**: Visual breakdown of earnings (daily/weekly/monthly) with charts.
- **Ride History**: Paginated and filterable past rides.
- **Profile Management**: Update vehicle details, contact info, and password.

### Admin Features
- **User Management**: Search, filter, block/unblock riders, approve/suspend drivers.
- **Ride Oversight**: View all rides with advanced filtering (date, status, driver, rider).
- **Analytics Dashboard**: Visualizations for ride volume, revenue trends, and driver activity.
- **Profile Management**: Update personal profile and password.

### General Enhancements
- **Navigation**: Sticky navbar with role-based menus and profile dropdown.
- **SOS Button**: Floating button during active rides for emergency options (Call Police, Notify Contact, Share Location).
- **Visualizations**: Dynamic charts and tables using Recharts.
- **Notifications**: Success/error alerts via react-hot-toast.
- **Performance**: Lazy-loading for maps/tables, skeleton UI for loading states.
- **Accessibility**: Semantic HTML and ARIA attributes for compliance.
- **Error Handling**: Comprehensive form validation and user-friendly API error messages.

## Technology Stack

- **Frontend Framework**: React.js (with React Router v6)
- **State Management**: Redux Toolkit, RTK Query
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Libraries**:
  - Recharts (data visualizations)
  - react-hot-toast (notifications)
  - Axios (API calls)
  - Leaflet/react-geolocated (optional maps for SOS and tracking)
  - emailjs/WhatsApp/Twilio (SOS notifications)
- **Backend**: Node.js/Express, MongoDB, JWT + bcrypt (see backend repo)
- **Deployment**: Vercel (frontend), Heroku/Render (backend)

*

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git
- Backend server running (refer to backend README)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ride-management-frontend.git
   cd ride-management-frontend


