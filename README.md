# NewsMag

This is a News Magazine

## React and Bootstrap

1. Create a new Vite project:
    ```bash
    npm create vite@latest
    ```
    - Project name: `news-mag`
    - Framework: React
    - Variant: JavaScript

2. Install all dependencies:
    ```bash
    npm install
    ```
    This will create the `node_modules` directory.

3. Run the project:
    ```bash
    npm run dev
    ```

4. In `src/App.jsx`, clear existing code and write:
    ```jsx
    rafc
    ```
    Also, clear many default code files.

## Bootstrap

1. Add Bootstrap CDN to your project. Include the following Bootstrap CSS and script files in your HTML.

2. Go to the Bootstrap -> Components section.

3. Create a `Components` folder and add JSX files (e.g., `Navbar.jsx`, `NewsBoard.jsx`, `NewsItem.jsx`).

4. Mount these components in `App.jsx`.

## News API

1. Store your API key in an environment variable using a `.env` file from the News API site.

2. From the site -> documentation -> top headlines, copy the API URL.

3. Add this URL to `NewsBoard.jsx`.

4. Add a `useState` variable for the articles.

5. Fetch the articles from the URL and display them in the `NewsItem` component by mapping them.

6. Create `news` props in `NewsBoard`, destructure these props in `NewsItem`, and use them.

7. Add styling and categories to the `Navbar`.
