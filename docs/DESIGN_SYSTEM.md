# VibeLearning Design System

**Status:** ✅ PRODUCTION - Based on finalized landing page implementation

**Purpose:** Complete brand book and design guidelines for the entire VibeLearning platform (landing + dashboard + components).

**Last Updated:** 2025-11-11
**Updated by:** Design System audit based on production landing page
**Version:** 2.0 (Orange + Violet Brand)

---

## 1. Color Palette

### Brand Colors (UPDATED - Orange + Violet)

**Primary (Orange - Brand Identity):**
- `orange-500` (#F97316) - Main brand color, primary actions, highlights
- `orange-600` (#EA580C) - Hover states, pressed states
- `orange-50` (#FFF7ED) - Light backgrounds, subtle tints
- `orange-100` to `orange-400` - Gradients, borders, rings
- `#FBBF24` - Custom star rating color (not Tailwind class)

**Usage:**
- Primary CTAs in header ("Регистрация")
- Navigation hover states
- Icon colors (alternating with violet)
- Border highlights on interactive states
- Shadow accents (`shadow-orange-500/30`)
- Price highlights in CTA section
- Checkmark backgrounds in feature lists
- "⭐ Популярный" badge (gradient)

**Secondary (Violet - Premium Accent):**
- `violet-500` (#8B5CF6) - Secondary brand color, premium actions
- `violet-600` (#7C3AED) - Hover states
- `violet-50` (#F5F3FF) - Light backgrounds for badges
- `violet-100` to `violet-400` - Gradients, tints

**Usage:**
- Hero headline highlights
- Main CTA buttons (large action buttons like "Создать карточки")
- Icon colors (alternating with orange)
- Badge backgrounds ("💰 Выгодный" plan)
- Gradient endpoints in logo (orange→violet)
- Secondary emphasis in text

**Tertiary (Emerald - Success States):**
- `emerald-500` (#10B981) - Success indicators
- `emerald-600` (#059669) - Checkmark icons
- `emerald-100` (#D1FAE5) - Checkmark backgrounds
- `emerald-50` (#ECFDF5) - Success backgrounds

**Usage:**
- Checkmark icons in benefit lists
- Success states
- Positive indicators
- Feature list icons

**Neutrals:**
- `gray-900` (#111827) - Headings, primary text
- `gray-800` (#1F2937) - Secondary headings
- `gray-700` (#374151) - Body text, navigation links
- `gray-600` (#4B5563) - Descriptive text, metadata
- `gray-500` (#6B7280) - Muted text, disclaimers
- `gray-400` (#9CA3AF) - Stronger borders (drag-drop)
- `gray-300` (#D1D5DB) - Default borders
- `gray-200` (#E5E7EB) - Light borders, dividers
- `gray-100` (#F3F4F6) - Hover backgrounds
- `gray-50` (#F9FAFB) - Section backgrounds
- `white` (#FFFFFF) - Card backgrounds, primary surface

**Semantic Colors:**
- Success: `emerald-600`
- Error: `red-500` (#EF4444)
- Warning: `amber-500` (#F59E0B)
- Info: `blue-500` (#3B82F6)
- Discount: `green-600` (#16A34A) - pricing discount labels

---

### Brand Gradients

#### Logo Gradient (Signature)
```tsx
// Linear gradient: Orange → Violet (40/60 split)
from-orange-500 (0%) → orange-500 (40%) → violet-500 (100%)

// SVG definition:
<linearGradient id="inkblotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" style="stop-color:#F97316" />
  <stop offset="40%" style="stop-color:#F97316" />
  <stop offset="100%" style="stop-color:#8B5CF6" />
</linearGradient>
```

#### Section Background Gradients
```tsx
// Hero section - warm fade
"bg-gradient-to-b from-orange-50/30 via-white to-white"

// CTA section - warm to success tint
"bg-gradient-to-br from-orange-50 via-white to-emerald-50/20"

// Pricing highlighted (orange)
"bg-gradient-to-b from-orange-50/50 to-white"

// Pricing badge plan (violet)
"bg-gradient-to-b from-violet-50/50 to-white"

// Testimonial avatars (brand gradient)
"bg-gradient-to-br from-orange-500 to-violet-500"

// Number display (How It Works) - text gradient
"bg-gradient-to-br from-orange-500/20 to-violet-500/20 bg-clip-text text-transparent"
```

#### Badge Gradients
```tsx
// Orange badge (⭐ Популярный)
"bg-gradient-to-r from-orange-500 to-orange-600"

// Violet badge (💰 Выгодный)
"bg-gradient-to-r from-violet-500 to-violet-600"
```

#### Decorative Orbs (CTA Section)
```tsx
// Top-right orb
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

// Bottom-left orb
<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/10 to-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
```

---

### Color Usage Guidelines

#### When to Use Orange vs Violet

**Orange Use Cases:**
- Primary brand presence (header buttons, navigation hovers)
- Highlighting interactive elements (borders, rings on focus)
- Secondary CTAs that need attention
- Alternating with violet in icon sets
- "Popular" or "Hot" indicators (⭐ Популярный)
- Warm, inviting, "get started" states
- Price highlights (when emphasizing value)

**Violet Use Cases:**
- Main action CTAs (hero buttons, large CTAs like "Создать карточки")
- Text highlights in headlines ("карточки для запоминания")
- Premium/value emphasis ("💰 Выгодный")
- Alternating with orange in icon sets
- Sophisticated, high-value states
- Secondary emphasis that needs differentiation from orange

**Rule of Thumb:**
- **Orange** = Accessible, friendly, "take first step"
- **Violet** = Premium, powerful, "main value action"
- **Emerald** = Success, completion, positive state

---

## 2. Typography

### Font Stack
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

**Character sets:** Latin + Cyrillic
**Implementation:** Configured via next/font/google with `display: swap`

---

### Type Scale (PRODUCTION VALUES)

#### Headlines

**H1 (Hero / Page Titles):**
```tsx
className="text-3xl font-bold text-gray-900 mb-3 leading-tight"
```
- Size: `text-3xl` (30px / 1.875rem)
- Weight: `font-bold` (700)
- Line height: `leading-tight` (1.25)
- Color: `text-gray-900`
- Max width: `max-w-3xl` (48rem) for readability
- Usage: Main landing page hero, primary page titles

**Note:** Reduced from initial `text-7xl` based on viewport fit optimization. Desktop-first design prioritizes fitting key content above fold.

**H2 (Section Titles):**
```tsx
className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
```
- Size: `text-3xl` desktop, `text-4xl` large screens (30-36px)
- Weight: `font-bold` (700)
- Line height: default
- Color: `text-gray-900`
- Usage: Section titles (How it Works, Pricing, FAQ, etc.)

**H3 (Card Titles / Component Headers):**
```tsx
className="text-xl font-bold text-gray-900 mb-3"
```
- Size: `text-xl` (20px / 1.25rem)
- Weight: `font-bold` (700)
- Usage: Card titles, step titles, pricing plan names

**H4 (Subsection Headers):**
```tsx
className="text-lg font-semibold text-gray-900 mb-2"
```
- Size: `text-lg` (18px)
- Weight: `font-semibold` (600)
- Usage: Footer section headers, small headings

---

#### Body Text

**Large Body (Section Descriptions):**
```tsx
className="text-lg text-gray-600 max-w-2xl mx-auto"
```
- Size: `text-lg` (18px)
- Weight: `font-normal` (400)
- Line height: default
- Color: `text-gray-600`
- Max width: `max-w-2xl` for readability
- Usage: Section subtitles, hero descriptions

**Base Body (Default Text):**
```tsx
className="text-base text-gray-700 leading-relaxed"
```
- Size: `text-base` (16px / 1rem)
- Weight: `font-normal` (400)
- Line height: `leading-relaxed` (1.625)
- Color: `text-gray-700`
- Usage: Standard body text, benefit lists, feature descriptions

**Small Text (Metadata / Secondary Info):**
```tsx
className="text-sm text-gray-600"
```
- Size: `text-sm` (14px / 0.875rem)
- Weight: `font-normal` (400)
- Line height: `leading-normal` (1.5)
- Color: `text-gray-600`
- Usage: Testimonial roles, footer links, supporting text

**Extra Small (Disclaimers / Fine Print):**
```tsx
className="text-sm text-gray-500"
```
- Size: `text-sm` (14px)
- Color: `text-gray-500` (muted)
- Usage: Disclaimers ("Есть бесплатные лимиты"), captions

**Button Text (CTAs):**
```tsx
className="text-lg font-semibold"  // Large CTAs (Hero)
className="text-base font-semibold" // Standard buttons
```

---

### Typography Principles

1. **Hierarchy matters** - Clear visual difference between heading levels
2. **Readability first** - Max 60-70 characters per line (use `max-w-2xl`/`max-w-3xl`)
3. **Line height scales inversely** - Larger headings = tighter line-height
4. **Color for hierarchy** - gray-900 (headings) → gray-700 (body) → gray-600 (supporting) → gray-500 (muted)
5. **Consistent spacing** - mb-3 (title→subtitle), mb-6 (paragraph spacing), mb-8 (section spacing)

---

## 3. Spacing System (PRODUCTION VALUES)

### Section Spacing

**Standard Pattern:**
```tsx
<section className="py-12 bg-{color}">
  <div className="container mx-auto max-w-{size} px-4">
    {/* content */}
  </div>
</section>
```

**Key Values:**
- Section padding: `py-12` (48px / 3rem) - **CONSISTENT ACROSS ALL SECTIONS**
- Container horizontal padding: `px-4` (16px)
- Wide sections: `max-w-6xl` (72rem) - How It Works, Pricing, Testimonials
- Narrow sections: `max-w-4xl` (56rem) - Hero, CTA, FAQ

**Section Background Alternation:**
```
Hero (gradient) → How It Works (white) → Testimonials (gray-50) →
CTA (gradient) → Pricing (white) → FAQ (gray-50) → Footer (white)
```

---

### Margin Scale (Vertical Spacing)

```tsx
mb-2   // 8px  - Tight spacing (label→input, close elements)
mb-3   // 12px - Title→subtitle within component
mb-4   // 16px - Section title→subtitle, paragraph spacing
mb-6   // 24px - Medium component separation
mb-8   // 32px - Large internal section spacing
mb-10  // 40px - Extra large spacing (benefit list→price block)
mb-16  // 64px - Section title→content separation
```

**Usage Guidelines:**
- Section title → description: `mb-4`
- Section title → grid/content: `mb-16`
- Component internal spacing: `mb-6` or `mb-8`
- Tight element grouping: `mb-3`

---

### Gap Scale (Grid/Flex Spacing)

```tsx
gap-1   // 4px  - Tight (star rating)
gap-2   // 8px  - Close (icon + text inline, button icon spacing)
gap-3   // 12px - Default (list items, feature lists)
gap-4   // 16px - Medium (button groups, settings row)
gap-5   // 20px - Medium-large (vertical lists)
gap-6   // 24px - Large (testimonial grid)
gap-8   // 32px - Extra large (pricing grid, how it works, footer columns)
```

**Grid Gaps:**
- 3-column grids (Pricing, How It Works): `gap-8`
- 2-column grids (Testimonials): `gap-6`
- Vertical lists (benefits): `space-y-4` or `space-y-5`

---

### Padding Scale (Internal Component Spacing)

```tsx
p-6    // 24px - Card padding (testimonials, FAQ items)
p-8    // 32px - Large card padding (pricing cards)
p-12   // 48px - Extra large padding (CTA section inner, drag-drop zone)
px-4   // 16px - Container horizontal padding
px-5   // 20px - Badge horizontal padding
px-6   // 24px - Accordion item horizontal padding
px-12  // 48px - Large button horizontal padding
py-1.5 // 6px  - Badge vertical padding
py-5   // 20px - Accordion trigger padding
py-6   // 24px - Large button vertical padding
py-12  // 48px - Section vertical padding (STANDARD)
```

---

## 4. Shadows & Elevation (PRODUCTION)

### Elevation Levels

**Level 0 (Flat):**
- No shadow
- Usage: Inline elements, text, flush components

**Level 1 (Subtle - Resting State):**
```tsx
className="shadow-sm"
```
- Usage: Input fields at rest, minimal UI elements
- Example: Header (`shadow-sm`)

**Level 2 (Raised - Interactive):**
```tsx
className="shadow-md"
```
- Usage: Buttons, select dropdowns, hover states
- Example: Settings buttons, header registration button

**Level 3 (Floating - Cards):**
```tsx
className="shadow-lg shadow-gray-900/5"
```
- Usage: Cards at rest, testimonials, FAQ items
- Example: Testimonial cards, FAQ accordion items

**Level 4 (Elevated - Important Elements):**
```tsx
className="shadow-xl shadow-gray-900/5"
```
- Usage: Drag-drop zone, how-it-works placeholders
- Example: PDF drag-drop zone default state

**Level 5 (Floating High - Premium/Highlighted):**
```tsx
className="shadow-2xl shadow-orange-500/20"
```
- Usage: Highlighted pricing cards, CTA sections, badges
- Example: "⭐ Популярный" pricing card, "💰 Выгодный" card, CTA white card

---

### Colored Shadows (Brand Elements)

**Pattern:**
```tsx
className="shadow-{size} shadow-{color}-{shade}/{opacity}"
```

**Orange Shadows:**
```tsx
// Button shadows
"shadow-md shadow-orange-500/30"          // Resting
"hover:shadow-xl hover:shadow-orange-600/40"  // Hover

// Card shadows
"shadow-xl shadow-orange-500/10"          // Drag-drop hover, card glow
"shadow-2xl shadow-orange-500/20"         // Highlighted pricing card

// Badge shadows
"shadow-lg shadow-orange-500/50"          // Floating badge glow
```

**Violet Shadows:**
```tsx
// Button shadows
"shadow-lg shadow-violet-500/20"          // Primary CTA resting
"hover:shadow-xl hover:shadow-violet-600/30"  // Hover

// Card shadows
"shadow-2xl shadow-violet-500/20"         // Violet badge plan

// Badge shadows
"shadow-lg shadow-violet-500/50"          // Violet badge glow
```

**Neutral Shadows:**
```tsx
// Card shadows
"shadow-lg shadow-gray-900/5"             // Default cards
"hover:shadow-xl hover:shadow-orange-500/10" // Hover with orange tint
```

---

### Shadow Transition Patterns

**Standard Pattern:**
```tsx
className="shadow-md hover:shadow-xl transition-all duration-300"
```

**With Color Shift:**
```tsx
className="shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
```

**Usage:**
- Duration: `duration-300` (300ms) for smooth transitions
- Transition type: `transition-all` (shadow + other properties) or `transition-shadow` (shadow only)
- Combine with scale/translate for depth effect

---

## 5. Border Radius (PRODUCTION)

### Radius Scale

**Sharp (Rare):**
- `rounded-none` (0px)
- Usage: Full-bleed images, special design needs

**Subtle:**
- `rounded` (4px)
- Usage: Minimal UI elements (not common in current design)

**Standard:**
- `rounded-lg` (8px)
- Usage: Rarely used in production (phased out for modern feel)

**Large:**
- `rounded-xl` (12px)
- Usage: Buttons (secondary, settings), select dropdowns, inputs, smaller cards
- Example: Settings buttons, select triggers, header registration button

**Extra Large:**
- `rounded-2xl` (16px)
- Usage: Standard cards, drag-drop zone, pricing cards, testimonials, FAQ items
- Example: Most card components, interactive zones

**Extra Extra Large:**
- `rounded-3xl` (24px)
- Usage: Large featured cards, hero-like sections
- Example: CTA section white card

**Pill (Modern):**
- `rounded-full` (infinite radius)
- Usage: Primary CTA buttons, badges, avatars, tags, checkmark containers
- Example: Hero CTA "Создать карточки", badges, testimonial avatars, checkmark circles

---

### Radius Usage Guidelines

**Buttons:**
- **Primary CTAs** (large, prominent): `rounded-full` (pill)
- **Secondary CTAs** (standard): `rounded-full` (pill)
- **Settings/Utility buttons**: `rounded-xl`
- **Icon-only buttons**: `rounded-lg`

**Cards:**
- **Standard cards**: `rounded-2xl`
- **Large feature cards**: `rounded-3xl`
- **Small cards/tags**: `rounded-xl`

**Consistency Rules:**
1. Pill radius (`rounded-full`) = action buttons ONLY
2. `rounded-2xl` = standard card radius
3. `rounded-xl` = inputs, settings controls
4. Don't mix radius sizes within same component

---

## 6. Component Library (PRODUCTION PATTERNS)

### 6.1 Buttons

#### Primary CTA (Violet Pill - Hero/Main Actions)
```tsx
<Button
  size="lg"
  className="bg-violet-500 hover:bg-violet-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-300 hover:scale-105"
>
  <Link href="/register" className="flex items-center gap-2">
    Создать карточки
    <ArrowRight className="w-5 h-5" />
  </Link>
</Button>
```

**Characteristics:**
- Shape: `rounded-full` (pill)
- Color: Violet (premium action)
- Size: Large (`px-12 py-6 text-lg`)
- Shadow: Violet tint with color shift on hover
- Hover: Scale + shadow increase
- Icon: Right-aligned with `gap-2`

**Usage:** Hero main CTA, CTA section button

---

#### Secondary CTA (Orange Pill - Header/In-content)
```tsx
<Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105">
  Регистрация
</Button>
```

**Characteristics:**
- Shape: `rounded-xl` (header context) or `rounded-full` (pricing cards)
- Color: Orange (brand)
- Size: Standard
- Shadow: Orange tint
- Hover: Scale + shadow

**Usage:** Header registration, pricing CTA buttons

---

#### Outline Button (Settings/Secondary Actions)
```tsx
<Button variant="outline" className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-orange-300 hover:ring-2 hover:ring-orange-500/20 transition-all duration-200 rounded-xl">
  <FileText className="w-4 h-4 mr-2" />
  Инструкции
</Button>
```

**Characteristics:**
- Border: `border-2 border-gray-200`
- Hover: Border color + ring glow
- Icon: Left-aligned with `mr-2`
- Rounded: `rounded-xl`

**Usage:** Settings controls, secondary actions in hero

---

#### Ghost Button (Minimal)
```tsx
<Button variant="ghost" className="text-gray-700 hover:text-gray-900">
  Войти
</Button>
```

**Usage:** Login buttons, low-emphasis actions

---

### 6.2 Cards

#### Standard Card (Testimonials, FAQ)
```tsx
<div className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
```

**Characteristics:**
- Radius: `rounded-2xl`
- Padding: `p-6`
- Shadow: Neutral resting, orange hover
- Border: Semi-transparent gray
- Hover: Shadow + border + lift effect

---

#### Highlighted Card (Pricing Plans)

**Orange Highlighted (⭐ Популярный):**
```tsx
<div className="border-2 border-orange-500 bg-gradient-to-b from-orange-50/50 to-white shadow-2xl shadow-orange-500/20 scale-110 ring-4 ring-orange-500/10">
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50 ring-2 ring-white">
    ⭐ Популярный
  </div>
</div>
```

**Violet Highlighted (💰 Выгодный):**
```tsx
<div className="border-2 border-violet-500 bg-gradient-to-b from-violet-50/50 to-white shadow-2xl shadow-violet-500/20 ring-4 ring-violet-500/10">
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-violet-500/50 ring-2 ring-white">
    💰 Выгодный
  </div>
</div>
```

**Characteristics:**
- Thick border: `border-2`
- Gradient background
- Enhanced shadow with brand color
- Ring glow effect
- Scale effect (110% for popular plan, normal for badge plan)
- Floating badge with emoji

---

#### Extra Large Card (CTA Section)
```tsx
<div className="bg-white rounded-3xl shadow-2xl shadow-orange-500/10 border border-orange-100/50 p-12 relative overflow-hidden">
  {/* Decorative gradient orbs */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-violet-500/10 rounded-full blur-3xl" />

  {/* Content */}
  <div className="relative z-10">
    {/* ... */}
  </div>
</div>
```

**Characteristics:**
- Extra rounded: `rounded-3xl`
- Large padding: `p-12`
- Decorative blurred gradient orbs
- Content layering: `relative`/`z-10`

---

### 6.3 Badges

#### Pricing Badge (Orange - Популярный)
```tsx
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50 ring-2 ring-white">
  ⭐ Популярный
</div>
```

#### Pricing Badge (Violet - Выгодный)
```tsx
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-violet-500/50 ring-2 ring-white">
  💰 Выгодный
</div>
```

**Characteristics:**
- Position: `absolute -top-4 left-1/2 -translate-x-1/2` (centered floating)
- Shape: `rounded-full` (pill)
- Shadow: Strong glow with brand color
- Ring: `ring-2 ring-white` (separation)
- Emoji: Adds personality

---

### 6.4 Icons

#### Checkmark Icons (Success/Features)
```tsx
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
  <Check className="w-4 h-4 text-emerald-600" />
</div>
```

**Characteristics:**
- Container: `w-6 h-6 rounded-full bg-emerald-100`
- Icon: `w-4 h-4 text-emerald-600`
- Alignment: `mt-0.5` (optical adjustment for multi-line text)
- Shrink prevention: `flex-shrink-0`

**Usage:** Feature lists, benefit lists, pricing features

---

#### Star Rating (Testimonials)
```tsx
<div className="flex gap-1 mb-4">
  {[...Array(5)].map((_, i) => (
    <svg key={i} className="w-5 h-5 fill-[#FBBF24]" viewBox="0 0 24 24">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>
  ))}
</div>
```

**Characteristics:**
- Size: `w-5 h-5`
- Color: `fill-[#FBBF24]` (custom yellow)
- Gap: `gap-1` (tight)
- Alignment: Left-aligned with testimonial text

---

#### Feature Icons (How It Works - Alternating Colors)
```tsx
const isOrange = index % 2 === 0
<Icon className={`w-16 h-16 ${isOrange ? 'text-orange-500' : 'text-violet-500'}`} />
```

**Pattern:** Icons alternate orange/violet (0,2=orange; 1=violet)

**Icons used:**
- Upload (step 1) - orange
- Sparkles (step 2) - violet
- Download (step 3) - orange

---

### 6.5 Forms & Inputs

#### Select Dropdown
```tsx
<Select value={cardType} onValueChange={setCardType}>
  <SelectTrigger className="flex-1 bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-orange-300 hover:ring-2 hover:ring-orange-500/20 transition-all duration-200 rounded-xl">
    <div className="flex items-center gap-2">
      <BookOpen className="w-4 h-4" />
      <SelectValue placeholder="Тип карточек" />
    </div>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="basic">Базовые</SelectItem>
  </SelectContent>
</Select>
```

**Characteristics:**
- Border: `border-2 border-gray-200`
- Rounded: `rounded-xl`
- Shadow: `shadow-md`
- Hover: Orange border + ring glow + shadow increase
- Icon + text layout: `flex items-center gap-2`

---

#### Drag & Drop Zone
```tsx
<div className={`
  p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 min-h-[280px] flex items-center justify-center
  ${isDragActive
    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-2xl shadow-orange-500/10 scale-[1.02] ring-4 ring-orange-500/20'
    : 'border-gray-400 bg-gradient-to-br from-white to-gray-50/50 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-400 hover:scale-[1.01]'
  }
`}>
  <div className="text-center">
    <Upload className="w-16 h-16 text-orange-400 mx-auto mb-4" />
    <p className="text-lg font-semibold text-gray-900 mb-2">
      Перетащите PDF или нажмите для выбора
    </p>
  </div>
</div>
```

**Characteristics:**
- Dashed border: `border-2 border-dashed`
- Height: `min-h-[280px]`
- Padding: `p-12`
- Active state: Orange border + gradient + ring + scale
- Hover state: Shadow + border + micro-scale
- Icon: Large (`w-16 h-16`)

---

### 6.6 Layout Components

#### Header (Sticky with Glassmorphism)
```tsx
<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
  <div className="container mx-auto flex h-16 items-center justify-between px-4">
    {/* Logo, Navigation, Buttons */}
  </div>
</header>
```

**Characteristics:**
- Glassmorphism: `bg-white/80 backdrop-blur-xl`
- Sticky: `sticky top-0 z-50`
- Border: `border-b border-gray-200/50`
- Shadow: `shadow-sm`
- Height: `h-16`
- Layout: Flexbox with space-between

---

#### Footer
```tsx
<footer className="bg-white border-t border-gray-200">
  <div className="container mx-auto max-w-6xl px-4 py-12">
    <div className="grid grid-cols-4 gap-8 mb-8">
      {/* Logo + 3 columns */}
    </div>
    <div className="pt-8 border-t border-gray-200">
      {/* Copyright + social links */}
    </div>
  </div>
</footer>
```

**Characteristics:**
- Top border: `border-t border-gray-200`
- Grid: `grid-cols-4 gap-8`
- Divided copyright section

**Link hover:**
```tsx
className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
```

---

#### Section Container Pattern
```tsx
// Wide sections (Pricing, How It Works, Testimonials)
<section className="py-12 bg-white">
  <div className="container mx-auto max-w-6xl px-4">
    {/* Section title (centered) */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Section Title
      </h2>
      <p className="text-lg text-gray-600">
        Description
      </p>
    </div>

    {/* Content */}
  </div>
</section>

// Narrow sections (Hero, CTA, FAQ)
<section className="py-12 bg-gray-50">
  <div className="container mx-auto max-w-4xl px-4">
    {/* Content */}
  </div>
</section>
```

---

### 6.7 Lists

#### Feature List (with Checkmarks)
```tsx
<div className="space-y-4 max-w-2xl mx-auto text-left">
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
      <Check className="w-4 h-4 text-emerald-600" />
    </div>
    <p className="text-base text-gray-700 leading-relaxed">
      Feature text that might wrap multiple lines
    </p>
  </div>
</div>
```

**Characteristics:**
- Vertical spacing: `space-y-4`
- Max width: `max-w-2xl mx-auto` (centered)
- Text alignment: `text-left`
- Flex: `items-start` for multi-line support
- Icon: `flex-shrink-0 mt-0.5` (optical alignment)

---

### 6.8 Avatars

#### Testimonial Avatar (Gradient)
```tsx
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-md shadow-orange-500/30">
  {testimonial.author[0]}
</div>
```

**Characteristics:**
- Size: `w-10 h-10`
- Gradient: Brand gradient (orange→violet)
- Text: First letter, white, bold
- Shadow: Orange tint

---

### 6.9 Accordion (FAQ)
```tsx
<Accordion type="single" collapsible className="w-full space-y-4">
  <AccordionItem
    value={`item-${index}`}
    className="bg-white rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 px-6 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 transition-all duration-300"
  >
    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-500 py-5">
      {faq.question}
    </AccordionTrigger>
    <AccordionContent className="text-gray-600 leading-relaxed pb-5">
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

**Characteristics:**
- Spacing: `space-y-4` between items
- Card-like styling per item
- Hover: Shadow + border transition
- Trigger hover: Orange text
- Content: Relaxed line-height

---

## 7. Animation & Transitions (PRODUCTION)

### Standard Transitions

**All Properties:**
```tsx
className="transition-all duration-300"
```
- Usage: Most hover effects, complex state changes

**Fast Transition:**
```tsx
className="transition-all duration-200"
```
- Usage: Input focus states, quick interactions

**Color Only:**
```tsx
className="transition-colors"
```
- Usage: Text color changes, link hovers, border colors

**Shadow Only:**
```tsx
className="transition-shadow duration-300"
```
- Usage: When only shadow changes (performance optimization)

---

### Transform Animations

#### Scale
```tsx
hover:scale-105        // Subtle scale (buttons, small cards)
hover:scale-[1.01]     // Micro scale (large elements like drag-drop)
hover:scale-[1.02]     // Small scale (active drag state)
scale-110              // Static scale (highlighted pricing plan)
```

#### Translate
```tsx
hover:-translate-y-1   // Lift effect (cards, buttons)
-translate-x-1/2       // Horizontal centering (badges)
-translate-y-1/2       // Vertical centering
translate-x-1/2        // Orb positioning (half outside container)
```

#### Combined Transform (CTA Buttons)
```tsx
className="hover:scale-105 hover:-translate-y-1 transition-all duration-300"
```
- Usage: Primary CTAs, important buttons
- Effect: Lift + grow on hover

---

### Shadow Transitions

**Pattern:**
```tsx
// Resting state
shadow-xl shadow-violet-500/30

// Hover state
hover:shadow-2xl hover:shadow-violet-600/40

// Transition
transition-all duration-300
```

**Shadow Intensity Progression:**
- `shadow-md` → `shadow-lg` (subtle increase)
- `shadow-lg` → `shadow-xl` (medium increase)
- `shadow-xl` → `shadow-2xl` (large increase)

**Color Shift on Hover:**
```tsx
// Card: neutral → orange tint
shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-orange-500/10

// Button: same color, darker shade
shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-600/40
```

---

### Loading Animations
```tsx
<Loader2 className="animate-spin" />
```
- Usage: Processing states, async operations
- Icon size: `w-12 h-12` (drag-drop), `w-5 h-5` (buttons)

---

## 8. Decorative Elements

### Gradient Orbs (CTA Section)
```tsx
// Top-right orb
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

// Bottom-left orb
<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/10 to-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
```

**Characteristics:**
- Size: `w-64 h-64`
- Opacity: `{color}-500/10` (very low, 10%)
- Blur: `blur-3xl`
- Positioning: Half outside container

**Usage:** Background decoration, depth, soft ambient lighting

---

### Placeholder Containers (How It Works)
```tsx
<div className="aspect-video bg-gradient-to-br from-orange-100 via-orange-50 to-violet-50 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl shadow-orange-500/10 ring-1 ring-orange-200/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300">
  <Icon className={`w-16 h-16 ${isOrange ? 'text-orange-500' : 'text-violet-500'}`} />
  <div className="absolute bottom-2 right-2 text-xs text-violet-400 font-mono bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
    [filename.gif]
  </div>
</div>
```

**Characteristics:**
- 16:9 aspect ratio: `aspect-video`
- Gradient background
- Ring border: `ring-1`
- Group hover effects
- Bottom-right label with glassmorphism

---

### Glassmorphism
```tsx
className="bg-white/80 backdrop-blur-xl"
```

**Usage:**
- Sticky header
- Overlay elements
- Floating UI components
- Labels on placeholder content

---

## 9. Icons (PRODUCTION)

### Icon Library
**Package:** `lucide-react`

### Icon Sizing Scale

```tsx
w-4 h-4    // 16px - Inline with text, buttons
w-5 h-5    // 20px - Feature lists, arrows in buttons
w-6 h-6    // 24px - Checkmark containers
w-12 h-12  // 48px - Drag-drop zone
w-16 h-16  // 64px - How It Works featured icons
```

### Icon Colors

**Brand Colors (Alternating Pattern):**
```tsx
// Pattern for lists/grids:
const isOrange = index % 2 === 0
className={isOrange ? 'text-orange-500' : 'text-violet-500'}
```

**Success State:**
```tsx
className="text-emerald-600"  // Checkmark icons
```

**Neutral:**
```tsx
className="text-gray-700"     // Default icons
className="text-gray-500"     // Muted icons
className="text-orange-400"   // Drag-drop default state
```

### Icon + Text Alignment

**Inline (Centered):**
```tsx
<div className="flex items-center gap-2">
  <Icon className="w-4 h-4" />
  <span>Text</span>
</div>
```

**Start-Aligned (Multi-line):**
```tsx
<div className="flex items-start gap-3">
  <Icon className="w-5 h-5 shrink-0 mt-0.5" />
  <span>Text that might wrap</span>
</div>
```

**Key Details:**
- `items-start` for multi-line text
- `shrink-0` prevents icon shrinking
- `mt-0.5` optical alignment with first line

---

## 10. Accessibility

### Color Contrast

**WCAG AA Compliance:**
- Body text (gray-700 on white): 4.5:1+ ✅
- Headings (gray-900 on white): 12.6:1+ ✅
- Muted text (gray-600): 4.5:1+ ✅
- Links (orange-500): Minimum 3:1 with hover state ✅

**Button Contrast:**
- White text on orange-500: 4.5:1+ ✅
- White text on violet-500: 4.5:1+ ✅
- Gray-900 text on white: 12.6:1+ ✅

### Focus States

**Buttons:**
```tsx
className="focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
```

**Inputs:**
```tsx
className="focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300"
```

### Keyboard Navigation
- All interactive elements accessible via Tab
- Focus rings visible for keyboard users
- Logical tab order

---

## 11. Design Principles

### Core Principles (from production implementation)

1. **Brand Duality (Orange + Violet)**
   - Orange = Warm, approachable, "get started"
   - Violet = Premium, powerful, "main value"
   - Use strategically, not randomly

2. **Depth & Elevation**
   - Use multi-layered shadows with brand colors
   - Combine shadows + gradients for depth
   - Hover states increase elevation

3. **Modern Friendliness**
   - Pill buttons for CTAs (`rounded-full`)
   - Generous rounded corners (`rounded-2xl`, `rounded-3xl`)
   - Soft gradients, not harsh color blocks

4. **Consistent Spacing**
   - `py-12` for ALL sections (no exceptions)
   - `mb-16` for section title → content
   - `gap-8` for major grids (pricing, how-it-works)

5. **Emerald for Success**
   - Always use emerald for positive states
   - Checkmarks, completed states, success indicators
   - Never use green for success (use emerald)

6. **Desktop-First**
   - No mobile responsive classes yet
   - Optimize for viewport fit (reduce spacing if needed)
   - Future: Add responsive breakpoints

7. **Visual Rhythm**
   - Alternate section backgrounds (white → gray-50 → white)
   - Alternate icon colors (orange → violet → orange)
   - Consistent card elevation levels

8. **Personality through Details**
   - Emoji in badges (⭐, 💰, 🤗)
   - Testimonial avatars with gradient
   - Decorative orbs in hero sections
   - Glassmorphism in header

---

## 12. Pattern Reference (Quick Copy-Paste)

### Section Boilerplate
```tsx
<section className="py-12 bg-white">
  <div className="container mx-auto max-w-6xl px-4">
    {/* Section title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Section Title
      </h2>
      <p className="text-lg text-gray-600">
        Description
      </p>
    </div>

    {/* Content */}
  </div>
</section>
```

### Primary CTA Button
```tsx
<Button className="bg-violet-500 hover:bg-violet-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-300 hover:scale-105">
  Action Text
</Button>
```

### Feature List Item
```tsx
<div className="flex items-start gap-3">
  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
    <Check className="w-4 h-4 text-emerald-600" />
  </div>
  <p className="text-base text-gray-700 leading-relaxed">
    Feature description
  </p>
</div>
```

### Card (Hover Effect)
```tsx
<div className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300">
  {/* Content */}
</div>
```

---

## 13. File Reference

All patterns extracted from production landing page:

**Components:**
- `frontend/app/(landing)/components/landing-header.tsx`
- `frontend/app/(landing)/components/hero-section.tsx`
- `frontend/app/(landing)/components/drag-drop-zone.tsx`
- `frontend/app/(landing)/components/how-it-works-section.tsx`
- `frontend/app/(landing)/components/testimonials-section.tsx`
- `frontend/app/(landing)/components/cta-section.tsx`
- `frontend/app/(landing)/components/pricing-section.tsx`
- `frontend/app/(landing)/components/faq-section.tsx`
- `frontend/app/(landing)/components/landing-footer.tsx`

**Assets:**
- `frontend/public/logo.svg` (orange→violet gradient)

**Globals:**
- `frontend/app/globals.css`
- `frontend/app/layout.tsx` (Inter font configuration)

---

## Next Steps for Platform-Wide Application

### Dashboard Redesign Priority

1. **Color Update:**
   - Replace old color scheme with orange+violet
   - Update shadows to use brand colors
   - Apply emerald for success states

2. **Component Modernization:**
   - Update buttons to pill style (`rounded-full`)
   - Apply `rounded-2xl` to all cards
   - Add colored shadows to interactive elements

3. **Spacing Consistency:**
   - Use `py-12` for section padding
   - Apply spacing scale consistently
   - Fix any py-20 to py-12

4. **Typography:**
   - Ensure Inter font is applied
   - Update heading sizes to match landing
   - Apply color hierarchy (gray-900 → gray-700 → gray-600)

5. **Animations:**
   - Add hover lift effects to cards
   - Apply scale to buttons
   - Use `duration-300` for transitions

---

**Version:** 2.0 (Production)
**Last Updated:** 2025-11-11
**Status:** Complete and ready for platform-wide application
**Next Review:** After dashboard redesign

---

**Remember:** This is the source of truth for all design decisions. Update as design evolves. All new components must reference and follow these patterns.
