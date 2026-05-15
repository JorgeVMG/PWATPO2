import { Title } from "../../componets/Title/Title"
import { useEffect } from "react"
import { useState } from "react"
import { getProduct } from "../../service/product"
import { Card } from "../../componets/Card/Card"

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getProduct(page, 9);

                // Si no hay más productos, detener el scroll infinito
                if (data.length === 0) {
                    setHasMore(false);
                    return;
                }

                // Agregar los nuevos productos sin reemplazar los anteriores
                setProducts((prev) => [...prev, ...data]);
            } catch (err) {
                setError("Error al cargar los productos");
            } finally {
                setLoading(false);
            }
        };

        if (hasMore) {
            loadProducts();
        }
    }, [page, hasMore]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            // Cuando falten 100px para el final
            const nearBottom = scrollTop + windowHeight >= fullHeight - 100;

            // Solo cargar si no está cargando
            if (nearBottom && !loading && hasMore) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]);
    return (
        <div>
            <section
                className="bg-[url('https://masmejores.com/wp-content/uploads/cafeteria-acogedora-y-atractiva.jpg')]
               h-screen bg-cover bg-center bg-no-repeat"
            >
                <div className="w-full md:w-200 h-full"
                    style={{ background: "linear-gradient(to right, black 10%, rgba(0,0,0,0.6) 60%, transparent 100%)", }}>
                    <div className="text-left text-white pt-24 px-6 md:pt-20 md:pl-10">
                        <Title text={"Cafeteria Aurora"} />

                        <p className="w-full md:w-100 text-base md:text-lg leading-8 text-gray-200 drop-shadow-md ">
                            Café Aurora es una cafetería acogedora con un ambiente cálido y
                            relajado, ideal para disfrutar de un café recién molido, pastelería
                            artesanal y desayunos preparados al momento. Su decoración moderna y
                            tranquila la convierte en un lugar perfecto para reunirse con amigos,
                            leer un libro o trabajar mientras se disfruta de aromas y sabores
                            únicos.
                        </p>
                    </div>
                </div>
            </section>
            <section className=" text-white mt-20 p-2">
                <Title text={"Productos"} />
                <div className="flex flex-wrap justify-center ">
                    {products.map((product) => (
                        <Card product={product} key={product.id} />
                    ))}
                </div>
                {loading && (
                    <div className="flex justify-center items-center py-8">
                        <div className="w-10 h-10 border-4 border-gray-600 border-t-blue-800 rounded-full animate-pulse"></div>
                    </div>
                )}

                {!hasMore && products.length > 0 && (
                    <p className="text-center text-gray-500 py-6">
                        No hay más productos para mostrar.
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-500 py-6">
                        {error}
                    </p>
                )}
            </section>
        </div>
    )
}
