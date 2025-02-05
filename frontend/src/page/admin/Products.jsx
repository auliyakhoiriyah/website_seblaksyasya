import React, { useEffect, useState } from "react";
import { Image, Tooltip, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_PRODUCT)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.response);
        setLoading(false);
      });
  }, []);

  const showModal = (id) => {
    setDeleteProductId(id);
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    if (deleteProductId) {
      axios
        .delete(`${URL_PRODUCT}/${deleteProductId}`)
        .then((res) => {
          console.log(res);
          setProducts((prev) =>
            prev.filter((product) => product._id !== deleteProductId)
          );
          setIsModalVisible(false); // Close the modal after deletion
        })
        .catch((err) => console.error("Error deleting:", err));
    }
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
    setDeleteProductId(null);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl text-green-950 font-bold mb-4">Products</h1>
<div className="flex justify-end">
  <Link to="/dashboardadmin/products/create">
    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 mb-4">
      Add Product
    </button>
  </Link>
</div>
      <div className="space-y-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="flex items-center justify-between">
              {/* Gambar Produk */}
              <div className="flex items-center gap-4">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                  preview={false}
                />
                <div>
                  <h3 className="text-lg font-bold text-green-950 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-green-950">
                    {product.price}
                    <span className="text-sm font-normal"> Rp</span>
                  </p>
                </div>
              </div>

              {/* Aksi (Update dan Delete) */}
              <div className="flex gap-2">
                <Tooltip title="Update">
                  <Link to={`/dashboardadmin/products/${product._id}`}>
                    <button className="text-blue-600 hover:text-blue-800">
                      <EditOutlined className="text-xl" />
                    </button>
                  </Link>
                </Tooltip>
                <Tooltip title="Delete">
                  <button
                    onClick={() => showModal(product._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <DeleteOutlined className="text-xl" />
                  </button>
                </Tooltip>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Konfirmasi Delete */}
      <Modal
        title="Are you sure?"
        visible={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Yes, Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </div>
  );
};

export default Product;
