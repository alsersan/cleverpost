# Cleverpost

## Usage

- Go to [https://cleverpost.netlify.app](https://cleverpost.netlify.app/)
- Log in using your credentials (preferrably with the google social login).

## Details

### General

- CRUD application to create and edit/delete posts.
- Initial posts are fetched from JSONplaceholder, and edited/deleted locally.
- React + Typescript used.

### Design

- Fully responsive.
- Custom made (no external libraries).
- Just 2 colors (primary and secondary).
- Subtle CSS animations and transitions, including a loading spinner.

### State Management

- Redux and Redux Toolkit was used to store the api data.
- React Context was used to store the language selection.
- The data from the logued user was not stored locally, since Auth0 provides hooks to access it from any component.

### Implementation

- Completely in TypeScript (no "any" types used).
- ~50 unit and integration tests.
- Extensive use of custom eslint rules to assure code quality (import order, code style, errors, etc.)
- Protected routes.
- Error handling.
- Usage of env variables for the connection to Auth0.
- Internationalization in Spanish and English.
- Since the users had to be fetched anyway in order to recover the username from the UserId, a page displaying all the users was created.
