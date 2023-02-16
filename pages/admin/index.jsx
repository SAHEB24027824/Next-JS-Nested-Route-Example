import AdminLayout from '../../components/AdminLayout';
import React from 'react';

export default function Index () {
    return (
        <div>
            AdminHome page
        </div>
    );
}

Index.getLayout = function getLayout(page) {
    return(
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}



