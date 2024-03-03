// Function to add a new user to the local storage
export const addUser = (userData) => {
    // Retrieve existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Add the new user to the array
    existingUsers.push(userData);
    
    // Update the users array in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
};

// Function to authenticate user login
export const loginUser = (formData) => {
    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the email and password match with any user in the existing users
    const { email, password } = formData;
    const user = existingUsers.find(user => user.email === email && user.password === password);
    
    return user; // Return the authenticated user or null if login fails
};
