import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaPlus, FaRegCircle } from 'react-icons/fa'

function Toplevelcomponent({data,len}) {

  return (
    <div>
    <div class="grid-container2">
    <div class="grid-item2">
      <div className='grid2'>
        <FaRegCircle className='icon'/>
        <h4>{data}</h4>
        <p>{len}</p>
      </div>
    </div>
    <div class="grid-item2">
      <div className='grid2'>
        <FaPlus className='iconsAlign icon' />
        <BsThreeDots className="icon"/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Toplevelcomponent
