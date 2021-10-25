import Header from './Header';
import Main from './Main';

export default function Game(props) {
  return (
    <>
      <Header showGameToggle={props.showGameToggle} />
      <Main />
    </>
  );
}
