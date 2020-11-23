# Weather Dashboard

## Description/Purpose

Weather Dashboard is a go-to resource for big city travelers. It is an invaluable tool for anyone needing to understand today's weather along with the five day forecast.  It easily stores the user's travel history for future use.


## Technologies Used

Languages used: 
- HTML
- CSS
- JAVASCRIPT / JQUERY

The site uses the following ajax calls from the open weather API:
- "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=0aee5e8e45d5880c3c161511ef0363e8"

- "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=0aee5e8e45d5880c3c161511ef0363e8"

- "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&APPID=0aee5e8e45d5880c3c161511ef0363e8"


The site also pulls from the following third-party APIs:
- JQuery
- Bootstrap with Popper.js
- Moment.js

## Features

Weather Dashboard allows the user to type in a city of their choice so that they can view current weather information.  The input will be saved locally for the user so that they can easily click on cities that have been searched in the past

The search results for today's weather will appear in the center of the page, and will include the following information: city name, today's date, current temperature, wind speed, humidity percentage, UV index, and weather description and icon.   A sidebar of will include the user's search history with clickable links.  The lower portion of the page will provide information on the five day forecast.  Each day of the five day forecast will include a descriptive icon, the temperature and humity forecast.


## Functionality

For the user, the site is easy to navigate. The user can simply input a city name in order to get an output of current weather information.

## File Structure

The site is built with  the following pages:

-  index.html
-  style.css
-  script.js

## Screenshot
<img width="1137" alt="Screen Shot 2020-11-23 at 2 23 03 PM 2" src="https://user-images.githubusercontent.com/72819785/100022194-98b14c80-2d97-11eb-9fd9-9d333f1d801d.png">
