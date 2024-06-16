# Weather Application

This is a simple weather application built using React. It allows users to fetch and display weather information for multiple locations simultaneously. Additionally, it shows additional weather details such as temperature, humidity, wind speed, and weather description.

## Features

- Display weather information based on city name or geographical coordinates (latitude and longitude).
- Support for multiple locations with real-time weather updates.
- User-friendly interface with search functionality for adding new locations.
- Responsive design that works well on various devices (desktop, tablet, mobile).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installing

1. **Clone the repository:**

   git clone https://github.com/JayaramHarry/Kraftshala_Frontend-Intern_Jayaram.git
   cd kraftshala_frontend

Install dependencies:

    npm install


Set up API Key:

Obtain an API key from OpenWeatherMap.
Replace YOUR_API_KEY in Weather.js with your actual 
API key.


Running the Application
Start the development server:

npm start
Open the application:

Open http://localhost:3000 in your web browser.

Using the Application
Adding Locations:
Enter a city name or geographical coordinates (latitude, longitude) in the search bar and click "Search" to add a new location.
Removing Locations:
Each location displayed on the screen has a "Remove" button. Clicking this button will remove the location from the list.
Built With
React - JavaScript library for building user interfaces.
axios - Promise based HTTP client for the browser and node.js.