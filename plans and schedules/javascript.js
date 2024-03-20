document.getElementById('startButton').addEventListener('click', function() {
    // Add functionality to handle when the user clicks the "Get Started" button
    // This could include redirecting to another page or displaying a form for input
    alert('Let\'s get started!');
});
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve user preferences from the form
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    const dates = document.getElementById('dates').value;
    
    // Perform processing based on user preferences (e.g., generate itinerary)
    // This can involve making API calls, calculating routes, etc.
    // For demonstration purposes, let's just display the user's preferences
    alert(`Destination: ${destination}\nBudget: $${budget}\nTravel Dates: ${dates}`);
});
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve user preferences from the form
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    const dates = document.getElementById('dates').value;
    
    // Perform processing based on user preferences (e.g., generate itinerary)
    // For demonstration purposes, let's just display the user's preferences
    alert(`Destination: ${destination}\nBudget: $${budget}\nTravel Dates: ${dates}`);
    
    // Redirect the user to the ItineraryDetails page
    window.location.href = 'ItineraryDetails.html';
});
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve user preferences from the form
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    const dates = document.getElementById('dates').value;
    
    // Perform processing based on user preferences (e.g., generate itinerary)
    // For demonstration purposes, let's just display the user's preferences
    alert(`Destination: ${destination}\nBudget: $${budget}\nTravel Dates: ${dates}`);
    
    // Redirect the user to the ItineraryDetails page
    window.location.href = 'generate plans.html';
});
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve user preferences from the form
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    const dates = document.getElementById('dates').value;
    
    // Perform processing based on user preferences (e.g., generate itinerary)
    // For demonstration purposes, let's just display the user's preferences
    alert(`Destination: ${destination}\nBudget: $${budget}\nTravel Dates: ${dates}`);
    
    // Redirect the user to the ItineraryDetails page
    window.location.href = 'ItineraryDetails.html';
});

document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve user preferences from the form
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    const dates = document.getElementById('dates').value;
    
    // Perform processing based on user preferences (e.g., generate itinerary)
    // For demonstration purposes, let's just display the user's preferences
    alert(`Destination: ${destination}\nBudget: $${budget}\nTravel Dates: ${dates}`);
    
    // Redirect the user to the ItineraryDetails page
    window.location.href = 'ItineraryDetails.html';
});
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve user preferences from the form
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    const dates = document.getElementById('dates').value;
    
    // Perform processing based on user preferences (e.g., generate itinerary)
    // For demonstration purposes, let's just display the user's preferences
    alert(`Destination: ${destination}\nBudget: $${budget}\nTravel Dates: ${dates}`);
    
    // Redirect the user to the ItineraryDetails page
    window.location.href = 'generate plans.html';
});
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "Setbook1002" || password === "Shadrack@22690#") {
    //Redirect to index.HTML after successiful login
    window.location.href='index.HTML';
    }else {
            // Handle invalid login
            alert('invalid username or password. please try again!');
        }
    }
    //Handle invalid login
    alert('username and password are required');
    return true;
    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "Setbook1002" || password === "Shadrack@22690#") {
        //Redirect to index.HTML after successiful login
        window.location.href='index.HTML';
        }else {
                // Handle invalid login
                alert('invalid username or password. please try again!');
            }
        }
        //Handle invalid login
        alert('username and password are required');
        return true;