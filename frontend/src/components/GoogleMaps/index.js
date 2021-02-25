// google maps API test
// npm i -S @react-google-maps/api
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "./GoogleMaps.css";

const containerStyle = {
  display: "flex",
  width: "830px",
  height: "1076px",
  float: "right",
};

const center = {
  lat: 40.73061,
  lng: -73.935242,
};

// const map = {
//   lat: 40.73061,
//   lng: -73.935242,
// };

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtcYQfB1b70oIkfPDXygEN9pt3WPDR_GY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <div className="maps-main__container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
