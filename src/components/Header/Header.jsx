
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <div>
      <div className='header flex justify-between px-6 py-3 items-center bg-gray-100 shadow-lg shadow-black-300/50 fixed w-full z-10 top-0 left-0'>
        <HeaderLogo />
        <HeaderNav />
      </div>
    </div>
  )
}

export default Header
