import React from 'react'
import "./PricingStyles.css";

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="container">
            <div className="top-content">
                <div>
                    <h2>Everything you need for <span>$99 a month</span></h2>
                    <p>Includes every feature we offer plus unlimited projects and unlimited users.</p>
                </div>
                <div className="btn-div">
                    <button>Get started today</button>
                </div>

                <div className="bottom-content">
                    <div className="card">
                        <p><span>Everything you need</span></p>
                        <h3>All-in-one platform</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur itaque, recusandae dolor eveniet corporis! Molestiae ratione eveniet minus quibusdam.

                        </p>
                    </div>

                    <div className="card">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing