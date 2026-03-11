# COMP2110 Week 07: Advanced Web Components & API Interaction

This week built upon the previous week's introduction to Web Components, focusing on more complex interactions, dynamic data fetching, and nested custom elements. The core task involved creating an interactive Star Wars film and character display application.

### Tasks Completed:

*   **Comprehensive Star Wars Component (`<star-wars>` in `starwars.js`):**
    *   Developed a main `<star-wars>` web component responsible for displaying Star Wars film details.
    *   Implemented a dropdown (`<select>`) to allow users to dynamically choose between different Star Wars films (Episodes 1-6).
    *   Fetched film data from the SWAPI (Star Wars API) based on the selected film, displaying its title, director, and opening crawl.
    *   Integrated styling directly within the component using Lit Element's `static styles` to manage the layout of film details and character list.

*   **Nested Character Component (`<star-wars-character>` in `starwars.js`):**
    *   Created a nested `<star-wars-character>` web component that fetches and displays individual character details (name and height) from the SWAPI.
    *   This component receives a character's API URL as a property, demonstrating data passing between parent and child web components.
    *   Dynamically rendered a list of characters for the selected film by mapping over the `characters` array in the film data and creating an instance of `<star-wars-character>` for each.

*   **Page Structure Components (`pageheader.js`, `pagefooter.js`):
    *   Continued to utilize the `<page-header>` and `<page-footer>` components from Week 06 to maintain a consistent page structure, demonstrating reusability of Web Components.

*   **HTML Integration (`index.html`):
    *   Integrated the `<star-wars>` component alongside `<page-header>` and `<page-footer>` in `index.html`, showcasing how complex applications can be built by composing smaller, modular web components.
