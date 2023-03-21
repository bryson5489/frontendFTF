import "./Maps.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import MapForm from "./MapForm";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// this is the center that we will being using for the searchterm!
const center = {
  lat: 42.48059,
  lng: -83.47549,
};

const Maps = () => {
  const key = process.env.REACT_APP_FARM_KEY || "";

  const farm1 = {
    lat: 42.4985242,
    lng: -83.457077,
  };
  const farm2 = {
    lat: 42.5062067,
    lng: -83.4924924,
  };
  const farm3 = {
    lat: 42.476307,
    lng: -83.45545299999999,
  };
  const farm4 = {
    lat: 42.484931,
    lng: -83.5498155,
  };
  const farm5 = {
    lat: 42.4397413,
    lng: -83.5721052,
  };
  const farm6 = {
    lat: 42.4721891,
    lng: -83.49022389999999,
  };
  const farm7 = {
    lat: 42.5018246,
    lng: -83.45983179999999,
  };
  const farm8 = {
    lat: 42.4906198,
    lng: -83.4355941,
  };
  const farm9 = {
    lat: 42.4491388,
    lng: -83.4603538,
  };
  const farm10 = {
    lat: 42.4116451,
    lng: -83.6154974,
  };
  const farm11 = {
    lat: 42.48041509999999,
    lng: -83.4750212,
  };
  const farm12 = {
    lat: 42.3678853,
    lng: -83.4598225,
  };
  const farm13 = {
    lat: 42.3765118,
    lng: -83.57706530000002,
  };
  const farm14 = {
    lat: 42.5149364,
    lng: -83.6082346,
  };
  const farm15 = {
    lat: 42.5219048,
    lng: -83.5163146,
  };
  const farm16 = {
    lat: 42.3987406,
    lng: -83.2652093,
  };
  const farm17 = {
    lat: 42.4331778,
    lng: -83.6879075,
  };
  const farm18 = {
    lat: 42.6192977,
    lng: -83.4082312,
  };
  const farm19 = {
    lat: 42.6575943,
    lng: -83.4685087,
  };

  const farm20 = {
    lat: 42.6047657,

    lng: -83.21558,
  };

  return (
    <>
      <MapForm />
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}

          <MarkerF position={farm1} />
          <MarkerF position={farm2} />
          <MarkerF position={farm3} />
          <MarkerF position={farm4} />
          <MarkerF position={farm5} />
          <MarkerF position={farm6} />
          <MarkerF position={farm7} />
          <MarkerF position={farm8} />
          <MarkerF position={farm9} />
          <MarkerF position={farm10} />
          <MarkerF position={farm11} />
          <MarkerF position={farm12} />
          <MarkerF position={farm13} />
          <MarkerF position={farm14} />
          <MarkerF position={farm15} />
          <MarkerF position={farm16} />
          <MarkerF position={farm17} />
          <MarkerF position={farm18} />
          <MarkerF position={farm19} />
          <MarkerF position={farm20} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Maps;
