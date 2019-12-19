
/* $(document).ready(function(){

    var appID = "8f02ab235e3ff57329f8072d90de636e";

    $(".query_btn").click(function(){
        var query_param = $(".query_input").val();

        var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + ",US&units=imperial&APPID=" + appID;
        var apiQuery="http://api.openweathermap.org/data/2.5/uvi?appid=8f02ab235e3ff57329f8072d90de636e";
        var lonlat = $("#locationXY").split(',');
        var longitude = lonlat[0];
        var latitude = lonlat[1];
        var apiFullQuery = apiQuery + "&lat=" + latitude + "&lon=" + longitude;
        
        var cityName = $("<li>" + query_param + "</li>");
        $(".cloned").append(cityName);
        
        $.getJSON(apiFullQuery, function(uv_data){
            $("#uv_index").html(uv_data.value);
        });
        $.getJSON(weather, function(weatherPoint){
            $("#city").html(weatherPoint.name);
            $("#description").html(weatherPoint.weather[0].description);
    
            
    
            $("#temperature").text(weatherPoint.main.temp);
            $("#humidity").html(weatherPoint.main.humidity);
            $("#wind_speed").html(weatherPoint.wind.speed);
            $("#locationXY").html(weatherPoint.coord.lon + "," + weatherPoint.coord.lat);
            
    
    
    
        });

    });
   
    
    
});
*/

$(document).ready(function(){
    var appID = "8f02ab235e3ff57329f8072d90de636e";
    var apiQuery = "http://api.openweathermap.org/data/2.5/uvi?appid=8f02ab235e3ff57329f8072d90de636e";
   /* var ultiArray= []; */

   
    
    
    /*
    var ultiArray = [];
    var O1 = ultiArray[0];
    var o2 = ultiArray[1];
    var o3 = ultiArray[2];
    var ultiulti = $.extend(o1, o2, o3); 
    $("#uv_index").html(ultiulti.value); */

    $("#submitWeather").click(function(){
        var cityName = $("#city").val();
        var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",US&units=imperial&APPID=" + appID;
        
        
        

    /* var apiFullQuery = apiQuery + "&lat=" + latitude + "&lon=" + longitude;
       
        var lonlat = $("#lon_lat").val();

     
        var splitLonLat = lonlat.split(',');
        var longitude = splitLonLat[0];
        var latitude = splitLonLat[1]; */

        var appendHere = $("#searchedCities");
        var pinCity = $("<li>" + cityName + "</li>");
        appendHere.append(pinCity);
        
        
        
        if ( cityName != ''){

          $.ajax({

                url: weather,
                method: "GET",
                dataType: "jsonp"
            }).then(function(weatherPoint){
                    console.log(weatherPoint);
                   /* var obj1 = weatherPoint;
                    ultiArray.push(obj1); */
                    $("#citycity").html(cityName);
            $("#description_weather").html(weatherPoint.weather[0].description);
    
            
    
            $("#temperature").text(weatherPoint.main.temp);
            $("#humidity").html(weatherPoint.main.humidity);
            $("#wind_speed").html(weatherPoint.wind.speed);
            
            $("#lon_lat").html(weatherPoint.coord['lon'] + ',' + weatherPoint.coord['lat']);
                
            $("#city").val('');
            /*
            console.log($("#lon_lat").text());
            var textCoord = $("#lon_lat").text().split(',');
            var lon = textCoord[0];
            var lat = textCoord[1];
            ultiArray.push(lon);
            ultiArray.push(lat);      */

            
                /*
            var longitude = weatherPoint.coord['lon'];
            var latitude = weatherPoint.coord['lat'];

            var holdings = searchUV(longitude, latitude);    */
             /*var apiFullQuery = apiQuery + "&lat=" + weatherPoint.coord['lat'] + "&lon=" + weatherPoint.coord['lon']; */
              
            /*var lonlat = $("#lon_lat").val();
    
         
            var splitLonLat = lonlat.split(',');
            var longitude = splitLonLat[0];
            var latitude = splitLonLat[1]; */

           
        /*
        
            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/uvi?appid=8f02ab235e3ff57329f8072d90de636e&lat=37.94&lon=-122.35",
                method: "GET",
                dataType: "jsonp"
            }).then(function(uv_data){
                var obj2 = uv_data;
                ultiArray.push(obj2);
                   
                }); 

                $.ajax({

                    url: "http://api.openweathermap.org/data/2.5/forecast?id=5387428&units=imperial&APPID=8f02ab235e3ff57329f8072d90de636e",
                    method: "GET",
                    dataType: "jsonp"
                }).then(function(fd_forecast){
                    var obj3 = fd_forecast;
                       ultiArray.push(obj3);
                    });                                        */
                    var apiFullQuery = apiQuery + "&lat=" + weatherPoint.coord['lat'] + "&lon=" + weatherPoint.coord['lon'];
                    var fullForecastQuery = "http://api.openweathermap.org/data/2.5/forecast?id="+ weatherPoint.id +"&units=imperial&APPID=" + appID;
                    /* best Key for Richmond 5387428 */
                    
                    
                    /*
                    var lonlat = $("#lon_lat").val();
                    var splitLonLat = lonlat.split(',');
                    var longitude = splitLonLat[0];
                    // var latitude = splitLonLat[1]; 
                    var uv_query_call=apiQuery + "&lat=" + weatherPoint.coord['lat'] + "&lon=" + weatherPoint.coord['lon']; */
                    $.ajax({url: apiFullQuery, method: "GET"}).then(function(uv_data){
                        console.log(uv_data);
                        $("#uv_index").html(uv_data.value);
                        }); 
                    $.ajax({url: fullForecastQuery, method: "GET"}).then(function(forecastRiches){
                            console.log(forecastRiches);
                            /* var degreeSymbol = $("<span>" + &#8457; + "</span>"); */
                            $("#sugarFat").html(forecastRiches.list[7].main.temp + " degree fahrenheit - (humidity) " + forecastRiches.list[7].main.humidity);
				
                            

                            $("#sugarFat1").html(forecastRiches.list[15].main.temp + " degree fahrenheit - (humidity) " + forecastRiches.list[15].main.humidity);


                            $("#sugarFat2").html(forecastRiches.list[23].main.temp + " degree fahrenheit - (humidity) " + forecastRiches.list[23].main.humidity);
                            

                            $("#sugarFat3").html(forecastRiches.list[31].main.temp + " degree fahrenheit - (humidity) " + forecastRiches.list[31].main.humidity);
                            

                            $("#sugarFat4").html(forecastRiches.list[39].main.temp + " degree fahrenheit - (humidity) " + forecastRiches.list[39].main.humidity);
                            

                            }); 
        
        
        
        }); // end to first ajax then

                

            


            




        } else {
            $("#error").html("field cannot be empty");
        };


       /* UVCall();  attempt at getting uv-data*/
    }); // end the click button search
    
/*
function searchUV(longitude, latitude){
    var fullQuery = apiQuery + "&lat=" + latitude+ "&lon=" + longitude;
    $.ajax({

        url: fullQuery,
        method: "GET",
        dataType: "jsonp"
    }).then(function(uv_data){
        $("#uv_index").html(uv_data.value);
           
        });
}; */
/* attempt to get the uv-data
var UVCall = function() {
    var apiFullQuery = apiQuery + "&lat=" + parseFloat(ultiArray[1]) + "&lon=" + parseFloat(ultiArray[0]);
    console.log(apiFullQuery);
    $.get({
        url: apiFullQuery,
        success: function(fullUlti){
            $("#uv_index").html(fullUlti.value);
        },
        error: function() {
            console.log("error");
        }
    });
    };
    */

   






}); // end document ready