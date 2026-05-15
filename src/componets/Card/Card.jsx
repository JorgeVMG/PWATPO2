import { useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div
            key={product.id}
            className="w-80 rounded-3xl border border-gray-200 bg-white shadow-md
             overflow-hidden cursor-pointer
             transform transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-xl m-2 pt-2 pr-2"
            onClick={() => navigate(`/detail/${product.id}`)}
        >
            <div className="flex">
                <div className="flex-1 p-3 bg-gray-50">
                    <h2 className="text-lg font-bold  text-gray-900 line-clamp-2 mb-2">
                        {product.name}
                    </h2>

                    <p className="text-sm text-gray-600 mb-1">
                        Calificación:
                        <span className="font-semibold text-yellow-500 ml-1">
                            {product.qualification}
                        </span>
                    </p>

                    <p className="text-2xl font-bold text-green-600 mb-2">
                        ${product.precio}
                    </p>

                    <p className="text-sm text-gray-500">
                        Stock: {product.stock}
                    </p>
                </div>

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded-2xl"
                />
            </div>
        </div>
    );
}