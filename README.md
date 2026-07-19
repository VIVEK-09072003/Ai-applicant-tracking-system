# AI ATS — AI-Powered Applicant Tracking System

Upload a resume (PDF), and get AI-scored feedback against a job description —
score, summary, strengths, weaknesses, and suggestions — powered by
[Puter.js](https://puter.com) (auth, AI, and file storage) with zero backend.

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS v4
- Puter.js (`https://js.puter.com/v2/`) — auth, `puter.ai.chat`, `puter.fs`
- `pdfjs-dist` — converts uploaded PDF pages to images for the AI to read
- `react-dropzone`, `react-hot-toast`

## Project Structure

```
src/
  components/
    common/     Navbar, Footer, Loader, ProtectedRoute, ResumeUploader
    feedback/   ScoreCard, SummaryCard, FeedbackSection, SectionTitle
    layout/     MainLayout
    ui/         Button, Badge, ResumeCard
  constants/    routes.js
  context/      AuthContext.jsx
  hooks/        useAuth.js
  lib/          puter.js (window.puter re-export)
  pages/        Home, Login, Upload, Dashboard, Feedback, NotFound
  providers/    AuthProvider.jsx
  services/     ai.js, auth.js, pdf.js, resumeService.js
  utils/        formatDate.js, calculateScore.js
```

## Notes / Assumptions

- Puter's SDK is loaded via a `<script>` tag in `index.html`, not an npm
  package — this is how Puter.js is meant to be used in the browser.
- Resume analyses are saved as JSON files in `resume-history/` inside the
  signed-in user's Puter cloud storage (`puter.fs`), so history is tied to
  the logged-in account and persists across devices/refreshes.
- `puter.fs.read()` may return a `Blob` in the browser SDK; `resumeService.js`
  calls `.text()` on it when needed — double check this against your Puter
  SDK version if reads fail.
