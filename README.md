# 200% Studio Animation Clone

This project is a recreation of the animation section from the **200% Studio** website, implementing smooth, high-performance animations using **TypeScript, Next.js, Tailwind CSS, and Framer Motion**.

## 🚀 Live Demo
[View Deployment](will be available soon)

## 📌 Features
- Smooth animations using **Framer Motion**.
- Responsive and optimized layout with **Tailwind CSS**.
- Dynamic content rendering using **React hooks**.
- Modular and reusable components.
- Dark mode support.

## 🛠️ Tech Stack
- **Next.js 14** – React-based framework for SSR and SSG.
- **TypeScript** – Type-safe JavaScript.
- **Tailwind CSS** – Utility-first styling.
- **Framer Motion** – High-performance animations.

## 🎨 Design & Animation Approach
The animation begins with a **full-screen image** that transitions into a smaller, rotated image with a border. The content appears after a timed delay, using `useEffect` and `setTimeout` to control state changes.

### Animation Breakdown:
1. **Main Image Animation**
   - Initially covers the entire screen.
   - Shrinks and moves to a predefined position with a border.
   - Smooth transition using **easeInOut** timing.

2. **Content Fade-In**
   - Introduced after the main animation is complete.
   - Text and images appear with scale, opacity, and rotation transformations.

3. **Responsive Design**
   - Optimized for **different screen sizes**.
   - Uses Tailwind’s responsive utilities.

## 📂 Project Structure
