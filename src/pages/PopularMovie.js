import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Navbar} from "../components/Navbar";
import {fetchPopularMovie} from "../redux/action/popularMoviesAction";
import {Loading} from "../components/Loading";
import {MovieCard} from "../components/MovieCard";

export const PopularMovie = () => {
    // making request
    const dispatch = useDispatch();

    // receiving the global state
    const {popularMovies,isLoading} = useSelector((state) => state.popularMovieR);

    // making a call to function (api request)
    useEffect(() => {
        // dispatching the action
        dispatch(fetchPopularMovie(1));
    }, [dispatch]);

    console.log(popularMovies);
    console.log(isLoading)
    return (
        <>
            <Navbar/>
            <main className='mt-10'>
                <section
                    className='pt-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
                    {isLoading ? (
                        <Loading/>
                    ) : (
                        popularMovies.map(movie => (
                            <MovieCard key={movie.id} movie={movie}/>
                        ))
                    )}
                </section>
            </main>
        </>
    )
}
