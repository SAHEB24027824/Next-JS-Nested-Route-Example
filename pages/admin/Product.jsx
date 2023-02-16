import AdminLayout from '@/components/AdminLayout';
import React from 'react';

const Product = () => {
    return (
        <div>
            Product
        </div>
    );
}

export default Product;

Product.getLayout = function getLayout(page) {
    return(
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
