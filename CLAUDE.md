# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for AUTOVIZOR ELM327 automotive OBD-II scanner. Built for A/B testing two traffic strategies on Ozon marketplace:
- `/` - Short, single-screen mobile-first landing (in development)
- `/long` - Full multi-section landing with detailed product information

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
npm start        # Start production server
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)

## Architecture

### Routes
- `src/app/page.tsx` - Main short landing (mobile-first, single screen)
- `src/app/long/page.tsx` - Full landing with all sections

### Components (`src/components/`)
All components are used in the long landing:
- `HeroSection` - Hero with product headline and image placeholder
- `PainPointsSection` - Pain points with emoji cards
- `BenefitsSection` - Solution benefits with checkmarks
- `HowItWorksSection` - 3-step process
- `ErrorCategoriesSection` - OBD-II error categories grid
- `ComparisonTableSection` - AUTOVIZOR vs cheap alternatives
- `CompatibilitySection` - Device/app compatibility
- `CTASection` - Final CTA with price and Ozon button

### Design System

Design follows the Orange + Violet brand palette from `docs/DESIGN_SYSTEM.md`:

**Colors:**
- Primary: `orange-500` (#F97316) - brand, highlights
- Secondary: `violet-500` (#8B5CF6) - premium actions, CTA buttons
- Success: `emerald-500/600` - checkmarks, positive indicators
- Neutrals: `gray-50` to `gray-900`

**Key Patterns:**
- Cards: `rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50`
- Hover: `hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300`
- CTA buttons: `bg-violet-500 hover:bg-violet-600 rounded-full shadow-lg`
- Sections alternate: white → gray-50 → white backgrounds
- Font: Inter (Latin + Cyrillic)

## Integration Notes

- CTA button should send goal to Yandex.Metrika on click
- Ozon URL needs UTM params with `utm_campaign=vendor_org_XXXXX`
- Image placeholders marked with `[Фото сканера]` - replace with actual product photos
