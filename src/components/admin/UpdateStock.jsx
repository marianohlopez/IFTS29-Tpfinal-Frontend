import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateStock.css";

const UpdateStock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [newStocks, setNewStocks] = useState({});

  useEffect(() => {
    axios
      .get("https://ifts-29-tpfinal-backend.vercel.app/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, []);

  // Guardar valor nuevo sin tocar el producto original
  const handleStockInput = (id, value) => {
    setNewStocks((prev) => ({ ...prev, [id]: value }));
  };

  // Enviar actualización al backend
  const handleUpdate = async (id) => {
    const stock = newStocks[id];
    if (stock === undefined || stock === "") {
      setMessage("⚠️ Ingresá un valor de stock nuevo antes de guardar");
      return;
    }

    setMessage("Actualizando...");

    try {
      const res = await axios.put(
        `https://ifts-29-tpfinal-backend.vercel.app/products/${id}`,
        { stock: parseInt(stock) }
      );

      if (res.status === 200) {
        setProducts((prev) =>
          prev.map((p) =>
            p._id === id ? { ...p, stock: parseInt(stock) } : p
          )
        );
        setNewStocks((prev) => ({ ...prev, [id]: "" }));
        setMessage("✅ Stock actualizado correctamente");
      } else {
        setMessage("❌ Error al actualizar el stock");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al conectar con el servidor");
    }
  };

  if (loading) return <main><h2>Cargando productos...</h2></main>;

  return (
    <main className="update-stock-container">
      <h2>Actualizar stock de productos</h2>
      {message && <p className="update-stock-message">{message}</p>}

      <table className="update-stock-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock actual</th>
            <th>Nuevo stock</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.price.toLocaleString()}</td>
              <td>{product.stock}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={newStocks[product._id] || ""}
                  onChange={(e) =>
                    handleStockInput(product._id, e.target.value)
                  }
                  placeholder="Nuevo valor"
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(product._id)}>
                  Guardar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default UpdateStock;
