# Mann Patel · F1-Themed Portfolio — PRD

## Original Problem Statement
"Build a portfolio website: can you make the changes to make the website intentional and not some ai template, keep cool animation, interactive, mclaren f1 themed, where each section have a different background relating to that part, surprise me."
Source data: https://github.com/MannPatel-CMPUT/Portfolio (Mann's existing Vite/React/TS portfolio).

## Architecture
- Vite 6 + React 19 + TypeScript + Tailwind 4 frontend at /app/frontend (port 3000).
- Frontend-only (a minimal FastAPI shell exists at /app/backend/server.py only to satisfy supervisor; not used).
- Hot reload via Vite on supervisor.

## User Personas
- Recruiters & hiring engineers scanning a senior-feeling, opinionated portfolio.
- Peers wanting to see Mann's craft and personality.

## Core Requirements (static)
- McLaren F1 papaya identity (papaya orange + carbon black + speed-blue accent).
- Each section has a visually distinct background tied to its concept.
- Cool, intentional interactions: page-load lights-out start, custom papaya cursor, scroll-driven race HUD.
- All bio facts sourced from Mann's repo (name, education, projects, skills, timeline).

## What's Been Implemented (2026-06-12)
- Lights Out F1 start-sequence intro overlay (5 red lights → lights out → papaya sweep). Skippable. SessionStorage suppresses on subsequent loads.
- Custom papaya cursor with hover ring grow.
- Persistent left-bottom Race HUD: RPM bars (scroll velocity), GEAR (current section 1–6), KPH (scroll progress), LAP, section name, progress strip. Mobile collapses to a top progress bar.
- Navbar: race-team logo (MP·81), 5 nav links with sector numbers, live time ticker, mobile hamburger menu.
- Hero: pit-lane asphalt + pit-lane stripes + speed streaks + kerb accents + #81 race-number card + giant MANN PATEL display + telemetry strip + race-control ticker.
- About ("The Driver"): visor-curve SVG background + driver ID card + focus-area tags.
- Projects ("Race Wins"): hangar-wall vertical stripes + papaya floor kerb + 4 garage-bay project cards (BAY 01–04) + telemetry stat row + tyre-compound tech chips.
- Skills ("Telemetry"): steering-wheel dashboard with category dial, ENGINE/DRS/ERS LEDs, avg-pace readout, RPM-bar metrics, 9 category tabs.
- Timeline ("The Circuit"): aerial SVG track schematic with animated racing line, 5 turn markers + chequered finish + turn-by-turn career milestones (T1–T5).
- Contact ("Pit Radio"): chequered corners + animated radio waveform + engineer-to-driver message + 3 contact cards + big papaya CTA.
- Footer with MP logo and disclaimer.
- Typography: Saira / Saira Condensed (display) + JetBrains Mono (technical). Replaces generic Inter.

## Tested
- testing_agent_v3 iteration 1 (passed after mobile-nav scroll fix).
- All data-testid hooks resolved; section navigation, category swap, mobile menu all functional.

## Prioritized Backlog
- P1: Mann's real contact details (email, LinkedIn) — currently uses repo placeholders (mannpatel@example.com, linkedin.com). Easy 30s edit when Mann provides them.
- P1: `/resume.pdf` asset — Hero "Race Card / CV" button opens /resume.pdf; placeholder file should be uploaded.
- P2: Subtle engine-rev audio cue on first interaction (toggleable, off by default).
- P2: Real project links/demos when ready.
- P2: SEO/OG image — generate a papaya hero card for social sharing.
- P3: Replace `OKX/Android` helmet sponsor decals with neutral / personal art if Mann prefers.
