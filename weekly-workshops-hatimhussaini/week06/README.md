# COMP2110 Week 06: Web Components and API Integration

This week's workshop focused on building modular and reusable UI components using Web Components, specifically with the Lit Element library, and integrating external data through API calls. The main task involved creating a sampler application demonstrating these concepts.

### Tasks Completed:

*   **Web Components Implementation:**
    *   Developed custom HTML elements (`<page-header>`, `<starwars-film>`, `<page-footer>`) using Lit Element.
    *   Structured these components into separate JavaScript files (`pageheader.js`, `starwars.js`, `pagefooter.js`) for better modularity and organization.

*   **Page Header Component (`pageheader.js`):**
    *   Created a reusable `<page-header>` component that dynamically displays a title and a logo, passed as attributes.
    *   Applied internal CSS to style the header, demonstrating encapsulated styles within a web component.

*   **Star Wars Film Component (`starwars.js`):**
    *   Implemented the `<starwars-film>` component to fetch and display details of a specific Star Wars film from the SWAPI (Star Wars API).
    *   The component takes a `film` attribute (e.g., "2") to specify which film to fetch.
    *   Utilized the `connectedCallback` lifecycle method to initiate the API fetch when the component is added to the DOM.
    *   Conditionally renders a "Loading..." state while data is being fetched and then displays the film's title and director once data is available.

*   **Page Footer Component (`pagefooter.js`):**
    *   Created a simple `<page-footer>` component to complete the page structure.

*   **HTML Integration (`index.html`):**
    *   Integrated all custom web components into `index.html`, demonstrating how to use them as native HTML tags.
    *   Ensured proper loading of module scripts (`type="module"`) for the Lit Element components.


