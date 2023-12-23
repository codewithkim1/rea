# NodeJS Realtime Chat: A Full-Stack App with React, Vite, and Express

## Development Setup

**Starting the Frontend:**

1. In the project's root directory, run `npm run dev` or `yarn dev`.
2. Vite will start the frontend development server, accessible at `http://localhost:5173`.

**Starting the Backend:**

1. In a separate terminal window, navigate to the `backend` directory.
2. Run `npm run start` or `yarn start`.
3. This will start the NodeJS Express server, listening on port 3001 (default).

**Accessing the Application:**

- Open your web browser and visit `http://localhost:5173`.

## Key Features

- Secure authentication
- Multi-chat support
- Real-time messaging
- Clean and responsive UI
- Fast development workflows with Vite
- Efficient build process and Hot Module Replacement (HMR)
- NodeJS backend for API and authentication
- Integration with ChatEngine API

## Project Structure

**Frontend:**

- Built with React and Vite
- Key files:
   - `main.jsx`: Entry point
   - `AuthPage.jsx`: Authentication
   - `ChatsPage.jsx`: Chat interface
   - `App.jsx`: Application state management

**Backend:**

- NodeJS Express server
- Key files:
   - `index.js`: Sets up server and API endpoints

## Additional Information

- Choose between `@vitejs/plugin-react` (Babel) or `@vitejs/plugin-react-swc` (SWC) for React support.
- Customize and extend the project to fit your needs.
- Refer to the ChatEngine documentation for more details on its API and features.

## Contributing

Pull requests are welcome! Open an issue for discussion before significant changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
