import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/action";

function FavoritesPage() {

    const {favourites} = useAppSelector(state => state.github)
    const {removeFavourite} = useActions()

    if (favourites.length === 0) return <p className="text-center">No items</p>

    return (
        <div className="flex justify-center  pt-10 mx-auto h-screen w-screen">
            <ul className="list-none">
                {favourites.map(f => (
                    <li key={f} className="flex justify-between px-2 py-2">
                        <a href={f} target="_blank" className="py-2 px-4">{f}</a>
                        <button
                            className="py-2 px-4 ml-4 bg-red-400 rounded hover:shadow-md transition-all"
                            onClick={() => removeFavourite(f)}

                        >Remove
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default FavoritesPage;