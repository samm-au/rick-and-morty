import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <h1>Welcome</h1>
      <p>Use it wisely..</p>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
        alt="rick and morty poster"
      />
    </div>
  );
};

export default Home;
