import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    return (
        <div style={{alignItems:'center',width:'100%',minHeight:50,border:'1px solid',backgroundColor:'lightGreen',display:'flex' , justifyContent:'space-around'}}>
            <h2 >Main Navbar</h2>

            <div style={{display:'flex',flex:1 , justifyContent:'space-around'}}>
                <Link href={'/guest'}>Guest</Link>
                <Link href={'/admin'}>Admin</Link>
            </div>

        </div>
    );
}

export default Navbar;
