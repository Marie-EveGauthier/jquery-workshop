function iss_position(){
    jQuery.getJSON('http://api.open-notify.org/iss-now.json?callback=?').then(
        function(res) {
            console.log(res);
            
            var latitude = res.iss_position.latitude;
            var longitude = res.iss_position.longitude;
    
            $('#iss-position').attr('src','https://maps.googleapis.com/maps/api/staticmap?center=' + latitude +',' + longitude + '&zoom=8&size=400x400&markers=' + latitude +',' + longitude + '&key=AIzaSyB71Ngy5RwV5K_AYfXuWqsbUutbb7B6E_I');
        }
    );
}


setInterval(iss_position, 4000);