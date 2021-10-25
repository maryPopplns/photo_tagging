import './header.css';

export default function Header(props) {
  return (
    <header id='game_header'>
      <button onClick={props.showGameToggle}>Home</button>
    </header>
  );
}
