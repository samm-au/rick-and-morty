import Card from "../../components/Card";
import styles from "./Dashboard.module.scss";

const Dashboard = ({ characters }) => {
  return (
    <div className={styles.Dashboard}>
      {characters &&
        characters.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
    </div>
  );
};

export default Dashboard;
