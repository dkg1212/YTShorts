

<div align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YTShorts Logo" width="100" />
	<h1>YTShorts 🚀</h1>
	<p><b>Create, upload, and share YouTube-style short videos with a modern, beautiful UI!</b></p>
</div>

---

YTShorts is a modern web application for creating, uploading, and sharing YouTube-style short videos. Built with <b>Next.js</b>, <b>Prisma</b>, <b>Clerk authentication</b>, and a beautiful UI powered by <b>shadcn/ui</b> components.


## ✨ Features

- 🔑 <b>Secure authentication</b> with Clerk
- 🎬 <b>Upload and manage short videos</b> easily
- 🗂 <b>User dashboard</b> to view and manage your own shorts
- 🖼️ <b>Modern, responsive UI</b> for all devices
- 🌗 <b>Light/Dark theme toggle</b> for your comfort
- 🔍 <b>Search functionality</b> to find shorts quickly
- 🛠️ <b>Built with Next.js App Router, TypeScript, and Prisma ORM</b>


## 🚀 Getting Started

Follow these steps to get YTShorts running locally:

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/ytshorts.git
cd ytshorts
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add your database and Clerk credentials:
```env
DATABASE_URL=your_postgres_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4️⃣ Set up the database
Run Prisma migrations to set up your database schema:
```sh
npx prisma migrate dev
```

Generate the Prisma client:
```sh
npx prisma generate
```

### 5️⃣ Start the development server
```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your app in action!


## 🗂️ Project Structure

<details>
	<summary>Click to expand project structure</summary>

	<pre>
├── app/                # Next.js app directory
│   ├── api/            # API routes (auth, upload, etc.)
│   ├── upload/         # Upload page
│   └── page.tsx        # Home page
├── components/         # Reusable UI and feature components
│   ├── header/         # Navbar and header components
│   ├── shorts/         # ShortCard component
│   └── ui/             # UI primitives (button, input, etc.)
├── lib/                # Prisma client and utilities
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets
├── .env                # Environment variables
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
	</pre>
</details>


## 🧑‍💻 Usage

- ✍️ <b>Sign up / Sign in:</b> Use Clerk authentication to create an account and access your dashboard.
- ⬆️ <b>Upload Shorts:</b> Go to the upload page and submit your video in seconds.
- 👀 <b>View Shorts:</b> See your uploaded shorts on your dashboard and share with others.
- 🔎 <b>Search:</b> Use the search bar to quickly find shorts by title or description.
- 🌗 <b>Theme Toggle:</b> Switch between light and dark mode for a personalized experience.


## 🛠️ Tech Stack

- ⚡ [Next.js](https://nextjs.org/) (App Router)
- 🗄️ [Prisma](https://www.prisma.io/) ORM
- 🔐 [Clerk](https://clerk.com/) authentication
- 🎨 [shadcn/ui](https://ui.shadcn.com/) components
- 🧑‍💻 [TypeScript](https://www.typescriptlang.org/)
- 🐘 [PostgreSQL](https://www.postgresql.org/)


## 🤝 Contributing

We welcome contributions from everyone! To get started:

1. 🍴 Fork the repository
2. 🏗️ Create your feature branch (`git checkout -b feature/my-feature`)
3. 💡 Commit your changes (`git commit -am 'Add new feature'`)
4. 🚀 Push to the branch (`git push origin feature/my-feature`)
5. 📝 Open a pull request

Feel free to open issues for bugs, feature requests, or questions!


## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
	<b>Questions or support?</b> <br>
	<a href="https://github.com/your-username/ytshorts/issues">Open an issue</a> or contact the maintainer.<br>
	<br>
	<img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" width="200" alt="YTShorts Fun" />
</div>
