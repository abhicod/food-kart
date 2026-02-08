import logo from '../../assets/logo.png'

const HeaderLogo = () => {
  return (
    <div>
      <div className="logo w-15 flex gap-3 items-center">
            <img src={logo} className='rounded-[50%]' alt="Logo" />
            <h1 className='text-xl font-extrabold text-gray-500 '>FOOD KART</h1>
        </div>
    </div>
  )
}

export default HeaderLogo
