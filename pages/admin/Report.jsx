import AdminLayout from '@/components/AdminLayout';
import React from 'react';


const Report = () => {
    return (
        <div>
            Report
        </div>
    );
}

export default Report;
Report.getLayout = function getLayout(page) {
    return(
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
