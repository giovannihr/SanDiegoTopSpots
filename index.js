//google map api(adding markers)
$(document).ready(function() {


    window.initMap = function() {

            var map = new google.maps.Map(document.getElementById('mapDiv'),

                {
                    zoom: 10,
                    center: { lat: 32.70648, lng: -117.16614 }
                });





            $.getJSON("topspots.json", function(result) {
                $(result).each(function(index, value) {
                    var mapLink = `https://www.google.com/maps?q=`;
                    mapLink += value.location[0] + ',' + value.location[1];
                    var tableResults = `<tr><td>${value.name}</td><td>${value.description}</td><td class="btn btn-default"><a href= "${mapLink}" target= "_blank">Location</a></td></tr>`;
                    $("tbody").append(tableResults);


                    var uluru = { lat: value.location[0], lng: value.location[1] };
                    var marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                    });


                    //------------------------------


                }); //end of each method


            }); //end of getJSON method



        } //end of initMap function



    //------------------------------

}); // end of ready function
