import './main.css';
import beach from '../../assets/beach.jpeg';

export default function Main() {
  function clickHandler(event) {
    const IMAGE = document.getElementById('beach_image');

    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;

    const IMAGE_HEIGHT = IMAGE.offsetHeight;
    const IMAGE_WIDTH = IMAGE.offsetWidth;

    const PAGE_X = event.pageX;
    const PAGE_Y = event.pageY;

    if (SCREEN_WIDTH >= 1200) {
      const ADJUSTED_X = PAGE_X - (SCREEN_WIDTH - IMAGE_WIDTH) / 2;
      const X = ADJUSTED_X >= 40 && ADJUSTED_X <= 70;
      const Y = PAGE_Y >= 170 && PAGE_Y <= 200;
      return X && Y;
    } else {
      // const ADJUSTED_X =
    }
  }
  return (
    <main id='beach_container'>
      <img id='beach_image' onClick={clickHandler} src={beach} alt='beach' />
    </main>
  );
}
