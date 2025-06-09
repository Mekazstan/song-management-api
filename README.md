# A Song Management System API

A **Song Management System API**.  

Authenticate users using JWTs, connect a database, create models and schemas, and integrate it with ORMs. Structure the architecture of your API to ensure scalability and seamless communication with the frontend.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Nest.js

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Mekazstan/song-management-api.git
cd song-management-api
```

**Installation**

Install the project dependencies using yarn:

```bash
yarn install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

```

**Running the Project**

```bash
yarn start:dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.
