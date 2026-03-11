# COMP2110 Week 11: Server-Side Development, Cookies, and XSS Vulnerabilities

This week's workshop focused on understanding server-side web development using Express.js, managing client-side data with cookies, and exploring common web security vulnerabilities, specifically Cross-Site Scripting (XSS).

### Tasks Completed:

*   **Server Setup and Operation (`simple-server-main/index.js`):**
    *   Downloaded the `simple-server-main` zip file and unpacked it into the weekly workshops repository.
    *   Installed dependencies (`npm install`) and successfully ran the server (`npm start`).
    *   Visited the front-end in the browser and observed the creation of the `counter` cookie upon the first visit, confirming cookie creation.
    *   Traced through the server code in `index.js` to identify where the cookie value is created (`res.cookie(COOKIE_NAME, count);`) and added to the response.
    *   **Counter Modification:** Modified the server code in `index.js` to increment the counter by two (e.g., `count += 2;`) for each visit, and successfully tested this modification on the front-end.

*   **Likes Functionality and XSS Attack Exploration (`simple-server-main/index.js`, `public/js/script.js`, `public/index.html`):**
    *   Added various 'likes' to the list via the form on the front-end.
    *   Observed the requests sent when adding likes, noting that POST requests were used with a JSON payload containing the `thing` field (e.g., `{thing: "your_like_text"}`).
    *   **Initial XSS Test (Secure Version):** Submitted a 'like' with JavaScript code (e.g., `<span onmouseover="alert('hacked!')">Hacked</span>`). Observed that the server, as initially written, correctly escaped the HTML, displaying it as plain text and preventing code execution.
    *   **Introducing XSS Vulnerability:** Followed instructions in `public/js/script.js` to use `unsafeHTML` for rendering the 'likes'. This involved adding `unsafeHTML` to the Lit Element import statement and wrapping the `like` variable with `unsafeHTML()` in the `render` method (`${unsafeHTML(like)}`).
    *   **Re-testing XSS (Vulnerable Version):** Repeated the XSS attacks (e.g., `<span onmouseover="alert('hacked!')">Hacked</span>`, `<img src="x" onerror="alert('XSS via image error')">`, `<script>alert('XSS via script tag')</script>`). Successfully observed that the malicious JavaScript code executed in the browser, demonstrating the XSS vulnerability.
    *   Used browser developer tools to inspect how the malicious input was inserted directly into the page's DOM, leading to code execution.
