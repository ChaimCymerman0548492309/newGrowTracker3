import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import GardenInfoPage from '../../gardens/pages/gardenInfoPage/GardenInfoPage';


function Router() {
    return (
        <>
            
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Layout />}> */}
                    <Route index element={<Home />} />
                    <Route path='gardenInfoPage' element={<GardenInfoPage />} />
                    {/* </Route> */}

                </Routes>
            </BrowserRouter>
            </>
    )
}

export default Router

