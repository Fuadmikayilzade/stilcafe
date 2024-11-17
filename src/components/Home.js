import React, { useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import tea from '../images/tea.png';
import sisha from '../images/sisha.png';
import breakfast from '../images/breakfast.png';
// import cafe from '../images/cafe.jpg';
// import cafe1 from '../images/receipts.jpg';
// import sandwich from '../images/sandwich.jpg';
// import burger from '../images/burger.avif';
// import doner from '../images/doner.avif';
import sishacafe from '../images/sishacafe.jpg';
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
import ligtv from '../images/ligtv.jpeg';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import sekkizil from '../images/sekkizil.jpeg';
import qelyanhavasi from '../images/qelyanhavasi.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InView } from 'react-intersection-observer';


// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// const NumberAnimation = () => {
//   const [number1, setNumber1] = useState(1);
//   const [number2, setNumber2] = useState(1);
//   const [number3, setNumber3] = useState(1);
//   const [number4, setNumber4] = useState(1);


//   useEffect(() => {
//     const interval1 = setInterval(() => {
//       setNumber1(prevNumber => (prevNumber >= 100 ? 100 : prevNumber + 1));
//     }, 10); // Her 10 milisaniyede bir sayıyı artır

//     const interval2 = setInterval(() => {
//       setNumber2(prevNumber => (prevNumber >= 300 ? 300 : prevNumber + 1));
//     }, 1); // Her 10 milisaniyede bir sayıyı artır

//     const interval3 = setInterval(() => {
//       setNumber3(prevNumber => (prevNumber >= 8 ? 8 : prevNumber + 1));
//     }, 100); // Her 10 milisaniyede bir sayıyı artır

//     const interval4 = setInterval(() => {
//       setNumber4(prevNumber => (prevNumber >= 15 ? 15 : prevNumber + 1));
//     }, 100); // Her 10 milisaniyede bir sayıyı artır


//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//       clearInterval(interval3);
//       clearInterval(interval4);

//     };
//   }, []);

//   return (
// <div style={{ position: 'relative', marginBottom: '50px', marginTop:'50px' }}>
//   <img className='picture2' src={sishacafe} />
//   <div className='numbers' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%' }}>
//     <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>{number1}+ <p  style={{fontSize:'20px'}}>Müştəri sayı (günlük)</p></div>
//     <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>{number2} <p  style={{fontSize:'20px'}}>İş saatların sayı (həftəlik)</p></div>
//     <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>{number3} <p  style={{fontSize:'20px'}}>İllik təcrübə</p></div>
//     <div style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>{number4}+ <p  style={{fontSize:'20px'}}>Əməkdaşların sayı </p></div>
//   </div>
// </div>
//   );
// };






function Home() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   date: '',
  //   time: '',
  //   count: ''
  // });
  
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   fetch('https://acb-api.algoritmika.org/api/transaction', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       // Handle response data
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // Handle errors
  //     });
  // };




  // const rezervRef = useRef(null);

  // const handleScroll = () => {
  //   rezervRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [date, setDate] = useState('');
  // const [time, setTime] = useState('');
  // const [count, setCount] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Your form submission logic here...

  //   // Reset input values
  //   setName('');
  //   setEmail('');
  //   setPhone('');
  //   setDate('');
  //   setTime('');
  //   setCount('');

  //   // Reset form
  //   e.target.reset();
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'phone':
  //       setPhone(value);
  //       break;
  //     case 'date':
  //       setDate(value);
  //       break;
  //     case 'time':
  //       setTime(value);
  //       break;
  //     case 'count':
  //       setCount(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  

  const contactRef = useRef(null);

  const handleScroll = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  

  return (
    <div>
 {/* <header id="luxbar" className="luxbar-fixed">
        <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
        <div className="luxbar-menu luxbar-menu-right luxbar-menu-light">
          <ul className="luxbar-navigation">
            <li className="luxbar-header">
              <a href="#" className="luxbar-brand" style={{ fontFamily: 'cursive', fontSize: '30px', fontWeight: 'bolder', marginLeft: '3%', color: 'rgb(255, 149, 0)' }}>STİL</a>
              <label className="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
            </li>
            <li className="luxbar-item"><Link to="/">Ana səhifə</Link></li>
            <li className="luxbar-item"><Link to="/about" >Haqqımızda</Link></li>
            <li className="luxbar-item"><a href="#">Menyular</a></li>
            <li className="luxbar-item"><a href="#">Kampaniyalar</a></li>
            <li className="luxbar-item"><a href="#">Əlaqə</a></li>
          </ul>
        </div>
      </header> */}
      <div>
            {/* <div className='header'>
                <h6 className='still'>STİLL</h6>
                <ul className='menu'>
                    <li className='home'>Home</li>
                    <li>About</li>
                    <li>Specialties</li>
                    <li>Stories</li>
                    <li>Contact</li>
                </ul>
            </div> */}
        </div>
        <div className='container1'> 
            <div className='class1'>
                <div>
                    <h1 className='text1'>
                        Ən sevimli çay məkanı
                    </h1>
                </div>
                <div>
                    <p className='text2'>
Əziz müştərilərimizi gözləyirik! Rahat atmosfer, dadlı çay çeşidləri və səmimi xidmət ilə özümüzü təqdim edirik. Bizimlə birgə çayın keyfini çıxarın!</p>
                </div>
                <div className='boxs'>
                    <div className='box1'>
                    <img src={tea} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
                    <p className='text3'>Çay</p>
                    </div>
                    <div className='box1'>
                    <img src={sisha} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
                    <p className='text3'>Qəlyan</p>
                    </div>
                    <div className='box1'>
                    <img src={breakfast} alt='' style={{width: '90px', height: '90px', borderRadius: '50%'}} />
                    <p className='text3'>İsti yeməklər</p>
                    </div>

                </div>
                <div>
         <button className='button1' onClick={handleScroll} > Əlaqə </button> 
                </div>
            </div>
        <div className='class2'>
        {/* <img  src={cafe} style={{width: '100%', height: '100%'}} /> */}
        <Carousel>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={qelyanhavasi} alt='' style={{width: '100%', height: '100vh'}} />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={ligtv} alt='' style={{width: '100%', height: '100vh'}} />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={sekkizil} alt='' style={{width: '100%', height: '100vh'}} />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>

        <InView triggerOnce={true} threshold={0.3}>
        {({ inView, ref }) => (
          <div className='container2' ref={ref}>
            <div className={`class3 ${inView ? 'animate' : ''}`}>
              <img src={ligtv}  style={{width: '100%', height: '100%'}} alt="lig tv" />
            </div>

            <div className={`class4 ${inView ? 'animate' : ''}`}>
              <h1 className='text4'>About</h1>
              <h1 className='text6'>Still kafesinə xoş gəldiniz!</h1>
              <p className='text5'>
                Kafemiz, isti və qonaqlıqsevər bir atmosfer yaradaraq müştərilərinə zövqləndirici bir təcrübə təqdim etmək məqsədilə fəaliyyət göstərir. Geniş və rahat oturma sahələri ilə rahat bir mühit təmin edərkən, müxtəlif içki və yemək seçimləri ilə damaq zövqünə cavab verir. Hər yaş və zövqə uyğun olaraq tərtib edilmiş menyumuzda kofe növləri, isti və soyuq içkilər, isti və dadlı yeməklər mövcuddur. Müştərilərimizin məmnuniyyətini əsas tutaraq, keyfiyyətli xidmət və dadlı məhsullar təklif etməyə çalışırıq. Bununla yanaşı, müştrilərimizə fərqli təcrübələr təklif etmək məqsədilə tez-tez təşkil etdiyimiz tədbirlər və kampaniyalar da keçiririk. Kafemiz eyni zamanda futbol oyunlarını izləmək və qəlyan keyfi yaşamaq istəyən müştərilər üçün də əla bir seçimdir. Geniş ekranlar sayəsində futbol oyunlarını canlı izləmə imkanı təklif edərkən, xüsusi və keyfiyyətli qəlyanlarımızla məmnun edici bir təbəssüm yaradırıq. Beləliklə, kafemiz hər yaş qrupundan insanın zövqlə vaxt keçirə biləcəyi, sosial əlaqələr qura biləcəyi və unudulmaz anlar yaşayacağı bir məkan olmağı hədəfləyir.
              </p>
              {/* 
              <div>
                <h6 className='text7'>Xüsusi reseptlər</h6>
              </div>
              <div className='receipts'>
                <div className='receipt'>
                  <img className='picture1' src={sandwich} alt="Sendiç" />
                  <p className='text8'>Sendiç</p>
                </div>

                <div className='receipt'>
                  <img className='picture1' src={burger} alt="Burger fri" />
                  <p className='text8'>Burger fri</p>
                </div>

                <div className='receipt'>
                  <img className='picture1' src={doner} alt="Dönər" />
                  <p className='text8'>Dönər</p>
                </div>
              </div> 
              */}
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
        <img className='picture2'  src={sishacafe} alt="Sisha Cafe" />
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

        <div className='class5'>
          <p className='text10'>Xüsusi menyumuz</p>
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
        <div className='button2'>
        <Link to="/menu"><button className='menubutton'> Bütün menyular</button></Link>
        </div>



      {/* <div className='class6'>
      <div className='picture3'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10528.144091250431!2d49.95877460242473!3d40.37107035615136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403065a20b094e41%3A0xa4a7c6999ea63ce9!2sStil%20%C3%87ay%20evi!5e1!3m2!1sen!2sin!4v1709104169689!5m2!1sen!2sin" width="600" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>       
      </div>

      <div className='rezerv' id='rezerv' ref={rezervRef}>
        <h6 className='text12'>Rezerv et</h6>
        <form onSubmit={handleSubmit}>
          <div className='fullname'>
            <div className='ad'>
              <h6 style={{ fontFamily: 'cursive', fontSize: '20px', marginBottom: '5px' }}>Ad</h6>
              <input type='text' name='name' placeholder='   Adınız' required className='name' onChange={handleChange} value={name} />
            </div>
            <div className='ad'>
              <h6 style={{ fontFamily: 'cursive', fontSize: '20px', marginBottom: '5px' }}>Email</h6>
              <input type='email' name='email' placeholder='   Email' required className='name' onChange={handleChange} value={email} />
            </div>
          </div>

          <div className='fullname'>
            <div className='ad'>
              <h6 style={{ fontFamily: 'cursive', fontSize: '20px', marginBottom: '5px' }}>Əlaqə nömrəsi</h6>
              <input type='text' name='phone' placeholder='   +994' required className='name' onChange={handleChange} value={phone} />
            </div>
            <div className='ad'>
              <h6 style={{ fontFamily: 'cursive', fontSize: '20px', marginBottom: '5px' }}>Tarix</h6>
              <input type='date' name='date' placeholder='   Tarix' required className='history' onChange={handleChange} value={date} />
            </div>
          </div>

          <div className='fullname'>
            <div className='ad'>
              <h6 style={{ fontFamily: 'cursive', fontSize: '20px', marginBottom: '5px' }}>Vaxt</h6>
              <input type='time' name='time' placeholder='   Saat' required className='name' onChange={handleChange} value={time} />
            </div>
            <div className='ad'>
              <h6 style={{ fontFamily: 'cursive', fontSize: '20px', marginBottom: '5px' }}>Adam sayı</h6>
              <input type='number' name='count' placeholder='   0' required className='name' onChange={handleChange} value={count} />
            </div>
          </div>

          <div className='button3'>
            <button type='submit' className='accept'>Təsdiqlə</button>
          </div>
        </form>
      </div>
    </div> */}







<div className='Contact' id='contact' ref={contactRef}>
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
  title="Stil Çay Evi Xəritəsi"
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

export default Home;
