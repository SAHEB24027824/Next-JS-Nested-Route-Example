import React from 'react';
import Link from 'next/link';

const AdminLayout = ({ children }) => {
    return (
        <>
            <div style={{width:'100%',minHeight:50,border:'1px solid',backgroundColor:'aqua',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <h3>Welcome Admin</h3>
               <Link href={'/admin'}>Home</Link>
               <Link href={'/admin/Product'}>Product</Link>
               <Link href={'/admin/Report'}>Report</Link>
            </div>
            {children}
        </>
    );
}

export default AdminLayout;
