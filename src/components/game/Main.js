import './main.css';
import beach from '../../assets/beach.jpeg';

export default function Main() {
  function INBOUNDS_DETERMINER(event) {
    const IMAGE = document.getElementById('beach_image');

    const SCREEN_WIDTH = window.innerWidth;

    const IMAGE_HEIGHT = IMAGE.offsetHeight;
    const IMAGE_WIDTH = IMAGE.offsetWidth;

    const PAGE_X = event.pageX;
    const PAGE_Y = event.pageY;

    if (SCREEN_WIDTH >= 1200) {
      const ADJUSTED_X = PAGE_X - (SCREEN_WIDTH - IMAGE_WIDTH) / 2;
      const IS_X_INBOUNDS = ADJUSTED_X >= 40 && ADJUSTED_X <= 70;
      const IS_Y_INBOUNDS = PAGE_Y >= 135 && PAGE_Y <= 165;
      // return IS_X_INBOUNDS && IS_Y_INBOUNDS;
      console.log(IS_X_INBOUNDS && IS_Y_INBOUNDS);
    } else {
      // const X_RATIO = IMAGE_WIDTH / 1200;
      const X_RATIO = 1200 / IMAGE_WIDTH;
      const Y_RATIO = 900 / IMAGE_HEIGHT;

      const ADJUSTED_X = X_RATIO * PAGE_X;
      const ADJUSTED_Y = Y_RATIO * PAGE_Y;

      const IS_X_INBOUNDS = ADJUSTED_X >= 40 && ADJUSTED_X <= 70;
      const IS_Y_INBOUNDS = ADJUSTED_Y >= 135 && ADJUSTED_Y <= 165;
      console.log(IS_X_INBOUNDS && IS_Y_INBOUNDS);
      // return IS_X_INBOUNDS && IS_Y_INBOUNDS;
    }
  }

  function clickHandler(event) {
    INBOUNDS_DETERMINER(event);
  }

  return (
    <main id='beach_container'>
      <img id='beach_image' onClick={clickHandler} src={beach} alt='beach' />
    </main>
  );
}
