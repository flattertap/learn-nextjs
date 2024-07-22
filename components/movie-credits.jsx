import {API_URL} from "../app/constants";
import styles from "../styles/movie-credits.module.css";
import {getMovie} from "../components/movie-info";

export async function getCredits(id){
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({id}){
  const movie = await getMovie(id);
  const credits = await getCredits(id);
  return (
  <div className={styles.container}>
    <div className={styles.info}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div>
        {credits.map(credit => (
          <div key={credit.id} className={styles.credit}>
            <img
              src={credit.profile_path}
              alt={credit.name}
            />
            <div>
              <h4>name={credit.name}</h4>
              <h4>character={credit.character}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>);
}