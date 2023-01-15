var temp = 20;
var name = "Joseph";
var uri = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vaughan?unitGroup=us&key=J5ZRKDWQHUARH5WR6RHMTZMLN&contentType=json";
var xhr;

function requestXMLHttpRequest() {
    xhr = new XMLHttpRequest();
    xhr.responseType = "json"; //1
    xhr.open('GET', uri);        
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) { //2
            console.log("XMLHttpRequest error: "+xhr.status);
            return;
        }
        processWeatherData(xhr.response); //3
    };
    xhr.onerror = function() { //4
        console.log("XMLHttpRequest Request failed");
    };
}

function processWeatherData(response) {
  
    var current_time = response.currentConditions.datetime;
    var current_conditions = response.currentConditions.conditions;
    var current_humidity = response.currentConditions.humidity;
    var current_temperature = response.currentConditions.temp;

    console.log("Location: "+response.resolvedAddress);
    console.log("Current Date/Time: "+current_time);
    console.log("Current Conditions: "+current_conditions);
    console.log("Humidity: "+current_humidity);
    console.log("Temperature: "+current_temperature);

    temp = current_temperature;
  }