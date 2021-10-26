import { useState, useEffect } from 'react';
import beach from '../../assets/beach.jpeg';
import './main.css';

export default function Main() {
  const [windowMeasurements, setWindowMeasurements] = useState({});
  const [calculatedCoordinates, setCalculatedCoordinates] = useState({}); // calculated coordinates when mini_menu was placed
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const pop_up_style = {
    top: top,
    left: left,
    visibility: visibility ? 'visible' : 'hidden',
  };

  // TODO create useEffect for when the window screen size changes
  useEffect(() => {
    // window resize event listener
    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;
      setWindowMeasurements({ innerWidth, innerHeight });
    });
  }, []);

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

  function clickHandler(event) {
    const COORDINATES = COORDINATE_CALC(event);
    setVisibility((prevState) => !prevState);
    SET_POP_UP_COORDINATES(event, COORDINATES);
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
        <div id='character_selection_container'></div>
      </div>
      <main id='beach_container'>
        <img id='beach_image' onClick={clickHandler} src={beach} alt='beach' />
      </main>
      {console.log(windowMeasurements.innerHeight)}
      {console.log(windowMeasurements.innerWidth)}
    </>
  );
}
