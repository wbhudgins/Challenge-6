$(document).ready(function() {

    $("#display").click(function() {
        var userInput = $('#input').val();
        $( "#results" )
        .append( `<a href="#" id="selected" class="dropdown-item">${userInput}</a>` );
        getLocation(userInput)
      });

      $(".dropdown-item").click(function(event) {
        let userInput = $(event.target).text()
        getLocation(userInput)
      })

      function getLocation(userInput) {
        $.ajax({
            url: `https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=52d94025325c774103ea0abcd01e9658`,
            success: function(data){ 
                console.log(data)
                console.log("User Input: " + userInput)
                for (i = 0; i < data.length; i++) {
                    let element  = data[i]
                    let lat = element.lat
                    let lon = element.lon
                    displayWeather(lat, lon, userInput)
                }
            },
            error: function(){
                alert("There was an error.");
            }
        });
      }

      function displayWeather(lat, lon, userInput) {
        $.ajax({
            url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=52d94025325c774103ea0abcd01e9658`,
            success: function(data){ 
                console.log(data)
                $("#current-weather-dash").removeClass("is-hidden")
                $("#weather-container").removeClass("is-invisible")
                // current Day
                var currentDay = moment.unix(data.current.dt).format("MM/DD/YYYY");
                let currentTemp = data.current.temp
                let currentWind = data.current.wind_speed
                let currentHumidity = data.current.humidity
                let currentUvi = data.current.uvi

                if(currentUvi >= 0 && currentUvi <= 2) {
                    $('#uvi').addClass("has-background-success")
                } 
                
                if (currentUvi >= 3 && currentUvi <= 7) {
                    $('#uvi').addClass("has-background-warning")
                } 
                
                if (currentUvi >= 8) {
                    $('#uvi').addClass("has-background-danger")
                }
                console.log("Current Day: " + currentDay)

                $("#current-date").text(userInput.toUpperCase() + ": " +  currentDay)
                $("#current-temp").text("Temp: " + currentTemp + "\u00B0" + "F")
                $("#current-wind").text("Wind: " + currentWind + " MPH")
                $("#current-hum").text("Humidity: " +  currentHumidity + "%")
                $("#uvi").text(currentUvi)

                //Day 1
                let day1 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
                let iconCode1 = data.daily[1].weather[0].icon
                var iconUrl1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png"
                let temp1 = data.daily[1].temp.max
                let wind1 = data.daily[1].wind_speed
                let humidity1 = data.daily[1].humidity
                
                $("#day1").text(day1)
                $('#icon1').attr('src', iconUrl1)
                $("#temp1").text("Temp: " + temp1 + "\u00B0" + "F")
                $("#wind1").text("Wind: " + wind1 + " MPH")
                $("#hum1").text("Humidity: " +  humidity1 + "%")

                //Day2
                let day2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
                let iconCode2 = data.daily[2].weather[0].icon
                var iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png"
                let temp2 = data.daily[2].temp.max
                let wind2 = data.daily[2].wind_speed
                let humidity2 = data.daily[2].humidity
                
                $("#day2").text(day2)
                $('#icon2').attr('src', iconUrl2)
                $("#temp2").text("Temp: " + temp2 + "\u00B0" + "F")
                $("#wind2").text("Wind: " + wind2 + " MPH")
                $("#hum2").text("Humidity: " +  humidity2 + "%")

                //Day3
                let day3 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
                let iconCode3 = data.daily[3].weather[0].icon
                var iconUrl3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png"
                let temp3 = data.daily[3].temp.max
                let wind3 = data.daily[3].wind_speed
                let humidity3 = data.daily[3].humidity
                
                $("#day3").text(day3)
                $('#icon3').attr('src', iconUrl3)
                $("#temp3").text("Temp: " + temp3 + "\u00B0" + "F")
                $("#wind3").text("Wind: " + wind3 + " MPH")
                $("#hum3").text("Humidity: " +  humidity3 + "%")

                //Day4
                let day4 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
                let iconCode4 = data.daily[4].weather[0].icon
                var iconUrl4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png"
                let temp4 = data.daily[4].temp.max
                let wind4 = data.daily[4].wind_speed
                let humidity4 = data.daily[4].humidity
                
                $("#day4").text(day4)
                $('#icon4').attr('src', iconUrl4)
                $("#temp4").text("Temp: " + temp4 + "\u00B0" + "F")
                $("#wind4").text("Wind: " + wind4 + " MPH")
                $("#hum4").text("Humidity: " +  humidity4 + "%")

                //Day5
                let day5 = moment.unix(data.daily[5].dt).format("MM/DD/YYYY");
                let iconCode5 = data.daily[5].weather[0].icon
                var iconUrl5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png"
                let temp5 = data.daily[5].temp.max
                let wind5 = data.daily[5].wind_speed
                let humidity5 = data.daily[5].humidity
                
                $("#day5").text(day5)
                $('#icon5').attr('src', iconUrl5)
                $("#temp5").text("Temp: " + temp5 + "\u00B0" + "F")
                $("#wind5").text("Wind: " + wind5 + " MPH")
                $("#hum5").text("Humidity: " +  humidity5 + "%")

            },
            error: function(){
                alert("There was an error.");
            }
        });
    }


  });