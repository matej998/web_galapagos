function location_map() {
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          center: {lat: 45.8011264, lng: 16.0026024},
          zoom: 11
        });

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
          placeId: 'ChIJz44ggJnWZUcRK5YM9nVQslQ'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><h6>' + place.name + '</h3>' +
                place.formatted_address + '<br><br>' +
                '<a href = "https://www.google.hr/maps/place/Galapagos/@45.7867821,15.9476388,17z/data=!3m1!4b1!4m5!3m4!1s0x4765d69980208ecf:0x54b25075f60c962b!8m2!3d45.7867784!4d15.9498328?hl=hr" target="_blank">Open in Google Maps</a>' + '</div>');
              infowindow.open(map, this);
            });
          }
        });
      }
