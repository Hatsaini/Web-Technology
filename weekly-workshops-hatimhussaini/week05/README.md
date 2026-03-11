# COMP2110 Week 05: Dynamic Content and DOM Manipulation (Books Application)

This week's workshop focused on dynamically rendering content on a web page using JavaScript and manipulating the Document Object Model (DOM) to create interactive user experiences. The core task was to build a "Multi Page Books" application.

### Tasks Completed:

*   **HTML Structure (`index.html`):**
    *   Created a basic HTML page to serve as the container for the books application.
    *   Included a button (`id="control"`) to trigger view changes and a `div` (`id="content"`) to display the book information.

*   **JavaScript Logic (`script.js`):**
    *   Implemented logic to store book data (initially hardcoded in `allBooks` object, mirroring the structure of `books.json`).
    *   Developed two distinct rendering functions:
        *   `renderBooks`: Displays a simple list of book titles and authors.
        *   `detailedView`: Renders a more comprehensive view of each book, including title, author, image, pages, year, country, and language.
    *   Configured the "control" button to toggle between these two views, clearing the content area before rendering the new view.
    *   Ensured the initial load displays the detailed view of the books.

*   **Data Handling (`books.json`):**
    *   While the data was hardcoded in `script.js`, `books.json` serves as the structured JSON data source for the book information, outlining the expected format for each book object.

*   **CSS Styling (`style.css`):**
    *   Applied basic styling to the application elements, including the button and the content area, to ensure a presentable layout.


