# nova
An application designed to connect music lovers from around the world.

## Features
- **User Authentication**: Secure sign-up and login features.
- **Music Discovery**: Browse and discover music across various genres.
- **Album Likes**: Users can 'like' and 'unlike' albums, giving them a way to express their musical tastes.
- **Comments and Discussions**: Every album has a comments section where users can share their thoughts and engage in discussions.
- **Popularity Metrics**: Albums, tracks, and genres have popularity scores based on user interactions.
- **Community Section**: A dedicated space for users to connect and share with the larger community.

## Technical Overview 💻

- **Backend**: Written in Node.js, using Express.js for routing.
- **Database**: PostgreSQL for storing user data, album likes, comments, and more.
- **Frontend**: (Assumption: React.js) with a responsive design for mobile and desktop users.

## Setup and Installation 🛠

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Set up the database**:
   - Make sure you have PostgreSQL installed.
   - Set up your database and note down the connection details.
   - Use the provided SQL scripts to initialize the database tables.

3. **Configure environment variables**:
   - Rename the `.env.example` file to `.env`.
   - Fill in the required environment variables.

4. **Run the app**:
    ```bash
    cd client/
    npm run start
    ```

## Contribute 🌟

We welcome contributions! If you find a bug or have a feature request, please open an issue. If you want to contribute to the codebase, open a pull request.

## License

MIT License.
