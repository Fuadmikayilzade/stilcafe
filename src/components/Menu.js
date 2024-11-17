import React from 'react';
import './Menu.css';
import burgertoyuq  from '../images/bugertoyuq.avif';
import burgeret from '../images/burgeret.jpg';
import saurma from '../images/saurma.avif';
import burgersade from '../images/burger.jpg';
import burgersade1 from '../images/burgersade.jpg';
import sosiskafri from '../images/sosiskafri.avif';
import tabakakartofla from '../images/tabakakartofla.avif';
import sac from '../images/sac.jpg';
import merci from '../images/merci.png';
import plov from '../images/plov.jpg';
import colafanta from '../images/colafanta.jpg';
import sire from '../images/sire.jpg';
import sarikiz from '../images/sarikiz.jpg';
import hellbizon from '../images/hellbizon.jpg';
import redbull from '../images/redbull.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';




function Menu() {
  return (
    <div>
            <div className='class5'>
          <div className='flex3'>
          <div>
            <h6 className='text11'>Burger set</h6>

            <div className='flex1'>
            <img src={burgertoyuq} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger Set (Toyuq)</p>
              <p className='azn'>6 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={burgeret} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger Set (Ət)</p>
              <p className='azn'>7.50 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={saurma} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Şaurma (Toyuq)</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={burgersade} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger (Ət) sadə</p>
              <p className='azn'>5.50 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={burgersade1} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger (Toyuq) sadə</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



          </div>



          <div>
          <h6 className='text11'>İsti yeməklər</h6>

            <div className='flex1'>
            <img src={sosiskafri} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Sosiska & fri</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={tabakakartofla} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Tabaka kartofla</p>
              <p className='azn'>15 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={sac} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Sac</p>
              <p className='azn'>20 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={merci} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Mərci şorbası</p>
              <p className='azn'>3 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={plov} alt='' style={{width: '90px', height: '90px', borderRadius: '50%',  objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Plov</p>
              <p className='azn'>5 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



          </div>






          <div>
          <h6 className='text11'>Sərin və enerji içkilər</h6>

            <div className='flex1'>
            <img src={colafanta} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Fanta, Cola, Sprite (1L)</p>
              <p className='azn'>3 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={sire} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Təbii şirə (1L)</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={sarikiz} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Sarıkız</p>
              <p className='azn'>2.50 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={hellbizon} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Bizon, Hell (250ml)</p>
              <p className='azn'>2 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={redbull} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Redbull (250 ml)</p>
              <p className='azn'>5 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



          </div>



          </div>
        </div>





        <div className='class5'>
          <div className='flex3'>
          <div>
            <h6 className='text11'>Burger set</h6>

            <div className='flex1'>
            <img src={burgertoyuq} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger Set (Toyuq)</p>
              <p className='azn'>6 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={burgeret} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger Set (Ət)</p>
              <p className='azn'>7.50 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={saurma} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Şaurma (Toyuq)</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={burgersade} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger (Ət) sadə</p>
              <p className='azn'>5.50 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={burgersade1} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Stil Burger (Toyuq) sadə</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



          </div>



          <div>
          <h6 className='text11'>İsti yeməklər</h6>

            <div className='flex1'>
            <img src={sosiskafri} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Sosiska & fri</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={tabakakartofla} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Tabaka kartofla</p>
              <p className='azn'>15 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={sac} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Sac</p>
              <p className='azn'>20 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={merci} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Mərci şorbası</p>
              <p className='azn'>3 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={plov}  alt='' style={{width: '90px', height: '90px', borderRadius: '50%',  objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Plov</p>
              <p className='azn'>5 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



          </div>






          <div>
          <h6 className='text11'>Sərin və enerji içkilər</h6>

            <div className='flex1'>
            <img src={colafanta} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Fanta, Cola, Sprite (1L)</p>
              <p className='azn'>3 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={sire} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Təbii şirə (1L)</p>
              <p className='azn'>4 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



            <div className='flex1'>
            <img src={sarikiz} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Sarıkız</p>
              <p className='azn'>2.50 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={hellbizon} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Bizon, Hell (250ml)</p>
              <p className='azn'>2 AZN</p>
            </div>
            </div>
            <div className='xett'></div>


            <div className='flex1'>
            <img src={redbull} alt='' style={{width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover'}} />
            <div className='flex2'>
              <p style={{fontSize: '18px', fontFamily: 'cursive', width: '50%'}}>Redbull (250 ml)</p>
              <p className='azn'>5 AZN</p>
            </div>
            </div>
            <div className='xett'></div>



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

export default Menu