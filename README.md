# National Gallery Singapore - Living Pictures

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Development Environment](#setup-development-environment)
- [Setup Production Environment](#production-environment)
- [Getting Started on the Template](#getting-started-on-the-template)

## Project Overview

This is a volunteering project for National Gallery Singapore. You can see the starting template deployed [here](https://ngs.michac789.com). The objective is to create a starter template that is easily extendable and customizable for digital publishing creators to publish their content online. The template is made so that it is easy to add articles, citations, bibliographies, images, videos, etc. (all the basic features expected for digital publishing), by simply editing the constants file, without having to understand the intricacies of creating the template from scratch.

The framework is built using React, and with the use of styled-components (preety much vanilla CSS) to achieve customized styling. If you need an existing fast to create and publish template, you can consider using this project as starting point. In this case, the project features and specification is taylored for Living Pictures, a digital publishing project by National Gallery Singapore.

## Setup Development Environment

### Using Docker

Here are the steps to set up the development environment using Docker:

1. Clone the repository

```bash
git clone https://github.com/michac789/ngs-living-pictures.git
```

Alternatively, you can download the source code as a zip file and extract it.

2. Install [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)

3. Make sure that you are in the root directory of the project, run the following command to start the development server

```bash
docker-compose up
```

The server should be running at localhost:3000.

### Without Docker

Alternatively, you can set up the development environment without using Docker:

1. Install [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) (Node Version Manager) if you haven't already

2. Install and use Node version 18.16.1 as written in the `.nvmrc` file

```bash
nvm install 18.16.1
nvm use 18.16.1
```

3. Install yarn globally

```bash
npm install -g yarn
```

4. Install dependencies and start the development server

```bash
yarn install
yarn start
```

## Production Environment

### General Steps

There are many ways to deploy the project to production. Generally, here are the steps to deploy the project to production using Docker:

1. Build the project and push the image to Docker Hub or any other container registry

```bash
./build.sh
```

The given `build.sh` is a working example for my personal use case, please modify the `build.sh` script to match your container registry.

2. Pull the image from the container registry and run the container on the production server

```bash
./deploy.sh
```

The given `deploy.sh` is a working example for my personal use case, please modify the `deploy.sh` script to match your container registry, and specific configurations for your production server.

Alternatively, you can also use a serverless platform like Vercel, Netlify, or AWS Amplify to deploy the project to production.

### Current Production Environment

The current production environment is deployed on a DigitalOcean droplet [here](https://ngs.michac789.com). A simple HTTP server from `serve` package is used to serve the static files for this project (refer to `Dockerfile.prod`), instead of using a full-fledged web server like Nginx. Using Caddy as a reverse proxy server, the project is served over HTTPS.

Using GitHub Actions, the project is automatically built and deployed to the production server when a new commit is pushed to the `main` branch. You can refer to the `.github/workflows/deploy.yml` file for reference.

Alternatively, you can also use a serverless platform like Vercel, Netlify, or AWS Amplify to deploy the project to production.

## Getting Started on the Template

TODO: Add instructions on how to use the template

### Future Improvements

The use of Gatsby.js for static site generation is considered for future improvements. This will improve the performance of the website, and optimize search engine optimization (SEO) for the website.
