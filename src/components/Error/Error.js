import React from 'react'
import Sadface from "../../images/SadFace.png"

export default function Error(){
  return (
    <div className="error--page">
      <div className='error--div'>
        <img src={Sadface} alt="Error" className='error--image'/>
        <h2 className="txt--404">404</h2>
        <p className="error--msg">Page not found</p>
        <p className="error--txt">The Page you are looking for doesn't exist or an error <br />
            occurred. Go back to choose a new direction.
        </p>
      </div>
    </div>
  );
}
