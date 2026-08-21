import React from 'react'
import { Link } from "react-router"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black text-white h-15 p-8 bg-black'>
     <div className='flex items-center'>
    <span className='text-xl elsie-black tracking-tight'>CraftCV</span>
     </div>





   <div className='flex gap-2'>
   <NavigationMenu>
  <NavigationMenuList>

    <NavigationMenuItem>
      <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='flex flex-col gap-2 p-4 w-48 bg-black text-white text-sm'>
          <li><NavigationMenuLink asChild><Link to='/' className='hover:text-white/60 transition-colors'>Engineering</Link></NavigationMenuLink></li>
          <li><NavigationMenuLink asChild><Link to='/' className='hover:text-white/60 transition-colors'>Design & Creative</Link></NavigationMenuLink></li>
          <li><NavigationMenuLink asChild><Link to='/' className='hover:text-white/60 transition-colors'>Business & Finance</Link></NavigationMenuLink></li>
          <li><NavigationMenuLink asChild><Link to='/' className='hover:text-white/60 transition-colors'>Fresh Graduate</Link></NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to='/' className='px-4 py-2 text-sm hover:text-white/60 transition-colors'>Features</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to='/' className='px-4 py-2 text-sm hover:text-white/60 transition-colors'>Pricing</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>
</div>



<div className='flex gap-4 '>
    <button className='cursor-pointer'>Login</button>
    <button className='text-black bg-white p-3 rounded-3xl cursor-pointer'>Sign Up</button>
</div>
</nav>
  )
}

export default Navbar
