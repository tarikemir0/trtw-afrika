import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';


const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between ">
        <div className="flex-1">
          <img src="http://www.trtafrika.com/images/logo.svg" className='mb-4 mx-14 lg:mx-24 '/>
          <h4 className='text-sm font-thin mb-4 text-footerp'>Hakimiliki © TRT Afrika 2024</h4>
        </div>
        <div className="flex-1 lg:flex lg:justify-around md:flex md:justify-around ">
          
          <ul className='list-none'>
          <h2 className="text-sm  text-footerh4 mb-2 ">Shirika</h2>
            <li><a href="#" className='text-sm font-thin text-footerp mb-4 hover:text-footerp'>Kuhusu TRT Afrika</a></li>
            <li><a href="#" className='text-sm font-thin text-footerp mb-4 hover:text-footerp'>Wasiliana Nasi</a></li>
          </ul><br />
          
          <ul className='list-none'>
          <h2 className="text-sm  text-footerh4 mb-2">Majukumu ya Kisheria</h2>
            <li><a href="#" className='text-sm font-thin text-footerp mb-4 hover:text-footerp'>Sera ya Faragha</a></li>
            <li><a href="#" className='text-sm font-thin text-footerp mb-4 hover:text-footerp'>Sera ya Vidakuzi</a></li>
            <li><a href="#" className='text-sm font-thin text-footerp mb-4 hover:text-footerp'>Kanuni na Masharti</a></li>
          </ul><br/>
          </div>
          <div>
            <ul className='flex justify-around list-none lg:gap-8 lg:pr-10 pt-10 md:gap-8'>
            <li>
              <a href="https://www.youtube.com/" target='_blank'>
              <YouTubeIcon fontSize='large' className='text-footerp' />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=tr" target='_blank'>
                <TwitterIcon fontSize='large' className='text-footerp' />
                </a>
              </li>
            <li>
              <a href="https://www.facebook.com/?locale=tr_TR" target='_blank'>
                <FacebookIcon fontSize='large' className='text-footerp' />
                </a>
              </li>
            <li>
              <a href="https://www.instagram.com/" target='_blank'>
                <InstagramIcon fontSize='large' className='text-footerp' />
              </a>
              </li>
            <li >
              <a href="https://www.tiktok.com/tr-TR/" target='_blank'>
              <ShareIcon fontSize='large' className='text-footerp' />
              </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;