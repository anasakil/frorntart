import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Spin, Modal, message, Tag, Popconfirm } from 'antd';
import { fetchOrders, deleteOrderById } from '../features/userOrders/userOrdersSlice';

const UserOrders = () => {
    const dispatch = useDispatch();
    const { orders, status, error } = useSelector(state => state.userOrders);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchOrders());
        }
    }, [status, dispatch]);

    if (error) {
        message.error(`Error: ${error}`);
    }

    const showModal = (order) => {
        setCurrentOrder(order);
        setIsModalOpen(true);
    };

    const handleDelete = (orderId) => {
        dispatch(deleteOrderById(orderId));
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',
            responsive: ['md']
        },
        {
            title: 'Product Name',
            dataIndex: 'products',
            key: 'productName',
            render: products => products[0]?.product.name || 'N/A'
        },
        {
            title: 'Quantity',
            dataIndex: 'products',
            key: 'quantity',
            render: products => products[0]?.quantity || 0
        },
        {
            title: 'Price',
            dataIndex: 'products',
            key: 'price',
            render: products => `$${products[0]?.product.price || 0}`
        },
        {
            title: 'Image',
            dataIndex: 'products',
            key: 'image',
            render: products => (
                products[0]?.product.imageUrl ? (
                    <img src={products[0].product.imageUrl} alt="product" style={{ width: 50, height: 50 }} />
                ) : 'N/A'
            )
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                const statusTagColors = {
                    placed: 'Peru',
                    shipped: 'geekblue',
                    delivered: 'green',
                    cancelled: 'red'
                };
                return <Tag color={statusTagColors[status]}>{status}</Tag>;
            }
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <React.Fragment>
                    <Button className='bg-[#97644e]' onClick={() => showModal(record)} type="primary" style={{ marginRight: 8 }}>
                        View Details
                    </Button>
                    <Popconfirm
                        title="Are you sure you want to delete this order?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger">
                            Delete
                        </Button>
                    </Popconfirm>
                </React.Fragment>
            )
        }
    ];

    const safeData = Array.isArray(orders) ? orders : [];

    return (
        <div className="container mx-auto px-4">
            <br />
            <h1 className="text-3xl font-bold my-6">My Orders</h1>
            {status === 'loading' ? <Spin size="large" /> : (
                <Table
                    dataSource={safeData}
                    columns={columns}
                    rowKey={record => record._id}
                    pagination={{ pageSize: 5, responsive: true }}
                    scroll={{ x: 800 }}  // Enables horizontal scroll for smaller screens
                />
            )}
            <Modal
                title="Order Details"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button key="close" onClick={handleCancel}>
                        Close
                    </Button>
                ]}
            >
                {currentOrder && (
                    <div>
                        <h2 className="text-xl font-bold">Order ID: {currentOrder._id}</h2>
                        <p>Status: {currentOrder.status}</p>
                        <p>Date: {new Date(currentOrder.createdAt).toLocaleDateString()}</p>
                        <h3 className="text-lg font-semibold">Products:</h3>
                        <ul>
                            {currentOrder.products.map(item => (
                                <li key={item._id} className="flex items-center">
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover" />
                                    <div className="ml-4">
                                        <p>{item.product.name}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.product.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default UserOrders;
