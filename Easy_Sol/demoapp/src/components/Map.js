import React, { useCallback, useRef, useState } from "react";
import mongoose from "mongoose";
import ProblemUser from "../backend/models/problemmodel";
import "../App (1).css";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { Form, Button } from "react-bootstrap";

import { formatRelative } from "date-fns";

// mongoose
//   .connect(
//     `mongodb+srv://Dhruv:Dhruv@cluster0.zn5t5.mongodb.net/SGP?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     console.log("The connection successful with the database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
};

const center = {
  lat: 22.307159,
  lng: 73.181221,
};

export default function Map() {
  const [markers, setmarkers] = useState([]);
  const [selected, setselected] = useState(null);
  const [count, setcount] = useState(0);
  const [showform, setshowform] = useState(false);
  const [names, setnames] = useState("");
  const [number, setnumber] = useState();
  const [address, setaddress] = useState("");
  const [description, setdescription] = useState("");

  console.log(markers);
  console.log(count);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const onMapClick = useCallback(
    (event) =>
      setmarkers((old) => [
        ...old,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
          id: count,
        },
      ]),
    []
  );

  const complaintsubmit = (event) => {
    let { lat, lng } = showform;
    console.log(lat);
    event.preventDefault();
    fetch("http://localhost:5000/api/user/complaintform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names,
        number,
        address,
        description,
        lat,
        lng,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("This is the data", data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const mapRef = useRef();
  const OnMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) {
    return <h1>Error Loading the maps!</h1>;
  }

  if (!isLoaded) {
    return <h1>The map is still loading</h1>;
  }

  if (showform) {
    return (
      <div>
        <h1>Write your complaint here</h1>
        <Form method="POST" onSubmit={complaintsubmit}>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required={true}
              value={names}
              onChange={(e) => {
                setnames(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required={true}
              value={number}
              onChange={(e) => {
                setnumber(e.target.value);
              }}
            />
          </Form.Group>
          <hr />
          <Form.Group controlId="formGridPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required={true}
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </Form.Group>
          <hr />

          <Form.Group controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required={true}
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </Form.Group>
          <hr />
          <Button variant="primary" type="ComplaintSubmitButton">
            Submit
          </Button>
        </Form>
      </div>
    );
  }

  return (
    <div>
      <Search panTo={panTo} />
      <GoogleMap
        className="react-maps"
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        onClick={onMapClick}
        onLoad={OnMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setselected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat + 0.0025, lng: selected.lng }}
            onCloseClick={() => setselected(null)}
          >
            <div className="infowindow">
              <h3>Hello User!</h3>
              <Button onClick={() => setshowform(selected)}>
                Submit your complaint
              </Button>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 22.307159, lng: () => 73.181221 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
