# 🧮 Counter App 

This guide walks you through creating a simple **Counter App using ReactJS**. It's perfect for beginners learning about **components, state, and event handling**.

---

## 🧰 Prerequisites

- Basic knowledge of JavaScript and ES6
- Node.js installed
- Code editor like VS Code
- npm or yarn package manager

---

## 📦 Step 1: Create React App

Open your terminal and run:

```bash
npx create-react-app counter-app
cd counter-app
npm start

## 🧹 Step 2: Clean Up

Remove unnecessary files from src:

```plaintext
- App.css
- logo.svg
- reportWebVitals.js
- setupTests.js

Then update App.js and index.css accordingly.

## 🧠 Step 3: Understanding the Folder Structure

Remove unnecessary files from src:

```plaintext
counter-app/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css



## 🧩 Step 4: Create the Counter Component

### 📁 File: Counter.js

```jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increase} style={styles.btn}>➕ Increment</button>
        <button onClick={decrease} style={styles.btn}>➖ Decrement</button>
        <button onClick={reset} style={styles.btn}>🔄 Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  btn: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default Counter;
```
## 🧷 Step 5: Use the Counter in App

### 📁 File: App.js

```jsx
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

## 🎨 Step 6: Add Some CSS (Optional)

You can add global styles in index.css:

```css
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f0f2f5;
}

## 🚀 Step 7: Run Your App

```bash
npm start
```

Open your browser at http://localhost:3000 to see your Counter App in action!

✅ Output

- Displays a count starting at 0

- 3 Buttons:

    - ➕ Increment

    - ➖ Decrement

    - 🔄 Reset

## 📌 Concepts Covered

- React Functional Components

- useState Hook

- Event Handling

- Basic Styling

## 📥 Suggestions

- Add upper/lower limit logic

- Animate counter transitions

- Save count to localStorage

