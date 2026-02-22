import "./style.scss";

const Home = ({ onClick }) => {
  return (
    <div className="home">
      Home
      <div className="button" onClick={onClick}>
        GO
      </div>
    </div>
  );
};

export default Home;
