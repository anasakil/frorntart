import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { updateProduct, fetchSellerProducts } from '../../features/products/productsSlice';

const UpdateProductForm = ({ product, closeForm }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const handleFinish = async (values) => {
        const token = localStorage.getItem('token');
        const updatedProduct = {
            productId: product._id,
            productData: values,
            token,
        };

        try {
            await dispatch(updateProduct(updatedProduct)).unwrap();
            message.success('Product updated successfully');
            dispatch(fetchSellerProducts()); // Refresh the product list
            closeForm();
        } catch (error) {
            message.error('Failed to update product');
            console.error('Error updating product:', error);
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            initialValues={{
                name: product.name,
                price: product.price,
                stock: product.stock,
                region: product.region,
                description: product.description,
            }}
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter the product name' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Please enter the product price' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                name="stock"
                label="Stock"
                rules={[{ required: true, message: 'Please enter the product stock' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                name="region"
                label="Region"
                rules={[{ required: true, message: 'Please enter the region' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
            >
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Update Product
                </Button>
                <Button onClick={closeForm} style={{ marginLeft: 8 }}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateProductForm;
