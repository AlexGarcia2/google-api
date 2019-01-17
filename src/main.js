const loadGoogleMapsApi = require('load-google-maps-api');
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let options = {key: process.env.API_KEY };
  let map;
  console.log(options);
  loadGoogleMapsApi(options).then(function (googleMaps) {
  map = new googleMaps.Map(document.querySelector('#map'), {
    center: {
      lat: 45.520840,
      lng: -122.677366
    },
    zoom: 12
  });
  console.log(map)
  console.log(loadGoogleMapsApi);
  const epicodus = { lat: 45.520840, lng: -122.677366 };
  const marker = new googleMaps.Marker({ position: epicodus, map: map });

  }).catch(function (error) {
  console.error(error)
 })
})
