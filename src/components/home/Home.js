import './home.css';

export default function Home(props) {
  return (
    <main id='home_page'>
      <div id='home_page_button_container'>
        <button onClick={props.showGameToggle}>Start</button>
        <button onClick={props.showScoresToggle}>High Scores</button>
      </div>
    </main>
  );
}
