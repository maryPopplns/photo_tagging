import './main.css';
import beach from '../../assets/beach.jpeg';

export default function Main() {
  function clickHandler(event) {
    const X = event.screenX;
    const Y = event.screenY;
    console.log(X, Y);
  }
  return (
    <main id='beach_container'>
      <img id='beach_image' onClick={clickHandler} src={beach} alt='beach' />
    </main>
  );
}
