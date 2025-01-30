# Express Middleware Project 2

This repository contains a solution to an Express.js middleware exercise using Node.js.

## Exercise: Implement Middleware for Request Logging and Authorization

### Requirements:
1. **Create a new Express project.**
2. **Implement middleware for logging requests:**
   - Log the request method (`GET`), the requested URL, and the timestamp.
3. **Implement middleware for authentication:**
   - Check if the query parameter `user=admin` is provided in the request.
   - If the parameter is missing or not `admin`, return a `403 Access Denied` response.
   - If `user=admin`, allow access to the requested route.

### Project Structure:
```plaintext
Express-Middleware-Project-2/
├── app.js
├── package.json
```
- **Middleware logic**: Implemented in `app.js` to handle logging and authentication.
- **Server execution**: Managed using Express and Nodemon.

### Solution Overview:

1. **Middleware with Express.js**:
   - Logs request details to the console.
   - Checks authorization for accessing specific routes.

2. **Defined Routes**:
   - `/`: Returns the text `"ברוכים הבאים לדף הבית!"`.
   - `/admin`: If `user=admin` is provided, returns `"ברוכים הבאים לעמוד הניהול!"`. Otherwise, denies access.
   - `/public`: Returns the text `"זהו דף ציבורי."`, accessible to all users.

### Example Routes:
- `GET /`: Displays `"ברוכים הבאים לדף הבית!"`.
- `GET /admin`: Requires `user=admin`, otherwise returns `403 Access Denied`.
- `GET /public`: Always accessible.

### How to Run:
1. Download the project as a ZIP file and extract it.
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

### Dependencies:
- **express** (`^4.21.2`): A fast, minimalist web framework for Node.js.
- **nodemon**: Automatically restarts the server when file changes are detected.

Have a great day ♡



![CuteCat](https://github.com/user-attachments/assets/829711bc-b2ed-46ea-b09a-b7825d51b2fe)
