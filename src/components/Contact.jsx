import React from 'react'
import { FaEnvelope,FaPhone } from 'react-icons/fa';
import "./Contact.css";


const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="col-1">
                <div className="content">
                    <div>
                        <h2>Get in touch</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt, hic necessitatibus ratione officia ad.

                        </p>

                    </div>
                    <div className="address">
                        <p>743 Evergreen Terrace</p>
                        <p>Ceyhan,Adana</p>
                    </div>

                    <div className="icons">
                        <FaPhone style={{marginRight:"1rem"}}/>
                        <p>+1(555)7458888</p>
                    </div>
                    <div className="icons">
                        <FaEnvelope style={{marginRight:"1rem"}}/>
                        <p>support@example.com</p>
                    </div>

                    <div className="carreers">
                        <p>Looking for careers? <span>View all job openings.</span></p>
                    </div>


                </div>
            </div>
            <div className="col-2">
                <form action="">
                    <input type="text" placeholder='Full name' />
                    <input type="email" placeholder='Email' />
                    <input type="phone" placeholder='Phone' />
                    <textarea name="message" placeholder='message' id="" cols="30" rows="10"></textarea>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>By checking this box,you agree to the <span>Privacy Policy</span> and <span>Cookie Policy</span>.
                        </p>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact