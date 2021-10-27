import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import beach from '../../assets/beach.jpeg';
import app from '../../firebase-config';
import './main.css';

export default function Main() {
  const [calculatedCoordinates, setCalculatedCoordinates] = useState({
    X: 0,
    Y: 0,
  }); // calculated coordinates when mini_menu was placed
  const [windowMeasurements, setWindowMeasurements] = useState({ X: 0, Y: 0 });
  const [characterCoordinates, setCharacterCoordinates] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [charactersFound, setCharactersFound] = useState({
    waldo: false,
    odlaw: false,
    wizard: false,
  });

  const pop_up_style = {
    top: top,
    left: left,
    visibility: visibility ? 'visible' : 'hidden',
  };

  useEffect(() => {
    // TODO firebase setup
    const DB = getFirestore(app);

    (async function getCities(db) {
      const coordinatesCol = collection(db, 'coordinates');
      const coordinateSnapshot = await getDocs(coordinatesCol);
      const coordinatesList = coordinateSnapshot.docs.map((doc) => doc.data());
      setCharacterCoordinates(coordinatesList);
    })(DB);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;
      setWindowMeasurements({ X: innerWidth, Y: innerHeight });
    });
  }, []);

  useEffect(() => {
    //adjusted left and top values of the minimenu as the screen size changes
    const IMAGE = document.getElementById('beach_image');
    const IMAGE_WIDTH = IMAGE.offsetWidth;
    const IMAGE_HEIGHT = IMAGE.offsetHeight;
    if (window.innerWidth >= 1200) {
      const ADJUSTED_X = (windowMeasurements.X - 1200) / 2;
      setLeft(calculatedCoordinates.X + ADJUSTED_X - 16);
    } else {
      const RATIO_X = IMAGE_WIDTH / 1200;
      const RATIO_Y = IMAGE_HEIGHT / 900;

      const ADJUSTED_X = calculatedCoordinates.X * RATIO_X - 16;
      const ADJUSTED_Y = calculatedCoordinates.Y * RATIO_Y - 16;
      setLeft(ADJUSTED_X);
      setTop(ADJUSTED_Y);
    }
  }, [windowMeasurements, calculatedCoordinates]);

  function COORDINATE_CALC(event) {
    const IMAGE = document.getElementById('beach_image');
    const SCREEN_WIDTH = window.innerWidth;
    const IMAGE_HEIGHT = IMAGE.offsetHeight;
    const IMAGE_WIDTH = IMAGE.offsetWidth;
    const PAGE_X = event.pageX;
    const PAGE_Y = event.pageY;

    if (SCREEN_WIDTH >= 1200) {
      const ADJUSTED_X = PAGE_X - (SCREEN_WIDTH - IMAGE_WIDTH) / 2;
      return { X: ADJUSTED_X, Y: PAGE_Y };
    } else {
      const X_RATIO = 1200 / IMAGE_WIDTH;
      const Y_RATIO = 900 / IMAGE_HEIGHT;
      const ADJUSTED_X = X_RATIO * PAGE_X;
      const ADJUSTED_Y = Y_RATIO * PAGE_Y;
      return { X: ADJUSTED_X, Y: ADJUSTED_Y };
    }
  }

  function SET_POP_UP_COORDINATES(event, coordinates) {
    setLeft(event.pageX - 16);
    setTop(event.pageY - 16);
    setCalculatedCoordinates(coordinates);
  }

  function clickImageHandler(event) {
    const COORDINATES = COORDINATE_CALC(event);
    setVisibility((prevState) => !prevState);
    SET_POP_UP_COORDINATES(event, COORDINATES);
  }

  function characterSelectionHandler(event) {
    const COORDINATE_X = calculatedCoordinates.X;
    const COORDINATE_Y = calculatedCoordinates.Y;
    const CHARACTER = characterCoordinates.filter(
      (character) => character.name === event.target.id
    )[0];
    const NAME = CHARACTER.name;

    const X_INBOUNDS =
      COORDINATE_X >= CHARACTER['x-min'] && COORDINATE_X <= CHARACTER['x-max'];
    const Y_INBOUNDS =
      COORDINATE_Y >= CHARACTER['y-min'] && COORDINATE_Y <= CHARACTER['y-max'];
    const ANSWER = X_INBOUNDS && Y_INBOUNDS;

    if (ANSWER) {
      setCharactersFound((prevState) => {
        const COPY = { ...prevState };
        COPY[NAME] = true;
        return COPY;
      });
    }
  }

  return (
    <>
      <div style={pop_up_style} id='pop_up_list'>
        <svg id='svg_container' viewBox='0 0 100 100'>
          <circle
            cx='50'
            cy='50'
            r='50'
            stroke='green'
            strokeWidth='15'
            fill='none'
          />
        </svg>
        <div id='character_selection_container'>
          <div
            id='waldo'
            className='character_selection'
            onClick={characterSelectionHandler}
          >
            Waldo
          </div>
          <div
            id='odlaw'
            className='character_selection'
            onClick={characterSelectionHandler}
          >
            Odlaw
          </div>
          <div
            id='wizard'
            className='character_selection'
            onClick={characterSelectionHandler}
          >
            Wizard
          </div>
        </div>
      </div>
      <main id='beach_container'>
        <img
          id='beach_image'
          onClick={clickImageHandler}
          src={beach}
          alt='beach'
        />
      </main>
      {console.log(charactersFound)}
    </>
  );
}
