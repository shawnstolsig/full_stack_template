# full_stack_template
A full stack web app template with a React frontend and Django backend.

## Frontend stack:
Material-UI: for UI components
Axios: for API calls to backend
Redux (with redux-thunk and react-redux): for managing state.  Prebuilt with actions/reducers for basic authentication
React-Router: for managing SPA navigation
JWT-decode: for decoding JSON Web Tokens

## Backend stack:
Django REST framework: for creating a REST-ful API
Django REST simple JWT: for managing authentication with JSON Web Tokens
Djoser: to expose endpoints for JSON Web Token authentication
Cors-Headers: to allow frontend to talk to backend
Whitenoise: for serving static files (primarily, the front end build)
Gunicorn: a production-ready python WSGI HTTP server


