# TaskTrove: Fullstack Todo App with Next.js

This is a simple todo application built with Next.js that utilizes both frontend and backend functionalities.

## Features

- **Create**: Add new todo items.
- **Read**: View the list of existing todo items.
- **Update**: Mark todo items as completed or update their content.
- **Delete**: Remove todo items from the list.

## Technologies Used

- **Frontend**:
  - Next.js
  - React.js
  - Tailwind CSS

- **Backend**:
  - Next.js
  - MongoDB

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js installed on your machine and npm (or yarn) installed: https://nodejs.org/en/
* MongoDB database installed and running: https://www.mongodb.com/tryfree

### Installation

1. Clone the repo
```bash
  git clone https://github.com/imparth7/tasktrove.git
```

2. Navigate to the project directory
```bash
  cd tasktrove
```

3. Install dependencies
```bash
  npm i
```

4. Set up environment variables

Create a .env file in the project root directory (ignore this file in version control) and add the following environment variable:

```.env
  MONGODB_URI=your_mongodb_connection_string
```

Replace your_mongodb_connection_string with your actual MongoDB connection URI. You can obtain this URI from your MongoDB dashboard or by creating a new database cluster.

## Usage

1. Start the development server:
```bash
  npm run dev
```
This will start the server on [http://localhost:3000](http://localhost:3000) by default.

2. Access the application in your browser:

Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
