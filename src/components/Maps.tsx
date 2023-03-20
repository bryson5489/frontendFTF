import "./Maps.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import MapForm from "./MapForm";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 42.48059,
  lng: -83.47549,
};

const Maps = () => {
  const key = process.env.REACT_APP_FARM_KEY || "";
  const position1 = {
    lat: 42.48059,
    lng: -82.47549,
  }; //this is where the markers positions are gonna go
  const position2 = {
    lat: 42.48059,
    lng: -84.47549,
  };

  return (
    <>
      <MapForm />
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <MarkerF position={position1} />
          <MarkerF position={position2} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Maps;
