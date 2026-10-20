# EAK International School: Admissions Landing Page

A responsive, frontend-only admissions landing page for **Admissions Open, Academic Session 2027–28** at the fictional EAK International School. Built as a second-round frontend assignment for EakPustak Pvt. Ltd.

**Live demo:** https://eakpustak-admissions.vercel.app
**Repository:** https://github.com/mayaswami/eakpustak-admissions

## Sections

1. Hero with Apply Now and Schedule a Visit actions
2. Why choose us
3. Academic programs (Primary, Middle, Secondary, Senior Secondary)
4. School highlights
5. Facilities
6. Admission process (five-step timeline)
7. Important dates
8. Required documents checklist
9. Fee structure
10. Parent testimonials
11. FAQ accordion
12. Final call to action and enquiry form

## Tech stack

- **React** with **Vite** (react template)
- **Plain CSS** with custom properties. No Tailwind or Bootstrap.
- **Google Fonts:** Playfair Display (headings) and DM Sans (body)
- No backend, database, API or authentication, as the brief requires

Exact versions are listed in `package.json`.

## Getting started

Requires Node.js (LTS).

```bash
git clone https://github.com/mayaswami/eakpustak-admissions.git
cd eakpustak-admissions
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

To create a production build:

```bash
npm run build
```

## Project structure

```
src/
├── components/   one component (JSX + CSS) per section
├── data/         page content: programs, fees, FAQs, testimonials, etc.
├── assets/       local images
├── App.jsx       assembles the sections in order
└── index.css     global styles, colours and typography
```

Content is kept separate from layout. Text and figures can be changed in the `data` files without touching the components.

## Accessibility and responsiveness

- Semantic HTML: headings, lists, figures, labelled form fields and a table with header cells
- Mobile menu, FAQ accordion and enquiry form work with the keyboard, with visible focus states
- Layouts adapt at phone, tablet and desktop widths
- Smooth scrolling is turned off for users who prefer reduced motion

## Notes

- All names, dates, statistics, testimonials, contact details and fee figures are fictional sample data. The fee figures come from the brief.
- The enquiry form is frontend-only. Submitted data is not sent anywhere.
- Grade 9–12 shares one fee band, covering both Secondary and Senior Secondary, as specified in the brief.
- Hero photo: [@heyquilia], via Unsplash.