import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <div>
      <Link to="/"><div className="logo w-16 flex gap-2 ml-6 items-center">
            <img src={logo} className='rounded-[50%]' alt="Logo" />
            {/* <h1 className='text-xl font-extrabold text-gray-500 '>FOOD KART</h1> */}
        </div>
        </Link>
    </div>
  )
}

export default HeaderLogo
