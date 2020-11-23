$(document).ready(function () {
  const m = moment()
  console.log(m);
  dateDisplay = m.format("dddd" + ", " + "MMMM" + " " + "Do" + " " + "YYYY");
  $("#currentDay").text(dateDisplay)
  var nextDay = moment().add(1, 'day').format('L')
  $("#dateDayOne").html(nextDay)
  var nextDay2 = moment().add(2, 'day').format('L')
  $("#dateDayTwo").html(nextDay2)
  var nextDay3 = moment().add(3, 'day').format('L')
  $("#dateDayThree").html(nextDay3)
  var nextDay4 = moment().add(4, 'day').format('L')
  $("#dateDayFour").html(nextDay4)
  var nextDay5 = moment().add(5, 'day').format('L')
  $("#dateDayFive").html(nextDay5)
  
  //set variable for weather icons//
  var clear = "https://openweathermap.org/img/wn/01d@2x.png"
  var clouds = "https://openweathermap.org/img/wn/02d@2x.png"
  var rain = "https://openweathermap.org/img/wn/10d@2x.png"
  var snow = "https://openweathermap.org/img/wn/13d@2x.png"

  //pull city history from local storage//
  function getStorage() {
    var values = []
    keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }
    for (let i = 0; i < values.length; i++) {
      $("#cityList").append(`<button type="submit" class="col-md-12 btn-success preCity" id="cityHistory" data-city="${values[i]}">` + values[i] + "</button>");
    }
    return values;
  }
  getStorage();

//event listener for search buttons//
  $(".preCity").on("click", function (event) {
    event.preventDefault()
    $(".form-control").val($(this).attr("data-city"))
    $("#searchBtn").click()
  })

  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var citySearch = $(".form-control").val();
  
//ajax call for today's weather//
    var todayWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=0aee5e8e45d5880c3c161511ef0363e8"
    $.ajax({
      url: todayWeather,
      method: "GET"
    }).then(function (response) {
      var icon = clear
      switch (response.weather[0].main) {
        case "Clear":
          icon = clear
          break;
        case "Clouds":
          icon = clouds
          break;
        case "Rain":
          icon = rain
          break;
        case "Snow":
          icon = snow
          break;
      }
      var tempF = ((response.main.temp - 273.15) * 1.8 + 32).toFixed(1);
      $(".cityName").html("<h2>" + response.name + "</h2>")
      $(".tempF").html("<h3>" + "temp:  " + tempF + "    F°" + "</h3>")
      $(".wind").html("<p>" + "wind speed:  " + response.wind.speed + "  MPH" + "</p>")
      $(".humidity").html("<p>" + "humidity:  " + response.main.humidity + "%" + "</p>")
      $(".description").html("<p>" + response.weather[0].description + "</p>")
      $("#icon").empty()
      $("#icon").append(`<img src="${icon}"></img>`)
    });
//ajax call for Five Day Forecast//
    var weatherFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&APPID=0aee5e8e45d5880c3c161511ef0363e8"
    $.ajax({
      url: weatherFiveDay,
      method: "GET"
    }).then(function (response) {
      var humidFive=[];
      var tempFive=[];
      var iconFive=[];
      //input icons and data into each day for Five Day Forecast//
      for (let i=0; i < response.list.length; i+=8) {
        humidFive.push(response.list[i].main.humidity);
        tempFive.push(response.list[i].main.temp);
        iconFive.push(response.list[i].weather[0].main)
        }
  $("#infoDayOne").html("<p>" + "humidity:  " + humidFive[0]+ "%" + "</p>");
  $("#infoDayTwo").html("<p>" + "humidity:  " + humidFive[1] + "%" + "</p>");
  $("#infoDayThree").html("<p>" + "humidity:  " + humidFive[2] + "%" + "</p>");
  $("#infoDayFour").html("<p>" + "humidity:  " + humidFive[3] + "%" + "</p>");
  $("#infoDayFive").html("<p>" + "humidity:  " + humidFive[4] + "%" + "</p>");
  $("#infoDayOne").prepend("<p>" + "temp:  " + tempFive[0]+ "  F°" + "</p>");
  $("#infoDayTwo").prepend("<p>" + "temp:  " + tempFive[1] + "  F°" + "</p>");
  $("#infoDayThree").prepend("<p>" + "temp:  " + tempFive[2] + "  F°" + "</p>");
  $("#infoDayFour").prepend("<p>" + "temp:  " + tempFive[3] + "  F°" + "</p>");
  $("#infoDayFive").prepend("<p>" + "temp:  " + tempFive[4] + "  F°" + "</p>");
         
       var iconD1= clear;
        switch (iconFive[0]) {
          case "Clear":
            iconD1 = clear
            break;
          case "Clouds":
            iconD1 = clouds
            break;
          case "Rain":
            iconD1 = rain
            break;
          case "Snow":
            iconD1 = snow
            break;
        }
            $("#infoDayOne").prepend(`<img src="${iconD1}"></img>`);

            var iconD2= clear;
            switch (iconFive[1]) {
              case "Clear":
                iconD2 = clear
                break;
              case "Clouds":
                iconD2 = clouds
                break;
              case "Rain":
                iconD2 = rain
                break;
              case "Snow":
                iconD2 = snow
                break;
            }
            $("#infoDayTwo").prepend(`<img src="${iconD2}"></img>`);

            var iconD3= clear;
            switch (iconFive[2]) {
              case "Clear":
                iconD3 = clear
                break;
              case "Clouds":
                iconD3 = clouds
                break;
              case "Rain":
                iconD3 = rain
                break;
              case "Snow":
                iconD3 = snow
                break;
            }
            $("#infoDayThree").prepend(`<img src="${iconD3}"></img>`);

            var iconD4= clear;
            switch (iconFive[3]) {
              case "Clear":
                iconD4 = clear
                break;
              case "Clouds":
                iconD4 = clouds
                break;
              case "Rain":
                iconD4 = rain
                break;
              case "Snow":
                iconD4 = snow
                break;
            }
            $("#infoDayFour").prepend(`<img src="${iconD4}"></img>`);

            var iconD5= clear;
            switch (iconFive[4]) {
              case "Clear":
                iconD5 = clear
                break;
              case "Clouds":
                iconD5 = clouds
                break;
              case "Rain":
                iconD5 = rain
                break;
              case "Snow":
                iconD5 = snow
                break;
            }
            $("#infoDayFive").prepend(`<img src="${iconD5}"></img>`);

   //ajax call for UV index// 
      var lat = response.city.coord.lat;
      var lon = response.city.coord.lon;
      var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=0aee5e8e45d5880c3c161511ef0363e8"
      $.ajax({
        url: uvUrl,
        method: "GET"
      }).then(function (response) {
        //  console.log(response);
        $(".uv").html(`<p id="uvBackground">` + `UV Index:  ` + response.value + "</p>");
        if (response.value <= 2) {
          $("#uvBackground").addClass("low")
        } else if (response.value <= 5) {
          $("#uvBackground").addClass("med")
        } else if (response.value <= 7) {
          $("#uvBackground").addClass("high")
        } else {
          $("#uvBackground").addClass("veryhigh")
        };
      });
//put a new city search into local storage//
      localStorage.setItem(citySearch, citySearch);

    })
  })
});
