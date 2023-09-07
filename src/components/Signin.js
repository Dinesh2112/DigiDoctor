import React from 'react'

export default function Signin() {
  return (
    <>
    <div className="popup">
        <div className="claose-btn">&times;
        <div className="form">
            <h2>Log in</h2>
            <div className="form-element">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter Email">

                </input>
            </div>
            <div className="form-element">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password">
                    </input>
            </div>
        </div>
        </div>

    </div>

   
    </>
  )
}
