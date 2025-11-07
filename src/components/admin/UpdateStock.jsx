import { useState, useEffect } from "react";
import axios from "axios";
import "./updateStock.css";

const UpdateStock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [newStocks, setNewStocks] = useState({});

  const backendURL = "https://ifts29-tpfinal-backend.onrender.com";

  useEffect(() => {
    axios
      .get(`${backendURL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleStockInput = (id, value) => {
    setNewStocks((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = async (id) => {
    const stock = newStocks[id];
    if (stock === undefined || stock === "") {
      setMessage("⚠️ Ingresá un valor de stock nuevo antes de guardar");
      return;
    }

    setMessage("Actualizando...");

    try {
      const res = await axios.put(`${backendURL}/products/${id}`, {
        stock: parseInt(stock),
      });

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

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que querés eliminar este producto?")) return;

    setMessage("Eliminando producto...");

    try {
      const res = await axios.delete(`${backendURL}/products/${id}`);
      if (res.status === 200) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        setMessage("🗑️ Producto eliminado correctamente");
      } else {
        setMessage("❌ No se pudo eliminar el producto");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al eliminar el producto");
    }
  };

  if (loading) return <main><h2>Cargando productos...</h2></main>;

  return (
    <main className="update-stock-container">
      <div className="update-stock-header">
        <h2>Administrar productos</h2>
        <button className="btn-add" onClick={() => window.open("/admin/add", "_blank")}>
          ➕ Agregar nuevo producto
        </button>
      </div>
      {message && <p className="update-stock-message">{message}</p>}

      <table className="update-stock-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock actual</th>
            <th>Nuevo stock</th>
            <th>Actualizar</th>
            <th>Eliminar</th>
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
                <button
                  className="btn-update"
                  onClick={() => handleUpdate(product._id)}
                >
                  Guardar
                </button>
              </td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(product._id)}
                >
                  🗑️ Eliminar
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
