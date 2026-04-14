<div align="center">
  <h1>create-requiem-next-app</h1>
  <p><b>The ultimate Next.js scaffolding tool featuring GSAP transitions, Lenis scrolling, and pre-built immersive layouts.</b></p>
  
  [![npm version](https://img.shields.io/npm/v/create-requiem-next-app.svg?style=flat-square)](https://www.npmjs.com/package/create-requiem-next-app)
  [![npm downloads](https://img.shields.io/npm/dt/create-requiem-next-app.svg?style=flat-square)](https://www.npmjs.com/package/create-requiem-next-app)
</div>

<br />

## Why Requiem?

Starting a modern, visually stunning Next.js project usually takes hours of repetitive boilerplate tracking. Installing state managers, configuring smooth scrolling, writing routing animations, and importing default Layouts is incredibly tedious. 

**Requiem** abstracts all of this into a single command. It comes deeply integrated with GSAP page transitions and premium UI components right out of the box, completely removing the hassle of manually installing them so your project kickstarts efficiently.

<br />

## Quick Start

To spin up a new Requiem project instantly, run the following command in your terminal:

```bash
npx create-requiem-next-app
```
<br />

## The Configuration Wizard

Instead of guessing flags or modifying dozens of files post-install, Requiem walks you through a streamlined interactive wizard to inject exactly the stack you need.

<div align="center">
  <img src="https://res.cloudinary.com/duw6ht4tk/image/upload/q_auto/f_auto/v1776148246/cmd_mmxipe.png" alt="Requiem Command Line Wizard" width="90%"/>
</div>

### Setup Questions

During execution, the CLI will comprehensively ask you about your ideal application environment:

1. **Project Name** – What is your project name? *(We automatically configure `package.json` for you).*
2. **State Management** – Select your State Management library:
   - `Zustand` *(Recommended: Lightweight and elegant hook approach).*
   - `Redux Toolkit` *(Strict structure, great for highly-scaled applications).*
   - `None` *(Vanilla React context if you prefer doing it yourself).*
3. **Data Fetching** – Would you like to include `TanStack Query`? *(Say yes, and the provider and devtools will automatically wrap around your core Layout).*

<br />

## Core Features

### Immersive GSAP Page Transitions
Say goodbye to boring hard reloads. Requiem includes an inherently complex **GSAP Page Transition** system injected natively into Next.js 15 routing. Your users will experience cinematic, fluid transitions across pages by default.

### Lenis Smooth Scroll
Premium web applications demand a premium scrolling behavior. Requiem natively incorporates **React Lenis**, ensuring a frictionless, buttery-smooth momentum scrolling physics engine dynamically applied across the entire site.

### Beautiful Kickstart Layouts
Sick of starting with a blank white page? Requiem automatically seeds your application with a gorgeous, responsive **Header and Footer** component stack. It utilizes our default `LayoutClient` architecture to serve as a robust foundational wrapper that easily lets you visualize your site's aesthetic.

### Instant Library Scaffolding
The days of manual configuration are essentially over. Depending on your wizard choices, your project will natively scaffold the boilerplate store variables, hooks, or Provider files, fetch backend dependencies, and seamlessly weave them into your App Router DOM. 

<br />

## Gallery

Take a look at the curated UI components provided instantly upon project creation.

### Desktop View

**Header Layout:**
<img src="https://res.cloudinary.com/duw6ht4tk/image/upload/q_auto/f_auto/v1776147870/desktopheader_zcrpiz.png" alt="Desktop Header Component" width="100%" />

**Footer Layout:**
<img src="https://res.cloudinary.com/duw6ht4tk/image/upload/q_auto/f_auto/v1776147870/desktop_with_footer_e4sgdm.png" alt="Desktop Footer Component" width="100%" />

<br/>

### Mobile View

<div align="center">
  <img src="https://res.cloudinary.com/duw6ht4tk/image/upload/q_auto/f_auto/v1776147870/headermobile_reploy.png" alt="Mobile Header" width="45%" style="display:inline-block; margin-right:4%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="https://res.cloudinary.com/duw6ht4tk/image/upload/q_auto/f_auto/v1776147870/footermobile_onlpvi.png" alt="Mobile Footer" width="45%" style="display:inline-block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

<br />

## Keywords
`nextjs`, `nextjs-15`, `react`, `app-router`, `gsap`, `page-transitions`, `lenis`, `smooth-scroll`, `redux`, `zustand`, `tanstack-query`, `boilerplate`, `scaffolding`, `cli`, `frontend-framework`
