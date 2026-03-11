# COMP2110 Week 12: Server-Side Authentication, Password Hashing, and Cracking

This week's workshop focused on implementing server-side user authentication, emphasizing secure password storage techniques, and demonstrating the vulnerabilities of weak password practices through a cracking script. The core tasks involved setting up and exploring a password server and a password cracker.

### Tasks Completed:

*   **Server Setup and Exploration (`password-server-main/index.js`):**
    *   Downloaded and unpacked the `password-server-main.zip` into the repository.
    *   Installed dependencies (`npm install`) and successfully ran the server (`npm start`).
    *   Accessed the server in the browser and performed user registration and login tests.
    *   **User Registration Observations:**
        *   Registered a username and password, observing the display of the user's hash and salt details.
        *   Registered a second user with the same password as the first, and successfully observed that different hash and salt values were generated, confirming the use of unique salts for each user.
    *   **Code Tracing:** Traced through the server's source code, adding `console.log` statements at various points (e.g., within `/register` and `/login` endpoints) to observe the internal workings and data flow during user registration and login.

*   **Password Cracking Demonstration (`password-server-main/crack.js`):**
    *   Executed the `crack.js` script using `node crack.js` in the terminal.
    *   **Cracking Experiment (PBKDF2):**
        *   Obtained a password hash and matching salt (e.g., from a user registered with 'passwordXX').
        *   Copied these values into the `hash` and `salt` variables within the `crack.js` script.
        *   Ran the script and observed its attempt to brute-force the password. Noted the time taken to crack the password, demonstrating the slowness inherent in PBKDF2 due to its iterative nature.
    *   **Algorithm Comparison (SHA-256 vs. PBKDF2):**
        *   Modified both the `password-server-main/index.js` (server application) and `password-server-main/crack.js` (cracking script) to switch from PBKDF2 to the faster SHA-256 hashing algorithm (using the provided `sha256Hash` implementation in `crack.js` and copying it to `index.js`).
        *   Repeated the password cracking experiment with the SHA-256 version.
        *   Observed a significant difference in the speed of finding the target password, confirming that SHA-256 is much faster and thus less secure for password hashing compared to PBKDF2.

