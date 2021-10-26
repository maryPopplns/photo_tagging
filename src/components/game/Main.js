import './main.css';
import beach from '../../assets/beach.jpeg';

export default function Main() {
  function COORDINATE_CALCULATOR(event) {
    const IMAGE = document.getElementById('beach_image');
    const SCREEN_WIDTH = window.innerWidth;
    const IMAGE_HEIGHT = IMAGE.offsetHeight;
    const IMAGE_WIDTH = IMAGE.offsetWidth;
    const PAGE_X = event.pageX;
    const PAGE_Y = event.pageY;

    if (SCREEN_WIDTH >= 1200) {
      const ADJUSTED_X = PAGE_X - (SCREEN_WIDTH - IMAGE_WIDTH) / 2;
      return { ADJUSTED_X, PAGE_Y };
    } else {
      const X_RATIO = 1200 / IMAGE_WIDTH;
      const Y_RATIO = 900 / IMAGE_HEIGHT;
      const ADJUSTED_X = X_RATIO * PAGE_X;
      const ADJUSTED_Y = Y_RATIO * PAGE_Y;
      return { X: ADJUSTED_X, Y: ADJUSTED_Y };
    }
  }

  function clickHandler(event) {
    const COORDINATES = COORDINATE_CALCULATOR(event);
    console.log(COORDINATES);
  }

  return (
    <main id='beach_container'>
      <img id='beach_image' onClick={clickHandler} src={beach} alt='beach' />
    </main>
  );
}
