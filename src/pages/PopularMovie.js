import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Navbar} from "../components/Navbar";
import {Loading} from "../components/Loading";
import {MovieCard} from "../components/MovieCard";
import {fetchPopularMovie} from "../redux/action/popularMoviesAction";

export const PopularMovie = () => {
    // receiving the global state
    const {popularMovies,isLoading} = useSelector(state => state.popularMovieR);
    // console.log(popularMovies)

    // making request
    const dispatch = useDispatch();

    // making a call to function (api request)
    useEffect(() => {
        // dispatching the action
        dispatch(fetchPopularMovie(1));
    }, [dispatch]);
    return (
        <>
            <Navbar/>
            <main className='mt-20'>
                <section className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {isLoading ? (
                        <Loading/>
                    ) : (
                        popularMovies.map(movie => <MovieCard movie={movie}/>)
                    )}
                </section>
            </main>
        </>
    )
}
