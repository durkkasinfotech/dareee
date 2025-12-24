# DARE Centre Project Analysis & Daily Development Log

This document provides a comprehensive functional analysis of the DARE Centre web platform and a detailed record of development activities from **December 9, 2025**, to **December 20, 2025**.

---

## Part 1: Page-by-Page Functional Analysis

### 1. Home Page (`/`)
*   **Hero Section**:
    *   **Dynamic Title**: Features "RESEARCH AND EDUCATION" with specific color branding and an animated "[DARE CENTRE]" pop-up.
    *   **Infinity Orbit Visual**: A complex animation of floating cards representing the 8 core divisions. Each card is interactive (hover-to-scale).
    *   **CTA Button (Book Consulting Session)**: Opens a stylized modal with a registration form (Name, Phone, Category).
*   **Video Integration**: Embedded YouTube video explaining the DARE Centre ecosystem.
*   **Announcements Bar**: Fetches live updates (e.g., Mathematics Day, Winter Camp). Each announcement link redirects to specific event pages or external portals.
*   **Schools Carousel**: A swipeable/auto-playing carousel showcasing the four core schools (AI & Robotics, Finance, Business, Languages) with "Explore More" buttons redirecting to `/divisions`.
*   **Footer**: Comprehensive navigation, social icons (now with X logo), and legal links.

### 2. About Us (`/about`)
*   **Mission & Vision**: Detailed textual content explaining the ISO 9001:2015 certification and educational philosophy.
*   **Framework Presentation**: Visual list of educational frameworks (Harkness method, Industry-aligned curriculum).

### 3. Our Divisions (`/divisions`)
*   **School Cards**: Modular cards for each school with unique color themes.
*   **Course Levels Carousel**: A custom-built carousel showing course tiers (Level 1, 2, etc.) for various schools.
*   **Level Detailed Modal**: Clicking a level card opens a modal with curriculum details, duration, and outcomes.

### 4. Courses (`/courses`)
*   **Categorized Grid**: Courses are split into K12, Languages, Digital Skills, and AICRA Certified tracks.
*   **Redirects**: Each course card contains logic to show more details or lead to a registration flow.

### 5. Edukoot Community (`/edukoot`)
*   **Community Orbit**: An interactive "Orbit" visual showcasing the peer-learning ecosystem.
*   **Membership Desks**: Detailed sections for Junior, Campus, and Creator desks.
*   **CTA**: Redirects to community joining forms.

### 6. Internship (`/internship`)
*   **Domain Grid**: Lists internship opportunities in Robotics, AI, Business, etc.
*   **Application Form**: Integrated form for students to submit details directly.
*   **Benefits Section**: Visual representation of "Certificate, Mentorship, Hands-on Training".

### 7. Workshop (`/workshop`)
*   **Featured Workshops**: Hero section for major workshops (e.g., AI-Powered Logistics).
*   **Gallery Section**: High-quality images of past workshops with filtered views.

### 8. Gallery (`/gallery`)
*   **Filter Logic**: Allows users to filter by Classroom, Lab, Robotics, Edukoot, or Internship.
*   **Image Lightbox**: Clicking an image opens a full-screen preview.

### 9. Mathematics Day Event (Special Registration Page)
*   **Split Layout**: Event details on the left, Registration form on the right.
*   **Project Upload**: Supports PPT/PDF uploads with logic to handle file paths.
*   **Duplicate Prevention**: Backend check to ensure one project per email ID.
*   **Registration IDs**: Automated unique ID generation for participants.

### 10. Admin Support Features (Dashboard Logic)
*   **Math Lead Table**: Specialized table for admins to view participant data.
*   **View/Download Buttons**: Direct links to student-uploaded PPT/PDF files.
*   **Certificate ZIP**: Functionality to bulk-download approved certificates as a ZIP file.

---

## Part 2: Daily Development Log (Dec 9 – Dec 20, 2025)

*Based on current codebase state and development history.*

| Date | Activity Summary | Key Functional Updates |
| :--- | :--- | :--- |
| **Dec 9 (Tue)** | **Initial Prep & Audit** | Codebase audit and preparation for the December event cycle. |
| **Dec 10 (Wed)** | **Branding Update** | Updated Twitter icon to the new **X logo** in the navigation and footer. |
| **Dec 11 (Thu)** | **UI/UX Optimization** | General CSS cleanup and responsive break-point adjustments for mobile devices. |
| **Dec 12 (Fri)** | **Divisions Enhancement** | Replaced all emojis with consistent **SVG icons**; Implemented the **Course Levels Carousel** on the `/divisions` page. |
| **Dec 13 (Sat)** | **Module Expansion** | Created and deployed the **Internship Page** (`/internship`) with simplified application flow. |
| **Dec 14 (Sun)** | *Sunday* | *No development activity.* |
| **Dec 15 (Mon)** | **Workshop Updates** | Added new gallery assets to the **Workshop Page**; implemented AI-Powered Logistics Practitioner section. |
| **Dec 16 (Tue)** | **Layout Refinement** | Standardized font weights and vertical padding across **About Us**, **Courses**, and **NxtGen** pages. |
| **Dec 17 (Wed)** | **Navigation Polish** | Refined the **Navigation Bar**; implemented pure white background for the mobile menu and removed transparency. |
| **Dec 18 (Thu)** | **Event Infrastructure** | Refactored **Mathematics Day Registration Form**; Added "View PPT" functionality to the Admin Lead table. |
| **Dec 19 (Fri)** | **Logic & Security** | Implemented **Duplicate Upload Prevention** (email-based); Fixed participant ID auto-generation issues. |
| **Dec 20 (Sat)** | **Responsive Visuals** | Enhanced **Community Orbit** animation for Edukoot; Fixed hydration errors; Updated course-specific images. |

---

## Technical Summary
*   **Framework**: Next.js 14 (App Router)
*   **Styling**: Vanilla CSS Modules & CSS-in-JS (Styled JSX)
*   **Icons**: React Icons (Fa, Si, Md)
*   **State Management**: React `useState`, `useEffect`, `useRef`
*   **Data Flow**: Unified EMS integration for dynamic content (Announcements, Leads).
