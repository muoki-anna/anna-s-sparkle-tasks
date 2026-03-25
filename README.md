# 📅 Daily Schedule Planner

> A modern, responsive daily schedule planner built with React — helping users organize their day, manage tasks, and stay productive.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installing Node.js and npm](#-installing-nodejs-and-npm)
- [Installing React (Create React App)](#-installing-react-create-react-app)
- [Project Setup & Installation](#-project-setup--installation)
- [Running the App Locally](#-running-the-app-locally)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Building for Production](#-building-for-production)
- [Deployment with Vercel](#-deployment-with-vercel)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Project Overview

The **Daily Schedule Planner** is a single-page web application (SPA) built using the React JavaScript library. It allows users to plan, track, and manage their daily activities through an intuitive and clean interface. The app is fully responsive, meaning it works seamlessly across desktop and mobile devices.

This project was developed as part of a frontend development module to demonstrate proficiency in:

- Component-based UI architecture using React
- State management with React Hooks (`useState`, `useEffect`)
- Responsive design principles
- Deployment workflows using Vercel

---

## ✨ Features

- ✅ Add, edit, and delete daily tasks
- ✅ Organize tasks by time slots (morning, afternoon, evening)
- ✅ Mark tasks as complete or pending
- ✅ Responsive layout for mobile and desktop
- ✅ Clean and minimal UI design
- ✅ Persistent state handling
- ✅ Deployed and accessible online via Vercel

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://reactjs.org/) | Frontend UI Library |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Core programming language |
| [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) | Markup structure |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling and layout |
| [Node.js & npm](https://nodejs.org/) | Runtime environment and package manager |
| [Vercel](https://vercel.com/) | Deployment and hosting |

---

## 🔧 Prerequisites

Before setting up this project on your local machine, ensure you have the following installed:

- **A code editor** — [Visual Studio Code](https://code.visualstudio.com/) is recommended
- **Node.js** (version 14 or higher) — includes npm
- **Git** — for cloning the repository
- **A modern web browser** — Chrome, Firefox, or Edge

To verify your existing installations, open a terminal and run:

```bash
node --version
npm --version
git --version
```

If these commands return version numbers, you're good to go. If not, follow the installation steps below.

---

## 💻 Installing Node.js and npm

React requires **Node.js** and **npm** (Node Package Manager) to run. npm is bundled with Node.js, so installing Node.js automatically installs npm.

### Step 1 — Download Node.js

Visit the official Node.js website: [https://nodejs.org](https://nodejs.org)

Download the **LTS (Long-Term Support)** version — this is the most stable version recommended for most users.

### Step 2 — Install Node.js

Run the downloaded installer and follow the on-screen setup wizard. Accept all default settings. The installer will:

- Install Node.js on your system
- Install npm alongside Node.js
- Add both to your system's PATH automatically

### Step 3 — Verify Installation

Open a new terminal (Command Prompt on Windows, Terminal on macOS/Linux) and run:

```bash
node --version
# Expected output example: v18.17.0

npm --version
# Expected output example: 9.8.1
```

> ⚠️ **Note:** If the terminal does not recognize `node` or `npm` after installation, try restarting the terminal or your computer to refresh the PATH.

---

## ⚛️ Installing React (Create React App)

React apps are typically scaffolded using **Create React App (CRA)**, an official tool maintained by the React team that sets up a complete React development environment with zero configuration.

### Option 1 — Using `npx` (Recommended)

`npx` is included with npm (version 5.2+) and allows you to run packages without globally installing them. This ensures you always use the latest version of Create React App.

```bash
npx create-react-app my-app
```

### Option 2 — Using `npm` (Global Install)

If you prefer to install Create React App globally:

```bash
npm install -g create-react-app
create-react-app my-app
```

> 💡 **Tip:** Replace `my-app` with your desired project name. For this project, the folder is named `daily-schedule-planner`.

After running either command, CRA will automatically:

1. Create a new project folder
2. Install all necessary React dependencies (`react`, `react-dom`, `react-scripts`)
3. Set up a ready-to-run development environment

This process may take a few minutes depending on your internet speed.

---

## 📥 Project Setup & Installation

Follow these steps to set up the project on your local machine.

### Step 1 — Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/your-username/daily-schedule-planner.git
```

> Replace `your-username` with your actual GitHub username.

### Step 2 — Navigate into the Project Directory

```bash
cd daily-schedule-planner
```

### Step 3 — Install Project Dependencies

All the packages the project depends on are listed in `package.json`. Install them by running:

```bash
npm install
```

This command reads `package.json` and downloads all required packages into a `node_modules` folder. This may take a minute or two.

> ⚠️ **Important:** Never manually edit or delete the `node_modules` folder. If it gets corrupted, simply delete it and run `npm install` again.

---

## ▶️ Running the App Locally

Once dependencies are installed, start the local development server:

```bash
npm start
```

This will:

1. Compile the React application
2. Start a local development server on **port 3000**
3. Automatically open the app in your default browser at `http://localhost:3000`

The development server supports **Hot Module Replacement (HMR)** — meaning the browser automatically refreshes whenever you save changes to your code. There is no need to manually restart the server during development.

---

## 🗂 Project Structure

Below is an overview of the project's folder and file structure:

```
daily-schedule-planner/
│
├── public/
│   ├── index.html          # Root HTML template — React mounts here
│   ├── favicon.ico         # Browser tab icon
│   └── manifest.json       # PWA metadata
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── TaskCard.js     # Individual task display component
│   │   ├── TaskForm.js     # Form to add/edit tasks
│   │   └── TimeSlot.js     # Time-based task grouping component
│   │
│   ├── App.js              # Root application component
│   ├── App.css             # Global styles for the App component
│   ├── index.js            # Entry point — renders App into the DOM
│   └── index.css           # Base/global CSS styles
│
├── .gitignore              # Files and folders excluded from Git
├── package.json            # Project metadata and dependency list
├── package-lock.json       # Exact locked versions of all dependencies
└── README.md               # Project documentation (this file)
```

### Key Files Explained

| File | Description |
|---|---|
| `public/index.html` | The single HTML page that the React app loads into. Contains `<div id="root">` where React mounts. |
| `src/index.js` | JavaScript entry point. Calls `ReactDOM.render()` to attach the App component to the DOM. |
| `src/App.js` | The top-level React component. Manages global state and renders child components. |
| `package.json` | Defines project scripts, metadata, and lists all required npm packages (dependencies). |

---

## 📜 Available Scripts

The following scripts are available from inside the project directory:

### `npm start`

Starts the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode. Tests are written using the built-in Jest testing framework.

### `npm run build`

Builds the app for **production** into the `build/` folder. The output is optimized and minified for best performance. This is the folder Vercel (and other platforms) use when deploying.

### `npm run eject`

> ⚠️ **Warning — This is a one-way operation and cannot be undone.**

Ejects the hidden Create React App configuration (webpack, Babel, ESLint, etc.) into your project for full manual control. Only use this if you have advanced configuration needs.

---

## 🏗 Building for Production

When you are ready to deploy, create a production-optimized build:

```bash
npm run build
```

This command generates a `build/` directory containing:

- Minified JavaScript bundles
- Optimized CSS files
- Compressed static assets

The contents of the `build/` folder are what gets deployed to your hosting platform.

> 💡 You can preview the production build locally by installing the `serve` package:
>
> ```bash
> npm install -g serve
> serve -s build
> ```
>
> The app will be available at `http://localhost:3000`.

---

## 🚀 Deployment with Vercel

This project is deployed using **[Vercel](https://vercel.com/)**, a cloud platform optimized for frontend frameworks like React. Vercel provides automatic deployments, a global CDN, HTTPS by default, and preview deployments for every Git push.

### Live Deployment

🌐 **Live App URL:** [https://daily-schedule-planner.vercel.app](https://daily-schedule-planner.vercel.app)

> Replace the above URL with your actual Vercel deployment link.

---

### Deployment Steps

There are two ways to deploy to Vercel:

---

#### Method 1 — Deploy via Vercel Dashboard (Recommended for Beginners)

**Step 1 — Create a Vercel Account**

Go to [https://vercel.com](https://vercel.com) and sign up using your GitHub account.

**Step 2 — Import Your GitHub Repository**

1. On the Vercel dashboard, click **"Add New Project"**
2. Select **"Import Git Repository"**
3. Choose your `daily-schedule-planner` repository from the list
4. Click **"Import"**

**Step 3 — Configure Project Settings**

Vercel will auto-detect that this is a Create React App project and pre-fill the settings:

| Setting | Value |
|---|---|
| Framework Preset | `Create React App` |
| Build Command | `npm run build` |
| Output Directory | `build` |
| Install Command | `npm install` |

Leave these as-is unless you have custom configurations.

**Step 4 — Deploy**

Click **"Deploy"**. Vercel will:

1. Clone your repository
2. Run `npm install`
3. Run `npm run build`
4. Deploy the contents of the `build/` folder to their global CDN

Within a minute, your app will be live at a URL like `https://your-project-name.vercel.app`.

---

#### Method 2 — Deploy via Vercel CLI

**Step 1 — Install the Vercel CLI**

```bash
npm install -g vercel
```

**Step 2 — Log In to Vercel**

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

**Step 3 — Deploy from the Project Directory**

Navigate to the project root and run:

```bash
vercel
```

The CLI will ask a series of setup questions. Answer as follows:

```
? Set up and deploy "daily-schedule-planner"? → Yes
? Which scope do you want to deploy to? → Select your account
? Link to existing project? → No
? What's your project's name? → daily-schedule-planner
? In which directory is your code located? → ./
? Want to override the settings? → No
```

Vercel will automatically detect the Create React App setup and deploy your project. A live URL will be displayed in the terminal once deployment is complete.

**Step 4 — Deploy to Production**

By default, `vercel` deploys to a preview URL. To deploy to your main production URL, run:

```bash
vercel --prod
```

---

### Automatic Re-Deployments

Once connected to GitHub, Vercel automatically re-deploys your app every time you push changes to the `main` branch:

```bash
git add .
git commit -m "Update task card styling"
git push origin main
```

Vercel detects the push and triggers a new deployment within seconds. You can monitor deployment status from the Vercel dashboard.

---

## 🔐 Environment Variables

If your app uses environment variables (e.g., API keys), follow these steps:

### Local Development

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here
```

> ⚠️ **Important:** All React environment variables **must** be prefixed with `REACT_APP_` to be accessible inside the app.

Access them in your components like this:

```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

### Vercel Environment Variables

To add environment variables to your Vercel deployment:

1. Go to your project on the Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable with its name and value
4. Select the environments it applies to (Production, Preview, Development)
5. Click **Save** and redeploy the project

> 🔒 The `.env` file is listed in `.gitignore` and should **never** be committed to version control.

---

## 🔍 Troubleshooting

### `npm start` fails or port 3000 is already in use

Kill the process using port 3000 and try again:

```bash
# On macOS/Linux
lsof -ti:3000 | xargs kill

# On Windows (Command Prompt)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or start the app on a different port:

```bash
PORT=3001 npm start       # macOS/Linux
set PORT=3001 && npm start # Windows
```

---

### `node_modules` issues or dependency errors

Delete the `node_modules` folder and reinstall:

```bash
rm -rf node_modules
npm install
```

---

### Build fails on Vercel

Common causes and fixes:

| Problem | Solution |
|---|---|
| Missing environment variables | Add them in Vercel Dashboard → Settings → Environment Variables |
| Dependency not in `package.json` | Run `npm install <package-name> --save` locally and push |
| Wrong Node.js version | Specify version in Vercel settings or add a `.nvmrc` file |
| Case-sensitive import errors | Ensure file names match exactly (Linux is case-sensitive) |

---

### App shows blank page after deployment

This usually means there is a routing issue. In `package.json`, make sure the `homepage` field is set correctly:

```json
"homepage": "."
```

Or if you are using React Router, ensure you are using `HashRouter` or have configured Vercel's `vercel.json` rewrites:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. **Fork** the repository on GitHub
2. **Create** a new feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "Add your descriptive message"`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request on GitHub

Please ensure your code follows the existing style and that all tests pass before submitting.

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software for personal and commercial purposes.

See the [LICENSE](LICENSE) file for full details.

---

<div align="center">

Made with ❤️ using React · Deployed on Vercel

