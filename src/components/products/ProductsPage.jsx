import ProductCard from "./ProductCard";

const ProductsPage = ({ products, loading }) => {

  if (loading) {
    return (
      <main>
        <h2>Cargando productos...</h2>
      </main>
    );
  }

  if (!products.length) {
    return (
      <main>
        <h2>No se encontraron productos 😕</h2>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Nuestros Productos</h2>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;
