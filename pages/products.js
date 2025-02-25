import { useReducer, useEffect } from "react";
import { productReducer } from "../context/productReducer";
import initialState from "../context/productReducer";
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    ADD_PRODUCT,
    DELETE_PRODUCT,
} from "../context/productActions";
import { useLoader } from "../context/LoaderContext";
import ProductList from "../components/ProductList";
import Loader from "@/components/Loading";

export default function Products() {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const { setLoading } = useLoader();

    useEffect(() => {
        dispatch({ type: FETCH_START });
        setLoading(true);

        fetch("https://dummyjson.com/products/category/smartphones")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: FETCH_SUCCESS, payload: data.products });
                setLoading(false);
            })
            .catch((error) => {
                dispatch({ type: FETCH_ERROR, payload: error.message });
                setLoading(false);
            });
    }, []);

    const addProduct = () => {
        const newProduct = {
            id: Date.now(),
            title: `New Product ${state.products.length + 1}`,
            price: (Math.random() * 100).toFixed(2),
            brand: "Custom Brand",
        };
        dispatch({ type: ADD_PRODUCT, payload: newProduct });
    };

    const deleteProduct = (id) => {
        dispatch({ type: DELETE_PRODUCT, payload: id });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <Loader />
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    Electronics Products
                </h1>

                {state.error && <p className="text-center text-red-500">{state.error}</p>}

                <button
                    onClick={addProduct}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mb-4"
                >
                    Add Product
                </button>

                <ProductList products={state.products} deleteProduct={deleteProduct} />
            </div>
        </div>
    );
}
