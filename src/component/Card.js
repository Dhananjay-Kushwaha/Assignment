import React from 'react'
const url = "https://th.bing.com/th/id/OIP.inXSw5jbycIIlXC1dIXdiwHaIL?rs=1&pid=ImgDetMain"
function Card({data}) {
    return (
        <div className='card'>
            <div class="grid-container2">
                <div class="grid-item2">
                    <div className='grid2'>
                        <p className='pdata'>{data}</p>
                    </div>
                </div>
                <div class="grid-item2">
                    <div className='grid2'>
                        <img src={url} alt='profile img' height="30px" width="30px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
