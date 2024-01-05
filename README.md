# Transcendence Web App

Transcendence is a web application that allows users to play Pong with other players, create chat channels, and interact with friends in real-time. The app is built using NestJS for the backend, VueJS 3 for the frontend, and utilizes a PostgreSQL database. The following README provides instructions on how to set up and run the Transcendence web app.

![Transcendence Logo](https://github.com/agiraudet/transcendence/blob/main/vuecli/trsc-client/src/assets/images/landingPage.png)

## Table of Contents
- [Visuals](#visuals)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Usage](#usage)
  - [User Account](#user-account)
  - [Chat](#chat)
  - [Game](#game)
- [Contributors](#contributors)

## Visuals

![Login page](https://github.com/agiraudet/boidsServ/blob/main/visuals/login.png)
![Profile page](https://github.com/agiraudet/boidsServ/blob/main/visuals/profile.png)
![Chat page](https://github.com/agiraudet/boidsServ/blob/main/visuals/chat.png)

## Getting Started

### Prerequisites
To run the Transcendence web app, make sure you have the following installed on your system:
- Docker
- Docker Compose

### Installation
1. Clone the Transcendence repository to your local machine:
   ```
   git clone https://github.com/agiraudet/transcendence.git
   cd transcendence
   ```

### Environment Variables
Before running the app, you need to set up the environment variables. Modify the `.env` file at the root of the project and fill in the required API keys and other configurations:

## Running the App
1. Build and run the Transcendence app using Docker Compose:
   ```
   docker-compose up --build
   ```
2. Once the containers are up and running, you can access the app in your web browser at `http://localhost:5173`

## Usage

### User Account
- To use the app, users must log in using the OAuth system of 42 intranet.
- After logging in, users can choose a unique name that will be displayed on the website.
- Users can upload an avatar, and if they don't, a default one will be set.
- Two-factor authentication is available for added security.
- Users can add other users as friends and see their current status (online, offline, in a game, etc.).
- User profiles display stats such as wins and losses, ladder level, achievements, and more.
- Each user has a Match History section that includes 1v1 games, ladder matches, and other relevant information.

### Chat
- Users can create channels (chat rooms) that can be public, private, or protected by a password.
- Direct messages can be sent to other users.
- Blocking other users will prevent further messages from the blocked account.
- The creator of a channel is automatically set as the channel owner and can manage the channel settings.
- Channel owners can set passwords, change them, and remove them from protected channels.
- Channel owners can also set other users as administrators.
- Channel administrators have certain moderation powers like kicking, banning, or muting users for a limited time.
- Users can invite others to play Pong games through the chat interface.
- Profiles of other players can be accessed through the chat interface.

### Game
- The main purpose of the app is to play Pong versus other players.
- Users can play live Pong games versus each other directly on the website.
- There is a matchmaking system that allows users to join a queue and get automatically matched with other players.
- The Pong game can be customized with different rules.
- A default version of the game is available without any extra features for those who prefer a classic experience.
- The game is designed to be responsive, providing an optimal user experience on various devices.

## Contributors
- agiraude
- dkoriaki
- mbenabbo
