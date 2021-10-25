import './header.css';

export default function Header(props) {
  return (
    <div id='game_header_container'>
      <header id='game_header'>
        <button id='game_home_button' onClick={props.showGameToggle}>
          Home
        </button>
      </header>
    </div>
  );
}
