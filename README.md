# ResponsiveCards
 
## Overview

This project is a React-based web application that fetches posts from an API and displays them in a card format on the homepage. The application is styled using CSS modules and is built with a clean and responsive design in mind. Additionally, it includes reusable components like buttons and link buttons, making it easy to extend and maintain.

## Features

- **Fetch and Display Data**: The application fetches data from an external API using Axios and displays the posts in a card format on the homepage.
- **Reusable Components**: Includes reusable button and link button components styled with CSS modules.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring a great user experience on both desktop and mobile devices.
- **React Router**: Implements basic navigation using React Router.

## Project Structure

The project structure is organized as follows:

```
/src
  /assets
    - energy.jpg
  /components
    /Button
      - Button.js
      - Button.module.css
    /Card
      - Card.js
      - Card.module.css
    /Link
      - LinkButton.js
      - LinkButton.module.css
  /pages
    /HomePage
      - HomePage.js
      - Home.module.css
  /api
    - instance.js
    - index.js
  - App.js
  - index.js
  - index.css
```

### `/assets`
- **energy.jpg**: Image used in the card component.

### `/components`
- **Button**: A reusable button component styled with CSS modules.
- **Card**: A component that displays data in a card format, including title, text, date, and an image.
- **Link**: A link button component for navigation, styled with CSS modules.

### `/pages`
- **HomePage**: The main page that fetches posts and displays them in a card layout.

### `/api`
- **instance.js**: Configures an Axios instance with a base URL for API requests.
- **index.js**: Contains the `getPosts` function to fetch posts from the API.

### `App.js`
- The main application component that sets up routing using React Router.

### `index.js`
- Entry point for the React application, rendering the `App` component.

### `index.css`
- Global styles for the application.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`.

## Usage

- **Homepage**: The homepage fetches and displays the first 10 posts from the API.
- **Show More Button**: A button at the bottom of the page (currently disabled) that can be used to load more posts or navigate to another page in future enhancements.
- **Responsive Design**: Resize your browser to see the responsive behavior.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **CSS Modules**: A CSS file in which all class and animation names are scoped locally by default.

## Future Enhancements

- Implement the "Show More" functionality to load more posts dynamically.
- Add user authentication and authorization.
- Create additional pages and navigation for more content.
- Integrate with a real backend API for fetching and managing posts.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

