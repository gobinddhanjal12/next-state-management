export default function ProductItem({ product, deleteProduct }) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex flex-col items-center">

            <h3 className="font-semibold text-gray-800 text-lg">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-500">Brand: {product.brand}</p>
            <button
                onClick={() => deleteProduct(product.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
                Delete
            </button>
        </div>
    );
}
