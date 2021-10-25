import './main.css';
import beach from '../../assets/beach.jpeg';

export default function Main() {
  function clickHandler(event) {
    console.log(event);
  }
  return (
    <main id='main_marvel_image'>
      <img onClick={clickHandler} src={beach} alt='beach' />
    </main>
  );
}
