import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Farm from "../models/Farm";

import { getFarmById } from "../services/googleService";
import "./DetailsPage.css";
import photo1 from "../photos/photo-1521806463-65fbb1ab7ff9.avif";
import photo2 from "../photos/photo-1544723795-3fb6469f5b39.avif";
import photo3 from "../photos/photo-1500648767791-00dcc994a43e.avif";
import photo4 from "../photos/photo-1505471768190-275e2ad7b3f9.avif";
import photo5 from "../photos/photo-1522075469751-3a6694fb2f61.avif";
import photo6 from "../photos/photo-1536164261511-3a17e671d380.avif";
import photo7 from "../photos/photo-1603665698042-8a38a9d38cbe.avif";
import photo8 from "../photos/photo-1603665698042-8a38a9d38cbe.avif";
import photo9 from "../photos/photo-1613145997970-db84a7975fbb.avif";
import photo10 from "../photos/premium_photo-1661762000167-b88037eeda31.avif";
import FavoritesContext from "../context/FavoritesContext";

const DetailsPage = () => {
  const { isFav, addFavoriteHandler, deleteFavoriteHandler } =
    useContext(FavoritesContext);

  const [farm, setFarm] = useState<Farm | null>(null);
  const id = useParams().place_id;

  useEffect(() => {
    if (id) {
      (async () => {
        const farmFromParams: Farm = (await getFarmById(id)).result;
        setFarm(farmFromParams);
        console.log((await getFarmById(id)).result);
      })();
    }
  }, [id]);

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
  ];

  const randomNumber = () => {
    return Math.floor(Math.random() * 9 + 1);
  };

  return (
    <div className="DetailsPage">
      <img
        className="profile-picture"
        src={photos[randomNumber()]}
        alt={farm?.name}
      ></img>
      <h2>Name: {farm?.name}</h2>
      {farm && isFav(farm.formatted_address) ? (
        <button onClick={() => deleteFavoriteHandler(farm.place_id!)}>
          Delete Favorite
        </button>
      ) : (
        <button onClick={() => addFavoriteHandler({ farm: farm! })}>
          Add Favorite
        </button>
      )}
      <a
        target={"_blank"}
        href={`https://www.google.com/maps/place/${farm?.formatted_address}`}
      >
        <h3>Address: {farm?.formatted_address}</h3>
      </a>
      <h4>Farm Rating: {farm?.rating}/5</h4>

      {farm?.website ? (
        <a href={farm?.website} target={"_blank"}>
          <button className="website">Go to our website</button>
        </a>
      ) : (
        <div></div>
      )}

      {farm?.reviews ? (
        <ul>
          <h1>Farm Reviews:</h1>
          {farm?.reviews?.map((review, index) => (
            <div key={index}>
              {review.text ? (
                <>
                  <li>
                    {review.profile_photo_url ? (
                      <img
                        className="review-pic"
                        src={review.profile_photo_url}
                        alt=""
                      />
                    ) : (
                      <img
                        className="review-pic"
                        src={photos[randomNumber()]}
                        alt={review?.author_name}
                      ></img>
                    )}

                    {/* having a  problem making the profile pictures load*/}

                    <p>Author: {review.author_name}</p>
                    <p>Rating: {review.rating} /5</p>
                    <p>Posted: {review.relative_time_description}</p>
                    <p className="text">"{review.text}"</p>
                  </li>
                </>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <h1>There are no reviews for this Farm </h1>
      )}
    </div>
  );
};
export default DetailsPage;
