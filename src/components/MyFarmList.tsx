import Farm from "../models/Farm";
import "./MyFarmsList.css";
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

interface Prop {
  farmProp: Farm;
  deleteFarmProp: (id: string) => void;
}

const MyFarmsList = ({ farmProp, deleteFarmProp }: Prop) => {
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
    // this currently displays all the farms but they are not in a mongoDB. need to have seperate Farms that you can save.
    // we will have basically a favorites page to put all the farms that we want on that will be saved based on you logining into your
    // google account
    <li className="MyFarmsList">
      <img
        className="profile-picture"
        src={photos[randomNumber()]}
        alt=""
      ></img>
      <p> Name: {farmProp.name}</p>
      <p>
        Address:{" "}
        <a
          target={"_blank"}
          href={`https://www.google.com/maps/place/${farmProp.formatted_address}`}
        >
          {" "}
          {farmProp.formatted_address}
        </a>{" "}
      </p>
      <p>Farm Rating: {farmProp.rating}/5</p>


      <button onClick={() => deleteFarmProp(farmProp.place_id!)}>Delete</button>
      {/* above this note is a button that need to be linked to a function that find the current li that you are on, collects its ID
      and then removes it from your personalized mongoDB */}
    </li>
  );
};

export default MyFarmsList;
