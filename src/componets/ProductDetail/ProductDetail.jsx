export const ProductDetail = ({ product }) => {
    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10 px-4">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                
                {/* Imagen del producto */}
                <div className="bg-gray-50 flex items-center justify-center p-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-72 max-w-md h-auto object-cover rounded-2xl shadow-lg"
                    />
                </div>

                {/* Información del producto */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {product.description}
                        </p>

                        {/* Precio */}
                        <div className="mb-6">
                            <span className="text-sm text-gray-500 uppercase tracking-wide">
                                Precio
                            </span>
                            <p className="text-4xl font-extrabold text-green-600">
                                ${product.precio}
                            </p>
                        </div>

                        {/* Datos adicionales */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <p className="text-sm text-gray-500">Vendedor</p>
                                <p className="font-semibold text-gray-800">
                                    {product.owner}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <p className="text-sm text-gray-500">Calificación</p>
                                <p className="font-semibold text-yellow-500">
                                    ⭐ {product.qualification}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <p className="text-sm text-gray-500">Stock</p>
                                <p className="font-semibold text-blue-600">
                                    {product.stock} unidades
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <p className="text-sm text-gray-500">ID</p>
                                <p className="font-semibold text-gray-800">
                                    #{product.id}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botón */}
                    <button className="mt-8 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};