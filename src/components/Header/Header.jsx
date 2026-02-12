
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <div>
      <div className='header flex justify-between px-6 py-3 items-center bg-gray-100 shadow-lg shadow-black-300/50'>
        <HeaderLogo />
        <HeaderNav />
      </div>
    </div>
  )
}

export default Header
