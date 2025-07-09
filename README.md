# PockyDoc Frontend

This is the frontend of the PockyDoc platform, built using *Next.js* and *Tailwind CSS*.  
It is designed to handle doctor onboarding and administrative workflows efficiently.

## Tech Stack

- *Framework*: Next.js (App Router)
- *Styling*: Tailwind CSS
- *Component Library*: ShadCN (Neo-brutalism theme exploration)
- *State*: LocalStorage (for now, to simulate API behavior)

## Features

- Doctor Onboarding (Signup Form)
- Admin Panel with Doctors List
- Sidebar Navigation Layout
- LocalStorage-based mock data flow
- Clean and responsive UI layout
- Starter setup for future API integration

## Folder Structure
src/
└── app/
├── admin/
│   ├── layout.tsx
│   ├── onboarding/
│   │   └── page.tsx
│   └── doctors/
│       └── page.tsx
├── doctor/
│   └── dashboard/
│       └── page.tsx
├── layout.tsx
└── page.tsx (Homepage)
└── components/
└── Sidebar.tsx
└── styles/
└── globals.css
## Setup Instructions

1. Clone the repository  
   git clone https://github.com/anushka-r-5/pockydoc-frontend.git

2. Install dependencies  
   npm install

3. Run the development server  
   npm run dev

## Notes

- Currently uses localStorage to store and retrieve doctor data.
- API integration will replace localStorage in the next phase.
- Sidebar and layout are isolated to the /admin route.
- Components and routes are structured to scale for future modules (appointments, payments, etc.).

---