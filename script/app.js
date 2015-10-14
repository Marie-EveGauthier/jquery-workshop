jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
    function(res) {
        var location = res.results[0].geometry.location;
        var latitude = location.lat;
        var longitude = location.lng;
        $('h1').after('<div class="iss-position">The ISS is at latitude: ' + latitude + ', and at longitude: ' + longitude + '</div>');
    }
);