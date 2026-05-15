import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductId } from "../../service/product";
import { ProductDetail } from "../../componets/ProductDetail/ProductDetail";

export const Detail = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {

        const loadProduct = async () => {
            try {
                setLoading(true);
                setError(false);

                const data = await getProductId(id);

                setProduct(data);

            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();

    }, [id]);

    if (loading) return <h1>Cargando...</h1>;

    if (error) return <h1>Error al cargar producto</h1>;

    return (
        <div className="text-white">
            <ProductDetail product={product}/>
        </div>
    );
};