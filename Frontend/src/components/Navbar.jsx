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
    <nav className='flex justify-between items-center bg-black text-white h-15 p-8'>
     <div className='flex'>
    <img src="" alt="" /> logo

     </div>




   <div className='flex gap-2'>
   <NavigationMenu>
  <NavigationMenuList>

    <NavigationMenuItem>
      <NavigationMenuTrigger>About</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      Features
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
