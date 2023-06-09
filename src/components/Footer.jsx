import { footerData } from '../utils/dummyData';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = ({ isHomePage }) => {
  const footerBgClass = isHomePage ? 'gradient-bg-footer' : 'blur-sec';

  return (
    <footer className={`text-white ${footerBgClass}`}>
      <div className="container mx-auto px-4 overflow-hidden p-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Main Menu</h4>
            <ul className="list-none">
              {footerData.mainMenu.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.url} className="hover:text-gray-400 cursor-pointer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Other Menu</h4>
            <ul className="list-none">
              {footerData.otherMenu.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.url} className="hover:text-gray-400 cursor-pointer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Where We Are</h3>
            <ul className="space-y-3">
              {footerData.whereWeAre.map((item) => (
                <li key={item.id}>
                  <span className="text-gray-300 cursor-pointer">{item.title}: </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`}
                    className="text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="flex list-none flex-wrap">
              <li className="mr-4 mt-2">
                <a href={footerData.connectWithUs[0].url} className="hover:text-gray-400 cursor-pointer">
                  <FaFacebook size={24} className='' />
                </a>
              </li>
              <li className="mr-4 mt-2">
                <a href={footerData.connectWithUs[1].url} className="hover:text-gray-400 cursor-pointer">
                  <FaInstagram size={24} className='' />
                </a>
              </li>
              <li className="mr-4 mt-2">
                <a href={footerData.connectWithUs[2].url} className="hover:text-gray-400 cursor-pointer">
                  <FaLinkedin size={24} className='' />
                </a>
              </li>
              <li className='mr-4 mt-2'>
                <a href={footerData.connectWithUs[3].url} className="hover:text-gray-400 cursor-pointer">
                  <FaYoutube size={24} className='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <div className="flex justify-between items-center">
          <p className="text-xs">{footerData.email}</p>
          <p className="text-xs">{footerData.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;