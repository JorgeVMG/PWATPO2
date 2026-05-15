import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { Layout } from "./const/Layout/Layout";
import { Detail } from "./Page/Detail/Detail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Route>
        </Routes>
    );
}

export default App;