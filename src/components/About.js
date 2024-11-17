import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sishacafe from '../images/sishacafe.jpg';
import sekkizil from '../images/sekkizil.jpeg';
import qelyanhavasi from '../images/qelyanhavasi.jpeg';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { InView } from 'react-intersection-observer';







function About () {
    return (

        <div>
        <InView triggerOnce={true} threshold={0.1}>
        {({ inView, ref }) => (
          <div className='container2' ref={ref}>
            <div className={`class3 ${inView ? 'animate' : ''}`}>
              <img src={sekkizil} style={{width: '100%', height: '100%'}} alt="lig tv" />
            </div>

            <div className={`class4 ${inView ? 'animate' : ''}`}>
              <h1 className='text4'>About</h1>
              <h1 className='text6'>Still kafesinə xoş gəldiniz!</h1>
              <p className='text5'>
                Kafemiz, isti və qonaqlıqsevər bir atmosfer yaradaraq müştərilərinə zövqləndirici bir təcrübə təqdim etmək məqsədilə fəaliyyət göstərir. Geniş və rahat oturma sahələri ilə rahat bir mühit təmin edərkən, müxtəlif içki və yemək seçimləri ilə damaq zövqünə cavab verir. Hər yaş və zövqə uyğun olaraq tərtib edilmiş menyumuzda kofe növləri, isti və soyuq içkilər, isti və dadlı yeməklər mövcuddur. Müştərilərimizin məmnuniyyətini əsas tutaraq, keyfiyyətli xidmət və dadlı məhsullar təklif etməyə çalışırıq. Bununla yanaşı, müştrilərimizə fərqli təcrübələr təklif etmək məqsədilə tez-tez təşkil etdiyimiz tədbirlər və kampaniyalar da keçiririk. Kafemiz eyni zamanda futbol oyunlarını izləmək və qəlyan keyfi yaşamaq istəyən müştərilər üçün də əla bir seçimdir. Geniş ekranlar sayəsində futbol oyunlarını canlı izləmə imkanı təklif edərkən, xüsusi və keyfiyyətli qəlyanlarımızla məmnun edici bir təbəssüm yaradırıq. Beləliklə, kafemiz hər yaş qrupundan insanın zövqlə vaxt keçirə biləcəyi, sosial əlaqələr qura biləcəyi və unudulmaz anlar yaşayacağı bir məkan olmağı hədəfləyir.
              </p>
            </div>
          </div>
        )}
      </InView>

      <InView triggerOnce={true} threshold={0.5}>
    {({ inView, ref }) => (
      <div
        className={`aboutcafe ${inView ? 'animate' : ''}`}
        ref={ref}
        style={{ position: 'relative', marginBottom: '50px', marginTop: '50px' }}
      >
        <img className='picture2' src={sishacafe} alt="Sisha Cafe" />
        <div
          className='numbers'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
          }}
        >
          <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>
            100+
            <p style={{ fontSize: '20px' }}>Müştəri sayı (günlük)</p>
          </div>
          <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>
            300
            <p style={{ fontSize: '20px' }}>İş saatların sayı (həftəlik)</p>
          </div>
          <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>
            8
            <p style={{ fontSize: '20px' }}>İllik təcrübə</p>
          </div>
          <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>
            15+
            <p style={{ fontSize: '20px' }}>Əməkdaşların sayı</p>
          </div>
        </div>
      </div>
    )}
  </InView>  



        <InView triggerOnce={true} threshold={0.3}>
        {({ inView, ref }) => (
          <div className='container2' ref={ref}>

            <div className={`class4 ${inView ? 'animate' : ''}`}>
              <h1 className='text4'>About</h1>
              <h1 className='text6'>Still kafesinə xoş gəldiniz!</h1>
              <p className='text5'>
                Kafemiz, isti və qonaqlıqsevər bir atmosfer yaradaraq müştərilərinə zövqləndirici bir təcrübə təqdim etmək məqsədilə fəaliyyət göstərir. Geniş və rahat oturma sahələri ilə rahat bir mühit təmin edərkən, müxtəlif içki və yemək seçimləri ilə damaq zövqünə cavab verir. Hər yaş və zövqə uyğun olaraq tərtib edilmiş menyumuzda kofe növləri, isti və soyuq içkilər, isti və dadlı yeməklər mövcuddur. Müştərilərimizin məmnuniyyətini əsas tutaraq, keyfiyyətli xidmət və dadlı məhsullar təklif etməyə çalışırıq. Bununla yanaşı, müştrilərimizə fərqli təcrübələr təklif etmək məqsədilə tez-tez təşkil etdiyimiz tədbirlər və kampaniyalar da keçiririk. Kafemiz eyni zamanda futbol oyunlarını izləmək və qəlyan keyfi yaşamaq istəyən müştərilər üçün də əla bir seçimdir. Geniş ekranlar sayəsində futbol oyunlarını canlı izləmə imkanı təklif edərkən, xüsusi və keyfiyyətli qəlyanlarımızla məmnun edici bir təbəssüm yaradırıq. Beləliklə, kafemiz hər yaş qrupundan insanın zövqlə vaxt keçirə biləcəyi, sosial əlaqələr qura biləcəyi və unudulmaz anlar yaşayacağı bir məkan olmağı hədəfləyir.
              </p>
            </div>
            <div className={`class3 ${inView ? 'animate' : ''}`}>
              <img src={qelyanhavasi} style={{width: '100%', height: '100%'}} alt="lig tv" />
            </div>
          </div>
        )}
      </InView>



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

export default About;