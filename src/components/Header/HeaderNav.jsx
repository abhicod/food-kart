import { ShoppingCart } from 'lucide-react';

const HeaderNav = () => {
  return (
    <div>
      <div className="navItems pr-10">
            <ul className='flex space-x-17 font-semibold text-xl'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><ShoppingCart size={35} /></li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderNav
