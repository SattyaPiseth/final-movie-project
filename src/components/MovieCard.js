
"use client";

import {Link} from "react-router-dom";

export function MovieCard({movie}) {
    return (
        <>
            <section className="col-4 col-sm-4 col-md-3 col-lg-2 p-2">
                <Link to="/movies-details/823464" className="text-decoration-none">
                    <div className="card g-5 h-100 shadow-lg border rounded-lg overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                            className="card-img-top w-full h-80 object-cover"
                            alt={movie.title}
                        />
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">
                            HD
                        </div>
                        <div className="card-body p-4">
                            <h4 className="font-bold text-gray-900 mb-2">Godzilla x Kong: The New Empire</h4>
                            <h5 className="text-gray-700 mb-2 flex items-center font-bold">
                                <i className="far fa-calendar mr-2" aria-hidden="true"></i>
                                {movie.release_date}
                            </h5>
                            {/*<p className="text-gray-600">Rating: {movie.vote_average}/10</p>*/}
                            <div className="flex items-center">
                                <Link to={"#"}
                                      className="text-sm font-bold text-gray-900 underline hover:no-underline dark:text-white">{`${movie.vote_count} reviews`}</Link>
                            </div>
                        </div>

                    </div>
                </Link>
            </section>
        </>
    );
}