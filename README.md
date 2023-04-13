<div align="center">

# Curriculum Vitae

[![Security](https://github.com/tperich/curriculum-vitae/actions/workflows/security.yml/badge.svg)](https://github.com/yourusername/curriculum-vitae/actions/workflows/security.yml)
[![Linting](https://github.com/tperich/curriculum-vitae/actions/workflows/linting.yml/badge.svg)](https://github.com/yourusername/curriculum-vitae/actions/workflows/linting.yml)

<image max-width="100px" src="public/react.svg" alt="react logo" /> +
<image max-width="100px" src="public/typescript.svg" alt="typescript logo" />  +
<image max-width="100px" src="public/vite.svg" alt="vite logo" />  =
<image max-width="85px" src="public/book.svg" alt="book icon" />

A modern and interactive web-based Curriculum Vitae built with React, TypeScript, and Vite.

[Features](#features) •
[Getting Started](#getting-started)

</div>

## Features

- React for building reusable UI components
- TypeScript for type safety and better developer experience
- Vite for fast development and efficient production build
- Docker for easy deployment and containerization
- Nginx for serving production build

## Getting Started

### Prerequisites

- Node.js >= 14.x
- Docker and Docker Compose (optional, for development or deployment)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/tperich/curriculum-vitae.git
```

2. Install dependencies

```bash
npm install
```

### Development

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production

To build the production version, run:

```bash
npm run build
```

The production build will be located in the `dist/` folder.

### Deployment

For development deployment using Docker, run:

```bash
sudo docker compose up
```

For production deployment using Docker, run:

```bash
docker-compose -f docker-compose.prod.yml up
```

### Available npm/yarn scripts

| Command         | Explanation                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| `npm run dev`  | Starts the development server on localhost:5173                                                              |
| `npm run build`| Builds the project using Vite                                                                                |

## License

This project is licensed under [BSD 2-Clause License](./LICENSE)
