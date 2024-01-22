import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className=" text-warning"
                        href="https://rasi-netflix.netlify.app/">rasi-netflix.netlify.app</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Designed By <a class=" text-warning" href="https://rasikp.in">Rasi</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer