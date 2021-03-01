// google maps API test
// npm i -S @react-google-maps/api
import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  StandaloneSearchBox,
  InfoWindow,
  InfoBox,
} from "@react-google-maps/api";
import { useState } from "react";
import "./GoogleMaps.css";
import { useLoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
// import { InfoWindow, withScriptjs, withGoogleMap } from "react-google-maps";

const containerStyle = {
  display: "flex",
  width: "830px",
  height: "1076px",
  float: "right",
};

export const center = {
  lat: 40.73061,
  lng: -73.935242,
};

// const map = {
//   lat: 40.73061,
//   lng: -73.935242,
// };
const inputStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  top: "10px",
  right: "10px",
};

function MyComponent() {
  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });

  let state = {
    adress: "",
    city: "",
    area: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  };

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

  const defaultCenter = {
    lat: 40.7521,
    lng: -73.9794,
  };

  let [zoom, setZoom] = useState(14);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtcYQfB1b70oIkfPDXygEN9pt3WPDR_GY",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (zoom =
    { zoom } && isLoaded ? (
      <>
        <div className="maps-main__container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {locations.map((spot, idx) => {
              idx += 1;
              if (idx !== 0) {
                return (
                  <Marker
                    position={spot.location}
                    text={spot.name}
                    key={spot.name}
                    onClick={() => setZoom(15)}
                  >
                    <InfoWindow>
                      <div className="spots-markers__container">
                        {spot.name}
                      </div>
                    </InfoWindow>
                    {/* <InfoBox position={spot.location}>
                      <div></div>
                    </InfoBox> */}
                  </Marker>
                );
              }
            })}
          </GoogleMap>
        </div>
      </>
    ) : (
      <></>
    ));
}

export default React.memo(MyComponent);
