"use client"

import React from 'react'
import {usePathname} from "next/navigation"
import Link from 'next/link';

const MainNav = ({data}:{data:any}) => {
  const pathname = usePathname();

  const routes = data.map((route:any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav>
      {
        routes.map((route:any)=>{
          <Link 
            key={route.href}
            href={route.href}
            className= 
            {`text-sm font-medium transition-colors hover:text-black 
            ${route.active ? 'text-black' : 'text-neutral-500'}`}
          >
            {route.label}
          </Link>
        }) 
      }
    </nav>
  )

}

export default MainNav