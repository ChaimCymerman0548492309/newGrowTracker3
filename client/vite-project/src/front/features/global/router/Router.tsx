import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home />} />

                        {/* <Route path="/erp/Products" element={<Products />} />
                        <Route path="/erp/Product/:id" element={<Product />} />
                        <Route path="/erp/AddProduct" element={<AddProduct />} />
                        <Route path="/erp/EditProduct/:id" element={<EditProduct />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter></div>
    )
}

export default Router