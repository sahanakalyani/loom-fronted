import { Icon } from 'lucide-react'
import React from 'react'
const NAV_ICON_INACTIVE="text gray100 group-hover:text-black"
const NAV_ICON_ACTIVE="text gray800 group-hover:text-black"

const NavItem = ({Icon, active, size}) => {
    return(
    <Icon
    size={size}
    className={`${active ? NAV_ICON_ACTIVE:NAV_ICON_INACTIVE}`}
    />

   )
}
   

  


export default NavItem