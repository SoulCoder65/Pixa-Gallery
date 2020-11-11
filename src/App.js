// https://pixabay.com/api/?key=19067741-5a755840c2646f9776374d392&q=yellow+flowers&image_type=photo
import "./App.css";
import React, { useEffect, useState } from "react";
import Image from "./Image"; // Use Image as Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CameraIcon from "./images/cameraicon.png";
const App = () => {
  const api = process.env.REACT_APP_PIXAGALLERY_API; //APi from env
  const [images, setImages] = useState([]); // images Hooks
  const [query, setQuery] = useState("dog"); //for changing queries
  const [value, setValue] = useState(""); //search bar input values
  const [isLoading, setLoading] = useState(true); //For checking loading or not

  // Call PIXABAY API
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${api}&q=${query}&image_type=photo`)
      .then((data) => data.json())
      .then((res) => {
        setImages(res.hits);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [query]);

  // Fun. run on search click
  const seacrh = () => {
    setQuery(value);
  };

  return (
    <>
      {/* Title section */}
      <div className="title-section ">
        <h1>
          Soul gallery
          <img
            style={{ width: "10%", marginLeft: "1%" }}
            src={CameraIcon}
            alt=""
            srcset=""
          />
        </h1>
      </div>
      {/* Seacrh Section */}
      <div className="search-bar">
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Type Keyword/Query"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={seacrh}>
            Search
          </Button>
        </form>
      </div>
      {/* Use map to get values from array images */}
      <div className="img-section">
        {isLoading ? (
          <h1>Loding...</h1>
        ) : (
          images.map((image) => <Image img={image} className="img-specific" />)
        )}
      </div>
    </>
  );
};

export default App;
