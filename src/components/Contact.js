import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <div>


        <div className='Contact'>
            <div className='map1'>
            <iframe 
  className="map1" 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10528.144091250431!2d49.95877460242473!3d40.37107035615136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403065a20b094e41%3A0xa4a7c6999ea63ce9!2sStil%20%C3%87ay%20evi!5e1!3m2!1sen!2sin!4v1709104169689!5m2!1sen!2sin" 
  width="600" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Stil Çay Evi xəritəsi"
/>
            </div>


            <div className='contactnote'>
                <h6 className='elaqe'>Əlaqə</h6>

                <div>
                <h6 className='nomre'>Telefon nömrəsi</h6>
                <p className='textcolor'>+994 (xx)-xxx-xx-xx</p>
                </div>

                <div className='contact'>
                    <h6 className='nomre'>İnstagram səhifəsi</h6>
                    <div className='instagram' onClick={() => window.open('https://www.instagram.com/stilcaymekan/', '_blank')}>

                    <button className='insbtn1'>

<h6 className='icon' style={{fontSize: "18px", fontFamily: "cursive"}}><FontAwesomeIcon icon={faInstagram} style={{color: "black", fontSize: "25px"}} /></h6>
<p style={{fontSize: "18px", fontFamily: "cursive"}}>stilcaymekan</p>
  </button>
  </div>

                </div>

                <div className='contact'>
                    <h6 className='nomre'>Stil 1 ünvan</h6>
                    <p className='textcolor'>Məzahir Rüstəmov</p>
                </div>


                <div className='contact'>
                    <h6 className='nomre'>Stil 2 ünvan</h6>
                    <p className='textcolor'>Nəsrəddin Tusi</p>
                </div>


            </div>
        </div>




        <footer>
          <div className='footer'>
            <div className='adress'>
              <h6 style={{fontSize: "28px", fontFamily: "cursive", marginBottom: "20px" }}>Stil çay evi</h6>
              <div className='adress1'>
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff", paddingTop: '7px'}} />
              <h6 style={{fontSize: "18px", fontFamily: "cursive"}}> Stil 1 Ünvan:</h6>
              <p style={{fontSize: "16px", fontFamily: "cursive"}}>Məzahir Rüstəmov</p>
              </div>

              <div className='adress2'>
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff", paddingTop: '7px'}} />
              <h6 style={{fontSize: "18px", fontFamily: "cursive"}}> Stil 2 Ünvan:</h6>
              <p style={{fontSize: "16px", fontFamily: "cursive"}}>Nəsrədin Tusi</p>
              </div>
            </div>
            

            <div className='adress'>
              <h6 style={{fontSize: "28px", fontFamily: "cursive", marginBottom: "20px" }}>İş saatları</h6>
              <div className='adress1'>
              <h6 style={{fontSize: "18px", fontFamily: "cursive"}}> Hər gün:</h6>
              <p style={{fontSize: "16px", fontFamily: "cursive"}}>11:00 - 03:00</p>
              </div>

            </div>



            <div className='adress'>
              <h6 style={{fontSize: "28px", fontFamily: "cursive", marginBottom: "20px" }}>Bizi instagramda izləyin</h6>
              <div className='instagram' onClick={() => window.open('https://www.instagram.com/stilcaymekan/', '_blank')}>
                <button className='insbtn'>

              <h6 style={{fontSize: "18px", fontFamily: "cursive"}}><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", fontSize: "25px"}} /></h6>
              <p style={{fontSize: "18px", fontFamily: "cursive"}}>stilcaymekan</p>
                </button>
              </div>

            </div>

          </div>
        </footer>








    </div>
  )
}

export default Contact