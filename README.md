# 🌦️ Live Weather App

Welcome to the Live Weather App! This is a sleek, modern, and responsive web application built with React.js that provides real-time weather data for any city in the world. It features a dynamic and immersive user interface where the visuals change according to the current weather conditions.

### ✨ [**View Live Demo**](https://liveweather.page)

---

## 🚀 Features

This application comes packed with a range of features designed to provide a seamless and informative user experience:

* **Real-time Weather Data:** Fetches live weather information using the reliable OpenWeatherMap API.
* **Geolocation Support:** Automatically detects the user's location upon granting permission to provide instant local weather updates.
* **Default Location:** If location access is denied, the app gracefully defaults to showing the weather for a preset location (Delhi, IN).
* **Global City Search:** An intuitive search bar allows users to find weather information for any city across the globe.
* **Dynamic UI & Animations:** The user interface isn't static! The background animations dynamically change to match the current weather conditions—see rain for rainy days, clouds for cloudy skies, and more.
* **Detailed Weather Insights:** Provides comprehensive data including:
    * Temperature ($T$ in $°C$)
    * Weather conditions (e.g., Clouds, Rain, Clear Sky)
    * Humidity ($H$ in $\%$)
    * Visibility ($V$ in meters)
    * Wind Speed ($W$ in $km/h$)
* **Live Date & Time:** Displays the current date and time for the user's location.
* **Responsive Design:** A clean and fully responsive layout that looks great on all devices, from mobile phones to desktop screens.

---

## 🛠️ Technology Stack

This project was brought to life using the following technologies:

* **Frontend:** [React.js](https://reactjs.org/)
* **API:** [OpenWeatherMap API](https://openweathermap.org/api)
* **Styling:** CSS3 (or specify your styling library, e.g., Styled Components, SASS)
* **Languages:** JavaScript (ES6+), HTML5

---

## 🌟 Show Your Support

If you like this project, please don't forget to give it a ⭐ **star** on GitHub! Your support is highly appreciated and motivates me to create more projects like this.

---

## 👤 Author

**Jidnyesh Chaudhari**

* **LinkedIn:** [Jidnyesh Chaudhari](https://www.linkedin.com/in/jidnyesh-chaudhari-2ba832211/)
* **GitHub:** [@jidnyesh23](https://github.com/jidnyesh23)

---

## 🙏 Acknowledgements

* A big thank you to [OpenWeatherMap](https://openweathermap.org/) for providing the free and powerful weather API.
* Hat tip to anyone whose code was used as inspiration.

---

## ⚙️ Local Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have Node.js and npm installed on your machine.

### Installation & Setup

1.  **Navigate into the project directory.**
    ```sh
    cd your-repo-name
    ```

2.  **Install the necessary NPM packages.**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the root of your project and add your API key.
    ```
    REACT_APP_API_KEY="ENTER YOUR API KEY HERE"
    ```

4.  **Start the development server.**
    ```sh
    npm start
    ```

The application will now be running on `http://localhost:3000`.
