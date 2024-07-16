import React from 'react'
import "./Add.css"
import { assets } from '../../components/admin_assets/assets'

const Add = () => {
  return (
    <div className='add'>
        <form className='flex-col'>
            <div className='add-upload flex-col'>
                <p>Upload Image</p>
                <label htmlFor='image'>
                    <img src={assets.upload_area} alt='' />
                </label>
            </div>
        </form>
    </div>
  )
}

export default Add