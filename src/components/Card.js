import {Link} from "react-router-dom";

export const Card = ({product}) => {

    return (
        <Link to={`/products/${product.id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={product.images[0]} alt={product.title} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{product.description}</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product && product.category.name}</h5>
            </div>
        </Link>
    )
}
