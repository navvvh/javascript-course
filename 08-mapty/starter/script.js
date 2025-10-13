'use strict';

console.log('=== MAPTY: WORKOUT TRACKING APPLICATION ===');

/*
In this project, we'll build a complete workout tracking app featuring:
1. Object-Oriented Programming with classes and inheritance
2. Interactive maps using the Leaflet.js library
3. Geolocation API for automatic user positioning
4. Form handling and data validation
5. Local storage for data persistence
6. Modern JavaScript ES6+ features

This hour focuses on the OOP foundation - the classes that will power our app!
*/

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; //coordinates as a array of lat and long
    this.distance = distance; // store distace into kilometers
    this.duration = duration; // store duration in minute
  }

  // generate work out description
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    //generate description

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } $ {this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.1728, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadance) {
    super(coords, distance, duration);

    this.cadence = this.cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);

    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);

    return this.speed;
  }
}

// Create a running workout
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// Create a cycling workout
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

// Test inheritance - both have click method from Workout
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// Check if geolocation is supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Success callback - user granted permission
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`User location: ${latitude}, ${longitude}`);
    },
    function () {
      // Error callback - user denied permission or other error
      alert('Could not get your position');
    }
  );
}

console.log('=== TESTING GEOLOCATION API ===');

function getPosition() {
  if (navigator.geolocation) {
    console.log('🔍 Requesting user location...');
    navigator.geolocation.getCurrentPosition(
      loadMap,

      function (error) {
        console.error('Geolocation error:', error);

        let message = 'Could not get your position. ';

        switch (error.code) {
          case error.PERMISSION_DENIED:
            message +=
              'Location access was denied. Please enable location services and refresh the page.';
            break;
          case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            message += 'Location request timed out.';
            break;
          default:
            message += 'An unknown error occurred.';
            break;
        }

        alert(`📍 ${message}`);
        loadDefaultMap();
      },
      {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 600000,
      }
    );
  } else {
    alert('❌ Geolocation is not supported by this browser');
    loadDefaultMap();
  }
}







class App {
  #map;
  #mapZoomLevel = 13;
  #MapEvent;
  #workouts = [];

  constructor() {
    console.log('App starting');
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),

        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadMap(position) {
  const { latitude, longitude } = position.coords;
  console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);
  //create coordinate array
  const coords = [latitude, longitude];

  // initialize map anf center
  this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

  // add the open street map
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.#map);

  //add a marker to the users location
  L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();

  // dito daw!
  this.#map.on('click', function (mapEvent) {
    console.log('Map cloked', mapEvent);

    const { lat, lng } = mapEvent.latlng;
    console.log(`Map cliked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    //create themarker na blue

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        `Workout location<br>Lat: ${lat.toFixed(4)}, ${lng.toFixed(4)}}`
      )
      .openPopup();
  });

  console.log('Map loaded succesfully at user location');

  }

   _loadDefaultMap() {
  console.log('Loading defsult msp locstion around Manila');

  const defaultCoords = [14.6047326, 120.9944943];

  this.#map = L.map('map').setView(defaultCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.#map);

  this.#map.on('click', function (mapEvent) {
    console.log('Map cloked', mapEvent);

    const { lat, lng } = mapEvent.latlng;
    console.log(`Map cliked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    //create themarker na blue

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        `Workout location<br>Lat: ${lat.toFixed(4)}, ${lng.toFixed(4)}}`
      )
      .openPopup();
  });

  console.log('Default map loaded succesfully!');
}
}



