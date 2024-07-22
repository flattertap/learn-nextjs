import {Suspense} from "react";
import MovieCredits from "../../../../../components/movie-credits";
import {getMovie} from "../../../../../components/movie-info";

export async function generateMetadata({params: {id}}) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({params: {id}}) {
  
  return (
      <div>
        <Suspense fallback={<h1>Loading movie credits</h1>}>
          <MovieCredits id={id} />
        </Suspense>
      </div>
  );
}
