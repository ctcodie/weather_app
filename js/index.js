$( document ).ready(function() {
		navigator.geolocation.getCurrentPosition(function(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			
			
			
			$.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long, function(data) {

				
				var currentTemp = data.main.temp;
				var minTemp = data.main.temp_min;
				var maxTemp = data.main.temp_max;
				var conditions = data.weather[0].main;
				var description = data.weather[0].description;
				var icon = data.weather[0].icon;
				var wind = data.wind.speed;
				var degC = "&deg;c";
				var degF = "&deg;F";
				var units = degC;

				$("#conditions").html(conditions);
				$("#temperature").html("Temperature: " + currentTemp + units);
				$("#description").html(description);
				$("#tempRange").html("Low of " + minTemp + units + " and High of " + maxTemp + units);
				$("#wind").html("Wind Speed of " + wind + " mph");
				$("#icon").attr("src",icon);
	
	$("#switchUnits").click(function(){
		if(units==degC){
			var newTemp = (currentTemp * 1.8) + 32;
			var newMinTemp = (minTemp * 1.8) + 32;
			var newMaxTemp = (maxTemp * 1.8) + 32;
			units = degF;
			$("#temperature").html("Temperature: " + newTemp + units);
			$("#tempRange").html("Low of " + newMinTemp + units + " and High of " + newMaxTemp + units);
		}else if(units==degF){
			var newTemp = currentTemp;
			var newMinTemp = minTemp;
			var newMaxTemp = maxTemp;
			units = degC;
			$("#temperature").html("Temperature: " + newTemp + units);
			$("#tempRange").html("Low of " + newMinTemp + units + " and High of " + newMaxTemp + units);
		}
	});
});
});
});