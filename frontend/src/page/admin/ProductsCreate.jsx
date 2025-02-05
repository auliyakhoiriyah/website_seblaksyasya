import React, {useState} from "react";
import {Form, Input, Button, Upload, message,Select} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
import { useNavigate } from "react-router-dom";

const {Option} = Select;

const ProductsCreate = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);

    const navigate = useNavigate(); //hook untuk navigasi

    //fungsi untuk menangani submit form
    const handleSubmit = async (values) => {
        setLoading(true);

        console.log("values", values);
        const data = new FormData();
        data.append("name", values.name);
        data.append("price", values.price);
        data.append("thumbnail", values.thumbnail[0].originFileObj);

        try{
            await axios.post(URL_PRODUCT, data);
            message.success("Product added succesfully!");
            form.resetFields();
            setFileList([]);
            navigate("/dashboardadmin/products");
        }catch (error) {
            message.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    //Fungsi untuk menangani perubahan file upload
    const handleChange = ({fileList: newFileList}) => setFileList(newFileList);

    return (
        <div className="min-h-screen">
                 <h1 className="text-2xl text-green-950 font-bold mb-4">Add Products</h1>

            <Form
                form={form}
                layout='vertical'
                onFinish={handleSubmit}
                initialValues={{
                    category: "electronics", //menentukan kategori default
                }}
            >
            <Form.Item
                name= 'name'
                label= 'Product Name'
                rules={[{required: true, message: "Please input product name!"}]}
            >
            <Input placeholder='Enter produk name' />
            </Form.Item>
            <Form.Item
                name= 'price'
                label= 'Price'
                rules={[{required: true, message: "Please input product price!"}]}
            >
            <Input type='number' placeholder='Enter produk price' />
            </Form.Item>
            {
                /* */
            }

            <Form.Item
                name='thumbnail'
                label='Thumbnail'
                valuePropName='fileList'
                getValueFromEvent={({fileList}) => fileList}
                rules={[{required:true, message:"Please upload a thumbnail!"}]}
            >
                <Upload
                    action='/upload' //atur sesuai endpoint upload file anda
                    listType='picture'
                    fileList={fileList}
                    onChange={handleChange}
                    beforeUpload={() => false} //menghindari upload otomatis
                    maxCount={1}
                >
                    <Button icon={< UploadOutlined />}>
                        Click to upload
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType="submit" loading={loading}>Add product</Button>
            </Form.Item>
            </Form>
        </div>
    );
};

export default ProductsCreate;

