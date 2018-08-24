function myMap() {
    var mapCanvas = document.getElementById("GoogleMapFooter");
    var myCenter = new google.maps.LatLng(6.557839, 3.392191);
    var mapOptions = {
        center: myCenter,
        zoom: 7,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function () {
        var pos = map.getZoom();
        map.setZoom(10);
        map.setCenter(marker.getPosition());
        window.setTimeout(function () { map.setZoom(pos); }, 3000);
    });
}
