import "./Maps.css";
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import MapForm from "./MapForm";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Farm from "../models/Farm";
import { getFarmsByLocation } from "../services/googleService";
import FarmList from "./FarmList";
import Location from "../models/Location";
import DetailsPage from "./DetailsPage";

const containerStyle = {
  width: "100%",
  height: "678px",
};

// this is the center that we will being using for the searchterm!

const Maps = () => {
  const navigate = useNavigate();
  const key = process.env.REACT_APP_FARM_KEY || "";
  const [selectedCenter, setSelectedCenter] = useState<Location | null>(null);
  const [index, setIndex] = useState<null | number>(null);
  // const [mongoFarms, setMongoFarms] = useState<MongoFarms>([]);
  const [farmArray, setFarmArray] = useState<Farm[] | any>([
    {
      geometry: {
        location: {
          lat: 42.4985242,
          lng: -83.457077,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.5062067,
          lng: -83.4924924,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.476307,
          lng: -83.45545299999999,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.484931,
          lng: -83.5498155,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.4397413,
          lng: -83.5721052,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.4721891,
          lng: -83.49022389999999,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.5018246,
          lng: -83.45983179999999,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.4906198,
          lng: -83.4355941,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.4491388,
          lng: -83.4603538,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.4116451,
          lng: -83.6154974,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.48041509999999,
          lng: -83.4750212,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.3678853,
          lng: -83.4598225,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.3765118,
          lng: -83.57706530000002,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.5149364,
          lng: -83.6082346,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.5219048,
          lng: -83.5163146,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.3987406,
          lng: -83.2652093,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.4331778,
          lng: -83.6879075,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.6192977,
          lng: -83.4082312,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.6575943,
          lng: -83.4685087,
        },
      },
    },
    {
      geometry: {
        location: {
          lat: 42.6047657,
          lng: -83.21558,
        },
      },
    },
  ]);

  const [searchParams] = useSearchParams();
  let searchTerm: string = searchParams.get("search-term") || "";
  const test = (farm: any, index: number) => {
    setSelectedCenter(farm.geometry.location);
    setIndex(index);
  };

  useEffect(() => {
    (async () => {
      const farms = (await getFarmsByLocation(searchTerm)).results;
      // need to get all the farms from mongo here as well
      // const mongoFarms = (await getMongoFarms(searchTerm)).results
      setFarmArray(farms);
    })();
  }, [searchTerm]);

  let center: Location = {
    lat: 42.48059,
    lng: -83.47549,
  };

  return (
    <>
      <div className="mapForm">
        <MapForm />
      </div>
      <div className="mapContainer">
        <LoadScript googleMapsApiKey={key}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={farmArray[0].geometry.location || center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}

            {farmArray.map((farm: any, index: number) => (
              <MarkerF
                position={farm.geometry.location}
                key={farm.place_id}
                onClick={(e) => test(farm, index)}
              />
            ))}
            {/* {mongoFarms.map((farm: any, index: number) => (
              <MarkerF
                position={farm.geometry.location}
                key={farm.place_id}
                onClick={(e) => test(farm, index)}
              />
            ))} */}
            {index && selectedCenter && (
              <InfoWindowF
                onCloseClick={() => {
                  setSelectedCenter(null);
                }}
                position={{
                  lat: selectedCenter.lat,
                  lng: selectedCenter.lng,
                }}
              >
                <div>
                  <p>
                    <span>Name:</span> {farmArray[index].name}
                  </p>
                  <p>
                    <span>Address:</span> {farmArray[index].formatted_address}
                  </p>
                  <p>
                    <span>Rating:</span> {farmArray[index].rating}
                  </p>
                </div>
              </InfoWindowF>
            )}
            {/* {index && selectedCenter && (
              <InfoWindowF
                onCloseClick={() => {
                  setSelectedCenter(null);
                }}
                position={{
                  lat: selectedCenter.lat,
                  lng: selectedCenter.lng,
                }}
              >
                <div>
                  <p>
                    <span>Name:</span> {mongoFarms[index].name}
                  </p>
                  <p>
                    <span>Address:</span> {mongoFarms[index].formatted_address}
                  </p>
                  <p>
                    <span>Rating:</span> {mongoFarms[index].rating}
                  </p>
               
                </div>
              </InfoWindowF>
            )} */}
          </GoogleMap>
        </LoadScript>
        <div className="farmArray">
          <ul className="FarmListContainer">
            {farmArray.map((farm: any) => (
              <Link to={`/detailsPage/${farm.place_id}`}>
                <FarmList farmsProp={farm} key={farm.place_id} />
              </Link>
            ))}
            {/* {mongoFarms.map((farm: any) => (
              <Link to={`/detailsPage/${farm.place_id}`}>
                <FarmList farmsProp={farm} key={farm.place_id} />
              </Link>
            ))} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Maps;
