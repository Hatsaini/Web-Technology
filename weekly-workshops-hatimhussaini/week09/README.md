# COMP2110 Week 09: Web Accessibility and Responsive Design

This week's workshop was divided into two main parts: enhancing interactive web elements for accessibility and reviewing responsive design principles. The focus was on building user-friendly and inclusive web interfaces that adapt to various devices and assistive technologies.

### Part 1: Enhancing Interactive Elements for Accessibility

This section involved transforming common web components (buttons, alerts, modals, lists) into accessible, keyboard- and screen-reader-friendly elements, applying techniques to support real users who rely on assistive technologies.

*   **Task 1: Accessible Live Region (`index.html`, `script.js`):**
    *   Implemented a live status message area (`<div id="quoteStatus" aria-live="polite"></div>`) in the HTML.
    *   Used JavaScript to dynamically update its `textContent` (e.g., "Loading quote…", "Quote loaded", "Failed to load quote") during `fetch()` operations, ensuring screen reader users are informed of dynamic content changes.

*   **Task 2: Keyboard-Friendly Custom Button (`index.html`, `script.js`):**
    *   Transformed a `div` element into a fully accessible button (`<div id="refreshBtn" role="button" tabindex="0" aria-label="Refresh Quote"></div>`).
    *   Added `role="button"` and `tabindex="0"` to make it recognizable and focusable.
    *   Included `aria-label` for screen reader announcements.
    *   Wrote a JavaScript event handler (`keydown`) to allow activation using the Enter or Space key, in addition to mouse clicks.

*   **Task 3: Modal Dialog with Focus Management (`index.html`, `script.js`):**
    *   Built an accessible modal dialog (`<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" hidden></div>`).
    *   Used `role="dialog"` and `aria-modal="true"` to convey its purpose.
    *   Connected a heading to the modal using `aria-labelledby` for screen reader title announcements.
    *   Implemented crucial focus control: focus shifts into the modal when opened (`modal.focus()`) and returns to the triggering element (`openModal.focus()`) when closed. Enabled dismissal via the Escape key.

*   **Task 4: Listbox Navigation with Arrow Keys (`index.html`, `script.js`):**
    *   Created an accessible list of options using `role="listbox"` on the parent (`<ul>`) and `role="option"` on each list item (`<li>`).
    *   Assigned `tabindex="0"` to each list item to make them focusable.
    *   Implemented JavaScript to detect `ArrowUp` and `ArrowDown` key presses, enabling focus movement between list items.
    *   Allowed selection of list items using Enter or Space keys, with dynamic update of a `selected-quote` display.

### Part 2: Review Responsive Design for Usability and Accessibility

This section involved exploring how web pages adapt to different devices and screen sizes, analyzing responsive design principles in practice, and evaluating usability based on mobile design guidelines.

*   **Website Exploration and Observations:**
    *   Opened a familiar website (e.g., news, forum, or shopping site) in a desktop browser.
    *   Scaled the desktop browser window up and down to observe layout changes.
    *   Used responsive design mode in browser Developer Tools (e.g., Chrome) to view the site on various phone and tablet screen sizes (reloading after switching layouts).