# npm ✅

- `npm init`.
- fill details package name, version, description, entry point, test command, git repository, keywords, author, license.
- In **test command** write `jest`.

- `package.json` is a configuration for **npm**.
- Now we can get packages, dependencies into our project.
- The most important package in our project is **bundler**.
- webpack, parcel, vite, etc. these are the bundlers. bundlers bundles .your app to deploy it on production.
- Create react app uses webpack behind the scenes.
- In our project we are using **parcel**.
- **parcel** is easy to configure.
- Installing the package as a dev dependencies `npm install -D parcel`
- Dev-dependency does not go on production.

**_Q. What is the difference between tilde(~) and caret(^) in package.json what is the use of it in it?_**

Ans. If there is any new version it will automatically upgraded to the latest update.
**_caret(^) - Caret will upgrade the minor upgrade._**
**_tilde(~) - Tilde will upgrade the major upgrade._**
_Always it is safe to put it in **caret** because its okay to upgrade the minor versions than the major, because when we have a major upgrade lots of things in our app will break..._

**_Q. What is the difference between package.json and package-lock.json?_**

Ans. _**package.json** is a configuration file for npm used to track the npm files and **package-lock.json** keeps the exact track of the npm package versions and locks the version and keeps the record of the npm packages and its version._

**_Q. What are the transitive dependencies in node modules?_**

Ans. _Dependencies of dependencies nested in it and have `package.json`, `package-lock.json` is called as transitive dependencies._

### Igniting Our App ✅

1. Run this command (development build command)

```bash
  npx parcel index.html
```

2. Install react

```bash
  npm install react
```

3. Install react-dom

```bash
  npm install react-dom
```

4. For production build (production build command)

```bash
  npx parcel build index.html
```

_What does **parcel** does for us?_

- Dev build.
- Local Server.
- HMR --> Hot module replacement.
- File watching Algorithm --> It is written in C++.
- Faster Builds because of cache/ caching.
- Parcel will also do Image Optimization.
- Minification of file while going on production.
- Bundling of file while going on production.
- Compressing of file while going on production.
- It gives consistent hashing.
- Code Splitting.
- Differential bundling --> when your app can be opened inside internet explorer, so parcel takes care of app to run smoothly on older browser also..
- Diagnostic.
- It has Tree Shaking Algorithm It will remove unused code for you.
- Good Error Suggestions and Error Handling.
- It gives freedom to host it on HTTPS.
- Different development and production bundles.

**_Q. What is a parcel-cache why we use it?_**
Ans. _**.parcel-cache** is used for caching purpose to make running and building process faster._

For more info refer: `parceljs.org`

### BrowserList ✅

for more info: `browserlist.dev`

- browserslist can be configured in **package.json** file and It is an array.
- Play along with **Overall Browser Coverage**.
- If the overall browser coverage is more the bundle size get increased and add extra code. 80% is the ideal browser coverage.
- for faster user experience configure the browser list and make browser coverage to 75-90% its fine. But if your app is a government website then we have to include all browsers 98-99%, hence government websites are slower.
