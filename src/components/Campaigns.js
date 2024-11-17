import React from 'react';
import './Campaigns.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Campaigns() {
  return (
    <div>

    <div className='maincubs'>

        <div className='cubs'>

            <div className='res1'>
            <div className='cub'>
            <ul className='texts'>  
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>
        </div>
        <div className='cub'>
        <ul className='texts'> 
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>

        </div>

            </div>

            <div className='res2'>
            <div className='cub'>
            <ul className='texts'>  
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>
        </div>
        <div className='cub'>
        <ul className='texts'> 
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>

        </div>

            </div>

        </div>

        <div className='cubs'>

            <div className='res1'>
            <div className='cub'>
            <ul className='texts'>  
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>
        </div>
        <div className='cub'>
        <ul className='texts'> 
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>

        </div>

            </div>

            <div className='res2'>
            <div className='cub'>
            <ul className='texts'>  
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>
        </div>
        <div className='cub'>
        <ul className='texts'> 
                <li>Qəlyan (çaşka)</li>
                <li>Çay</li>
                <li>Türk paxlavası</li>
                <li>Mürəbbə</li>

            </ul>
            <button className='btn1'>15 AZN</button>

        </div>

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

export default Campaigns