const BASE_URL = "https://69f8014fdd0c226688ee179b.mockapi.io/api/v1";

const normalizeProduct = (productos, page = 1, limit = 8) => {
    return productos.map((product, index) => ({
        ...product,
        id: product.id || String((page - 1) * limit + index + 1),
    }));
};

export const getProduct = async (page = 1, limit = 8) => {
    const response = await fetch(`${BASE_URL}/productos?page=${page}&limit=${limit}`);

    if (!response.ok) {
        throw new Error("GET_PRODUCT_ERROR");
    }

    const data = await response.json();

    return normalizeProduct(data, page, limit);
};