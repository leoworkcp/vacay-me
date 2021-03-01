const locations = [
  {
    name: "East 6th Street & Avenue A, Manhattan, New York, NY",
    location: {
      lat: 40.72547,
      lng: -73.98395,
    },
  },
  {
    name: "Ocean Front Resort Private decks Pool & Beach",
    location: {
      lat: 41.01773,
      lng: -71.98765,
    },
  },
  {
    name: "Madison Av/E 70 St, New York, NY 10021",
    location: {
      lat: 42.08879,
      lng: -76.79791,
    },
  },
  {
    name: "33 W 75th St, New York, NY 10023",
    location: {
      lat: 40.77904,
      lng: -73.976,
    },
  },
  {
    name: "2 E 62nd St, New York, NY 10065",
    location: {
      lat: 40.76594,
      lng: -73.97141,
    },
  },
  {
    name: "19 E 61st St, New York, NY 10065",
    location: {
      lat: 40.7650751,
      lng: -73.9708256,
    },
  },
  {
    name: "17419-1741 Jewel Ave, Fresh Meadows, NY 11365",
    location: {
      lat: 40.9090527,
      lng: -73.2657516,
    },
  },
  {
    name: "Investors Bank, 3101 Broadway, Queens, NY 11106",
    location: {
      lat: 40.762,
      lng: -73.925,
    },
  },
  {
    name: "220 W 45th St, New York, NY 10036",
    location: {
      lat: 40.7583,
      lng: -73.9866,
    },
  },
  {
    name: "Grand Central Terminal, East 42nd Street, New York, NY",
    location: {
      lat: 40.7528,
      lng: -73.9772,
    },
  },
  {
    name: "216 Grand St, Brooklyn, NY 11211",
    location: {
      lat: 40.7139,
      lng: -73.96,
    },
  },
  {
    name: "299 Madison Ave, New York, NY 10017",
    location: {
      lat: 40.7521,
      lng: -73.9794,
    },
  },
];

function distance(lon1, lat1, lon2, lat2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2 - lat1).toRad(); // Javascript functions in radians
  var dLon = (lon2 - lon1).toRad();
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

/** Converts numeric degrees to radians */
if (typeof Number.toRad === "undefined") {
  Number.toRad = function () {
    return (this * Math.PI) / 180;
  };
}

window.navigator.geolocation.getCurrentPosition(function (pos) {
  console.log(pos);
  console.log(
    distance(pos.coords.longitude, pos.coords.latitude, 42.37, 71.03)
  );
});
