import ProductItem from "./ProductItem";

export default function ProductList({ products, deleteProduct }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} deleteProduct={deleteProduct} />
            ))}
        </div>
    );
}
