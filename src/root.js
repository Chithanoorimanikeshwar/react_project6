import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Root=()=>{
    return <Fragment>
        <div>
            <em className='text-danger'>Note:Use only top two categories and top two Recepies,other categories data is not available</em>
        </div>
        <Outlet/>

    </Fragment>
}
export default Root