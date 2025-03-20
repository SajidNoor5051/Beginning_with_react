# Steps to Use Tailwind CSS in Your Project

## 1. Create a Tailwind Configuration File

Run the following command to generate a `tailwind.config.js` file:

```bash
npx tailwindcss init
```

## 2. Include Tailwind in Your CSS

In your main CSS file (e.g., `src/index.css`), add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Build Your CSS

Make sure your build tool (Vite) is set up to process your CSS. You can run the development server with:

```bash
npm run dev
```

## 4. Use Tailwind Classes in Your Components

Now you can use Tailwind utility classes in your JSX files. For example:

```jsx
<div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>
```
