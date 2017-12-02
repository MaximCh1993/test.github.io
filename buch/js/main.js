function initMap() {
	var uluru = {lat: 50.445279, lng: 30.554899 };
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 15,
	  center: uluru,
	  disableDefaultUI: true
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}
