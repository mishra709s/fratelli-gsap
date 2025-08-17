import { ShoppingCart, User, Search } from 'lucide-react'
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-between align-middle text-white uppercase gap-8">
        <a href="http://">Our Story</a>
        <a href="http://">Estate</a>
        <a href="http://">Investor</a>
      </div>
      <img src="/images/fratelli-nav-logo.svg" className="w-[200px]" />
      {/* <img src="/images/menu.svg" className="w-10" /> */}
      <div className="flex justify-between align-middle text-white uppercase gap-5">
        <a href="http://">Shop</a>
        <a href="http://">Discover</a>
        <ShoppingCart />
        <User />
        <Search />
      </div>
    </nav>
  )
}

export default NavBar
