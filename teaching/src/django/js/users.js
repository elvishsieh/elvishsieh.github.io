document.addEventListener("DOMContentLoaded", function() {
 
    document.getElementById('saveUserButton').addEventListener('click', addUser);

    // Add event listeners to update buttons
    document.getElementById('userTableBody').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('updateButton')) {
            const userId = event.target.getAttribute('data-id');
            openUpdateModal(userId);
        }
    });
    
    // Add event listeners to delete buttons
    
    document.getElementById('userTableBody').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('deleteButton')) {
            const userId = event.target.getAttribute('data-id');
            confirmDelete(userId);
        }
    });
    
        /*fetch data function */
    async function fetchData() {
        document.getElementById('errorLabel').style.display = 'none';
        try {
            const response = await fetch('http://localhost:8000/Users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            //data contain users
            const data = await response.json();

            console.log("data")
            console.log(data);
                                
            // Clear the existing rows in the table
            const tableBody = document.getElementById('userTableBody');
            tableBody.innerHTML = '';

            // Populate the table with fetched data
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm updateButton" data-id="${user.id}">更新</button>
                        <button type="button" class="btn btn-danger btn-sm deleteButton" data-id="${user.id}">刪除</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });                   
            
        } 
        catch (error) {
            console.error('Failed to fetch users:', error);

            // Display error message on the page
            document.getElementById('errorLabel').innerText = 'Failed to load users. Please try again later.';
            document.getElementById('errorLabel').style.display = 'block';                   

        }
    }   
    
    async function addUser() {
        // Get the input values
        
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const userId = document.getElementById('saveUserButton').getAttribute('data-id');
        
        // Construct the user object
        // here we can check first if info are not null before sending data ( you can add that )

        const newUser = { name: name, email: email };
        let url = 'http://localhost:8000/Users';
        let method = 'POST';

        if (userId) {
            url += `/${userId}`;
            method = 'PUT';
        }
    
        try {
            // Send the new user data to the server          
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            
            if (!(response.ok)) {
                throw new Error('Failed to save user .');
            }
            
            // If successful, close the modal
            $('#userModal').modal('hide');
    
            // Clear the form fields
            document.getElementById('userForm').reset();
    
            // Refresh the user list
            fetchData();
    
        } catch (error) {
            console.error('Error adding user:', error);
    
            // Display the error message in the modal
            document.getElementById('errorMessage').innerText = error;
            document.getElementById('errorMessage').style.display = 'block';
        }finally {
            // Remove the user ID from the button so it doesn't affect future adds
            document.getElementById('saveUserButton').removeAttribute('data-id');
        }
    }

    async function openUpdateModal(userId) {
        try {
            // Fetch the selected user's data from the server
            const response = await fetch(`http://localhost:8000/Users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data.');
            }
            const user = await response.json();

            // Fill the modal form with the existing user data
            document.getElementById('userName').value = user.name;
            document.getElementById('userEmail').value = user.email;
            
    
            // Store the user ID in the modal (for later use when updating)
            document.getElementById('saveUserButton').setAttribute('data-id', user.id);
    
            // Update the modal title to indicate updating
            document.getElementById('userModalLabel').innerText = 'Update User';
    
            // Display the modal
            $('#userModal').modal('show');
    
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Display an error message if something goes wrong
            document.getElementById('errorLabel').innerText = 'Failed to load user data. Please try again.';
            document.getElementById('errorLabel').style.display = 'block';
        }
    }
    
    function confirmDelete(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            deleteUser(userId);
        }
    }

    async function deleteUser(userId) {
        try {
            const response = await fetch(`http://localhost:8000/Users/${userId}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete user.');
            }
    
            // Refresh the user table after successful deletion
            fetchData();
    
        } catch (error) {
            console.error('Error deleting user:', error);
            document.getElementById('errorLabel').innerText = 'Failed to delete user. Please try again.';
            document.getElementById('errorLabel').style.display = 'block';
            
            setTimeout(() => {
                document.getElementById('errorLabel').style.display = 'none';
            }, 3000);
        }
    }
                
    fetchData()     
})