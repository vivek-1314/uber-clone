# User Registration API Documentation

## Register User Endpoint

Registers a new user in the system.

### Endpoint 

### Field Validation Rules

- **email**: Must be a valid email format
- **password**: Minimum 8 characters
- **fullname.firstname**: Minimum 3 characters
- **fullname.lastname**: Minimum 3 characters

### Authentication

The endpoint returns a JWT token that should be used for subsequent authenticated requests.

### Notes

- The password is hashed before storing in the database
- The returned JWT token expires in 1 day
- The password field is excluded from the user object in the response 