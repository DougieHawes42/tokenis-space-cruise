import "./style.scss";

const Game = ({ onClick }) => {
  return (
    <div className="game">
      Game
      <div className="button" onClick={onClick}>
        TO MENU
      </div>
    </div>
  );
};

export default Game;
