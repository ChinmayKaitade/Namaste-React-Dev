## 1. `package.json` mein Scripts: Kya aur Kaise? ⚙️

`package.json` mein **scripts** ek tarah ke **custom commands** hote hain jo aap apne project ke liye define karte hain. Inka main kaam lambe aur complicated commands ko **chota aur yaad rakhne mein aasan** banana hai.

### Usecase (Kyun Use Karein?)

| Script Name | Command                     | Real World Use / Run Kaise Hota Hai                                                                                                                                   | Emojis  |
| :---------- | :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| **`start`** | `"parcel index.html"`       | **Development:** Jab hum `npm start` run karte hain, toh woh Parcel dev server chala deta hai.                                                                        | 🟢 dev  |
| **`build`** | `"parcel build index.html"` | **Production:** Jab hum `npm run build` run karte hain, toh woh Parcel ko code optimize (minify, compress) karke `dist/` folder mein final build banane ko kehta hai. | 🏗️ prod |
| **`test`**  | `"jest"`                    | **Testing:** `npm test` chalaane par Jest test runner run hota hai aur code ki functionality check hoti hai.                                                          | ✅🧪    |

### Runs Kaise Hota Hai? (How to Run?)

Scripts ko run karne ke liye hum **`npm run <script_name>`** command use karte hain.

- **For `start` and `test`:** `npm run` ki zarurat nahi hoti, sirf `npm start` ya `npm test` chal jata hai.
- **For all other custom scripts (like `build`):** **`npm run build`** use karna mandatory hai.

**Benefits:** Aapko Parcel ya Jest jaise tools global install karne ki zarurat nahi padti. `npm` automatically `node_modules/.bin` folder mein se un tools ko dhoondh kar chala deta hai.

---

## 2. JSX: Not HTML! (The Lookalike) 👀

Aapka statement bilkul sahi hai: **"JSX looks like HTML, but JSX is NOT HTML."**

### JSX Kya Hai?

- **Full Form:** **JavaScript XML**.
- **Definition:** Yeh ek **Syntax Extension** hai JavaScript ki. Matlab, yeh sirf JavaScript likhne ka ek aasan tareeka hai.
- **Goal:** React elements (jo ki **JS Objects** hote hain) banane ke liye `React.createElement()` ko baar-baar likhne se bachna.

### Real Difference (Antar)

| Feature     | JSX (Jo Hum Likhte Hain)                    | Browser/React Ko Kya Milta Hai             | Emojis |
| :---------- | :------------------------------------------ | :----------------------------------------- | :----- |
| **Code**    | `<h1>Hello</h1>`                            | `React.createElement('h1', null, 'Hello')` | ✍️     |
| **Type**    | Syntax/Syntactic Sugar                      | **Plain JavaScript Object**                | 🍬🧠   |
| **Process** | **Babel** use karke isko convert karta hai. | Browser isko directly nahi samajhta.       | 🔄     |

**Conclusion:** JSX sirf ek **visual shortcut** hai. Run hone se pehle, Parcel aur Babel jaise tools isko **Pure JavaScript** mein badal dete hain, taaki React usey Object bana sake aur fir `root.render()` use HTML mein badal sake.

---

## 3. ES6 (ECMAScript): The Modern JS 👑

### ES6 Kya Hai?

- **Full Form:** **ECMAScript 2015** (ya ECMAScript 6, ES6).
- **Definition:** Yeh **JavaScript language ka official standard** hai. ECMAScript woh rules define karta hai jin par JavaScript language based hoti hai.
- **Release:** Yeh 2015 mein release hua tha aur ismein JavaScript mein bahut bade **major changes** aur **modern features** laaye gaye the.

### Major Features Jo Humein React Mein Chahiye:

| Feature                         | Use (Hinglish)                                                              | Emojis |
| :------------------------------ | :-------------------------------------------------------------------------- | :----- |
| **`let` / `const`**             | Variables declare karne ka naya, behtar tareeka.                            | 🧱     |
| **Arrow Functions**             | Functions likhne ka **chota** aur **clean** tareeka.                        | ➡️     |
| **Promises**                    | Asynchronous operations (like API calls) ko handle karne ka behtar tareeka. | 🤝     |
| **Classes**                     | Object-Oriented Programming (OOP) concepts.                                 | 🏛️     |
| **Modules (`import`/`export`)** | Code ko alag-alag files mein todne (break) aur use karne ka tareeka.        | 📦🔌   |

**Why Important?** Hum jo modern React code likhte hain, woh sab **ES6 aur uske baad ke versions** (ES7, ES8, etc.) par based hota hai. **Bundlers (Parcel/Vite)** ka kaam hi yeh hai ki woh is modern ES6 code ko purane browsers ke liye **compatible JavaScript** mein badal dein.

---

## 4. Babel: The Translator of Modern JavaScript 🗣️🔄

### Babel Kya Hai?

- **Definition:** Babel ek **JavaScript compiler** (ya more accurately, **transpiler**) hai.
- **Role:** Iska primary role **modern JavaScript** code (jo hum ES6, ES7, React mein likhte hain) ko **older browser-compatible JavaScript** (mostly ES5) mein convert karna hai.

### Babel Ka Kaam (The Role)

1.  **Transpiling Modern JS:**

    - Aapka likha hua modern code (`const`, `let`, Arrow Functions, `import/export`) purane browsers ko samajh nahi aata.
    - Babel isko padhta hai aur uske equivalent purana code (mostly `var`, regular functions) bana deta hai.
    - _Example:_ `const x = 5` $\to$ `var x = 5`

2.  **JSX Conversion:**

    - Browser JSX ko directly nahi samajhta (kyunki woh HTML nahi hai).
    - Babel hi woh tool hai jo aapke JSX code (`<h1>Hello</h1>`) ko **Pure JavaScript Function Calls** (`React.createElement('h1', null, 'Hello')`) mein badalta hai.

3.  **Polyfills:**

    - Yeh naye features (jaise `Promise`, `Map`, ya kuch array methods) ko purane browsers mein bhi chalaane ke liye **extra code** inject karta hai.

**Summary:** Agar Babel nahi hoga, toh aap modern React/ES6 code nahi likh payenge, ya woh purane browsers mein toot jayega. **Babel = The Translator** jo compatibility ensure karta hai.

---

## 5\. JSX Attributes aur Naming Conventions 🎨🏷️

JSX HTML jaisa dikhta hai, lekin woh JavaScript hai, isliye iske attributes likhne ke kuch khaas rules hain:

### Rule 1: CamelCase Naming Convention (Required) 🐪

HTML mein attributes **lowercase** hote hain (e.g., `onclick`, `class`), lekin JSX mein, hum **CamelCase** use karte hain.

- **HTML:** `onclick="handleClick()"`
- **JSX:** `onClick={handleClick}` (Note: Value JavaScript expression hoti hai, quotes nahi)
- **HTML:** `tabindex="0"`
- **JSX:** `tabIndex={0}`

### Rule 2: `class` $\to$ `className` (Crucial) 🧑‍🏫

JavaScript mein `class` keyword reserved hota hai (class banane ke liye). Isliye, HTML ke `class` attribute ko hum JSX mein **`className`** likhte hain.

- **HTML:** `<div class="main-container">`
- **JSX:** `<div className="main-container">`

### Rule 3: Self-Closing Tags (Important) ✂️

JSX mein, har tag ko **close** karna zaroori hai. Self-closing tags ko bhi close karna padta hai.

| Tag            | HTML (Optional Close) | JSX (Mandatory Close)                     |
| :------------- | :-------------------- | :---------------------------------------- |
| **Image Tag**  | `<img src="url">`     | **`<img src="url" alt="description" />`** |
| **Break Line** | `<br>`                | **`<br />`**                              |

### Exploring Various Tags and Attributes in JSX

#### 🖼️ Image Tag (Self-Closing)

Image tag hamesha self-closing hota hai, aur `alt` attribute hamesha dena chahiye.

```jsx
// ❌ Incorrect (Not Closed)
// <img src="./logo.png">

// ✔ Correct JSX Syntax
const Logo = () => (
  <img src="./logo.png" alt="My Company Logo" className="logo-style" />
);
```

#### ⚓ Anchor Tag

Anchor tag HTML jaisa hi hota hai, bas `class` ki jagah `className` use hota hai.

```jsx
// ✔ Correct JSX Syntax
const Link = () => (
  <a href="https://example.com" target="_blank" className="external-link">
    Visit Example Site
  </a>
);
```
