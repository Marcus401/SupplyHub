import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './default-styles.css'
import { RouterProvider } from 'react-router-dom';
import {router} from "./Components/Routes/Routes.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)