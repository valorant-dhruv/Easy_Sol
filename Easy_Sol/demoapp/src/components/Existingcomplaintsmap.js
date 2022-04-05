import React, { useRef, useCallback, useState, useEffect } from "react";
import { useQuery } from "react-query";
import Data from ".././backend/models/problemmodel";
import axios from "axios";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Mapstyles from "./MapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
};

const center = {
  lat: 22.307159,
  lng: 73.181221,
};

const options = {
  styles: Mapstyles,
};

const fetcher = () => {
  return fetch("http://localhost:5000/api/user/map", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

export default function Mappy() {
  const mapRef = useRef();
  const OnMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [infow, setinfow] = useState(false);
  const [markers, setmarkers] = useState([]);

  const { isLoading, data } = useQuery(["mapdata"], () => fetcher(), {
    cacheTime: 500 * 1000,
  });

  const [upvote, setupvote] = useState(data);

  const showmarkers = () => {
    setmarkers(data);
  };

  const likes = function (info) {
    axios.put(`http://localhost:5000/api/user/upvotes/${info._id}`);
  };

  useEffect(() => {
    console.log("Re-render takes place");
  }, [infow]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  if (isLoading) {
    return <h1>Loading the data</h1>;
  }

  if (loadError) {
    return <h1>Error Loading the maps!</h1>;
  }

  if (!isLoaded) {
    return <h1>The map is still loading</h1>;
  }

  return (
    <div>
      <GoogleMap
        className="react-maps"
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        options={options}
        onLoad={OnMapLoad}
        onClick={showmarkers}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.names}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setinfow(marker);
            }}
          />
        ))}
        {infow ? (
          <InfoWindow
            position={{ lat: infow.lat, lng: infow.lng }}
            onCloseClick={() => setinfow(null)}
          >
            <div style={{ color: "black" }}>
              <h5>{infow.names}</h5>
              <h3>{infow.description}</h3>
              {/* <button
                onClick={() => {
                  likes(infow);
                }}
              >
                {infow.likes + " upvotes"}
              </button> */}
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

// {data.map((ele) => {
//   return (
//     <Marker
//       key={data.number}
//       position={{
//         lat: parseFloat(data.lat),
//         lng: parseFloat(data.lng),
//       }}
//     ></Marker>
//   );
// })}
