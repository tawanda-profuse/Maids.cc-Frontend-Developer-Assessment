# About This Project

This project is my solution to the Frontend Developer job assessment from Maids.cc. The project should be implemented using Angular 7+ and Angular CLI as the foundation. The project meets the following requirements:

1. **Project Setup**: The project was created using Angular 16.2.2.

2. **Page Layout**: A header and a horizontally centered list styled with CSS Flexbox as well as pagination.

3. **Data Retrieval**: Utilizes HTTP to fetch all user data and details for a single user.

4. **Navigation**: Clicking the user cards navigates to a new page with the users details.

5. **Search Functionality**: Includes an instant search field in the header for searching users by ID.

6. **User Details Page**: Shows the individual users details and has a button to navigate back to the home page.

7. **Caching**: The [main service](/src/app/services/users.service.ts) uses the shareReplay module from RxJs to access all users and an individual user.

8. **UX Enhancements**: A loading animation made with CSS is used to indicate pending network requests.

9. **Additional Features**: State management with the `ActivatedRoute` module, [custom directives](/src/app/app.module.ts), and [Observables](/src/app/services/users.service.ts) to manage async operations. 

## Installation

1. Clone this repository to your local machine.
2. Type `npm install in the terminal`.
3. Type `npm run start` to start the application.
4. Read the console message to know which port to access the website (typically localhost:4000).