# Backend Task: User Management API

Your task is to enhance the existing user management API. The current implementation uses an in-memory store (`fakeUsers`) for simplicity. You'll need to implement several operations while ensuring proper validation and type safety.

## Current Implementation

The existing code includes a basic route for users with GET, POST, and DELETE operations. Your task is to expand on this foundation.

## Requirements

1. **Create User**
    - Implement a proper CREATE operation for new users.
    - Ensure all necessary fields are validated using Zod.
    - Assign a unique `user_id` to each new user.

2. **Update User**
    - Create an UPDATE operation to modify user fields.
    - Validate the fields that can be updated.
    - Ensure the operation works correctly with the in-memory store.

3. **Activate User**
    - Implement an operation to set a user's status to "active".
    - This should only work for existing users.

4. **Inactivate User**
    - Create an operation to set a user's status to "inactive".
    - This should only work for existing users.

5. **Delete User**
    - Enhance the existing DELETE operation to remove a user from the in-memory store.
    - Ensure proper error handling if the user doesn't exist.

## Guidelines

- Use Zod for input validation on all operations where applicable.
- Ensure proper TypeScript types are used throughout your implementation.
- All operations should work with the in-memory `fakeUsers` array.
- Implement error handling for cases such as user not found, invalid input, etc.
- Follow RESTful API principles in your route design.


# Frontend Task: User Management Interface

Your task is to enhance the existing User Manager interface by integrating it with the backend API and adding necessary functionality for user management operations.

## Current Implementation

The existing code provides a basic structure for the User Manager interface, including a table to display users and a dropdown menu for actions. Your task is to expand on this foundation and make it fully functional.

## Requirements

1. **Fetch and Display Users**
   - Implement API calls to fetch users from the backend.
   - Display the fetched users in the existing table structure.
   - Ensure proper error handling and loading states.

2. **Create User**
   - Add a "Create User" button above the table.
   - Implement a form (modal or separate page) for creating a new user.
   - Include form validation using a library of your choice (e.g., Zod, Yup).
   - Submit the form data to the backend API.

3. **Update User**
   - Implement the "Update user" functionality from the dropdown menu.
   - Create a form pre-filled with the user's current data.
   - Allow editing of appropriate fields.
   - Submit changes to the backend API.

4. **Activate/Deactivate User**
   - Implement the "Activate user" and "Deactivate user" actions.
   - These should call the appropriate backend API endpoints.
   - Update the user's status in the UI upon successful API response.

5. **Delete User**
   - Implement the "Delete user" functionality.
   - Add a confirmation dialog before deletion.
   - Remove the user from the UI upon successful deletion via the API.

6. **Form Validation**
   - Implement frontend validation for all forms (create and update user).
   - Ensure validation rules match those on the backend.

7. **Custom Status Badge**
   - Modify the Badge component to create custom variants for "active" and "inactive" statuses.
   - Each variant should display a different color (e.g., green for active, red for inactive).
   - Render the appropriate badge variant based on the user's status in the table.

## Guidelines

- Ensure the UI provides good user feedback for all actions.
- You may use any additional libraries or components you deem necessary (e.g., form libraries, UI component libraries).
- Existing components are from the shadcn library. Feel free to use additional components from this library or others as needed.


# Submission Guidelines

## How to Submit Your Work

1. Fork the repository.
2. Create a new branch with your name (e.g., `john-doe-solution`).
3. Implement your solution on this branch.
4. Once you're satisfied with your work, create a Pull Request (PR) to the `main` branch of the original repository.
5. In your PR description, please include:
   - A brief overview of your implementation
   - Any assumptions you made
   - Any additional libraries or tools you used and why
   - Any challenges you faced and how you overcame them

## Time Limit

We've designed this task to be challenging yet manageable within a reasonable timeframe:

- You have 3 days from the time you receive these instructions to submit your PR.
- We estimate that the task should take approximately 8-10 hours of focused work to complete.
- The extra day is provided to account for any unexpected issues or to allow you to review and refine your work.

## Important Notes

- If you encounter any significant obstacles that might affect your submission time, please reach out to us promptly.
- Focus on demonstrating your problem-solving skills, code quality, and attention to detail.
- If anything in the instructions is unclear, don't hesitate to ask for clarification.

We look forward to reviewing your solution. Good luck with your implementation!