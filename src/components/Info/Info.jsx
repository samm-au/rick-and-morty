import styles from "./Info.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = ({ cards }) => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    setCharacter(cards.find((char) => char.id === parseInt(id)));
  }, [id, cards]);

  return character ? (
    <div className={styles.Info}>
      <img src={character.image} alt="portrait" />
      <div>
        <h1>{character.name}</h1>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>
          Type: {character.type ? character.type : `The type does not exist`}
        </p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  ) : (
    <p>This character doesn't exist</p>
  );
};

export default Info;
