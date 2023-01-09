import React from 'react'
import { PropagateLoader } from "react-spinners";

const PageLoading = () => {
    return (
        <div class="grid place-items-center h-screen">
            <PropagateLoader color="#36d7b7" />
        </div>
    )
}

export default PageLoading