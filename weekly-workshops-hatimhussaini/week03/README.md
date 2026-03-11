# COMP2110 Week 03: Web Fundamentals - HTTP and Caching

This week's workshop explored core web fundamentals, focusing on HTTP methods, response codes, request/response headers, and caching mechanisms. The tasks involved using browser developer tools to inspect network activity and understand how web content is served and optimized.

### Task 1:
Made a new HTML file called index.html and used the google devtools to inspect the page and answered the folloring questions:
- What HTTP methods are used (GET, POST, etc.)?
ans: GET HTTP methods are used
- What response codes do you see (200 OK, 404 Not Found, etc.)?
ans: we see a "304 NOT MODIFIED" response code.
- Look at the request and response headers. What information is included?  
ans: the request header has details of my device,and the file and meta ata such as the language of the file as well as web browser used. and the response header has details of when the request was made and modified.

### Task 2:
Look for a section named Query String Parameters under the Payload tab. What information can you see there?  
ans: i can see the name and theme fields that i just entered in the url.  

Observe the differences in the webpage before and after adding JavaScript. What changes when JavaScript is added?  
ans: a new css file shows up in the network tab. the css file is basically the script.js file that is altering the layout of our html page.  

*   **Task 3: Caching Mechanisms:**
    *   Compared loading times before and after disabling cache, observing a noticeable increase in load time (from 126 ms to 252 ms), highlighting the efficiency of caching.
    *   Identified and interpreted key caching headers:
        *   `Cache-Control`: Provides direct instructions on how long the browser should store a file.
        *   `ETag`: Allows verification if the exact file on the server has changed.
        *   `Last-Modified`: Indicates when the file was last modified on the server.

*   **Task 4: Demonstrating Caching:**
    *   Observed caching behavior by repeatedly refreshing `http://localhost:3000` in the browser, noting that the server served the page from cache when `max-age` was active, resulting in near 0ms reload times.

*   **Advanced Task: 304 Not Modified Status:**
    *   Successfully observed a "304 Not Modified" status code on the second request in the DevTools Network tab, confirming that caching was working as expected.

### Challenges Encountered:

Identify and interpret: Cache-Control, ETag, Last-Modified.  
ans: Cache-Control gives direct instructions on how long the browser should store the file, ETag lets us know if the exact file is still on the server, Last modified tells us when the file was last modified.  

### Task 4:  

Open http://localhost:3000 in the browser.
Refresh repeatedly and check how the response is cached in DevTools.  
ans: i see that when i reload the page, the server reloads from cache as the max age is 30 seconds and the server returns the page from cache instead of making a new request to the server, this helps with reload times whivh are near 0ms.  

### Advanced task:  

Open DevTools → Network tab and refresh the page twice. Observe if the second request returns 304 Not Modified, proving caching is working.  

ans: the localhost does return a 304 not modified status showing that caching is working.