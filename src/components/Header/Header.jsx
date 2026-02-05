
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <div>
      <div className='header flex justify-between px-6 py-3 items-center bg-white shadow-lg shadow-green-300/40'>
        <HeaderLogo />
        <HeaderNav />
      </div>
    </div>
  )
}

export default Header
