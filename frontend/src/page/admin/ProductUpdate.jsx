import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint"; // Ganti dengan URL backend Anda
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Dapatkan ID produk dari URL
  const navigate = useNavigate(); // Hook untuk navigasi

  // Ambil data produk saat pertama kali dimuat
  useEffect(() => {
    axios
      .get(`${URL_PRODUCT}/${id}`)
      .then((res) => {
        setProduct(res.data);
        form.setFieldsValue({
          name: res.data.name,
          price: res.data.price,
          category: res.data.category || "electronics", // Menambahkan kategori dari data produk
        });

        // Mengatur file thumbnail jika ada
        if (res.data.thumbnail) {
          setFileList([
            {
              uid: "-1", // UID unik untuk file
              name: "thumbnail.png", // Nama default
              status: "done", // Status untuk file yang berhasil di-upload
              url: res.data.thumbnail, // URL thumbnail yang sudah ada
            },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to load product data");
      });
  }, [id]);

  // Fungsi untuk menangani submit form
  const handleSubmit = async (values) => {
    setLoading(true);

    // Membuat FormData untuk mengirim data dengan file
    const data = new FormData();
    data.append("name", values.name);
    data.append("price", values.price);
    data.append("category", values.category);

    // Tambahkan thumbnail baru jika ada perubahan file
    if (values.thumbnail && values.thumbnail.length > 0) {
      data.append("thumbnail", values.thumbnail[0].originFileObj);
    }

    try {
      // Melakukan request PATCH untuk update produk
      await axios.patch(`${URL_PRODUCT}/${id}`, data);
      message.success("Product updated successfully");
      form.resetFields();
      setFileList([]); // Reset file list setelah update
      navigate("/dashboard/products"); // Arahkan ke halaman produk setelah berhasil update
    } catch (error) {
      message.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menangani perubahan file upload
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          category: "electronics", // Menentukan kategori default
        }}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please input product price!" }]}
        >
          <Input type="number" placeholder="Enter product price" />
        </Form.Item>

        {/* Form untuk memilih kategori */}
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please select a category!' }]}
        >
          <Select placeholder="Select a category">
            <Option value="electronics">Electronics</Option>
            <Option value="fashion">Fashion</Option>
            <Option value="home">Home</Option>
            {/* Tambahkan kategori lainnya sesuai kebutuhan */}
          </Select>
        </Form.Item>

        <Form.Item
          name="thumbnail"
          label="Thumbnail"
          valuePropName="fileList"
          getValueFromEvent={({ fileList }) => fileList} // Menangani file list
          rules={[{ required: false, message: "Please upload a thumbnail!" }]}
        >
          <p>
            Current:{" "}
            {product && product.thumbnail ? (
              <a href={product.thumbnail} target="_blank" rel="noopener noreferrer">
                {product.thumbnail}
              </a>
            ) : (
              "-"
            )}
          </p>

          {/* Upload untuk thumbnail */}
          <Upload
            action="/upload" // Ganti dengan URL backend Anda untuk upload file
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false} // Menghindari upload otomatis sebelum form submit
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Edit Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
