import React, { useContext, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/auth'

function MenuBar() {
  const { user, logout} = useContext(AuthContext)
  const pathname = window.location.pathname;

  const path = pathname === '/social-app/' ? 'home' : pathname.substr(1)

  const [activeItem, setActiveItem] = useState(path)

  const handleItemClick = (e, { name }) => setActiveItem(name)

  const menuBar = user ? (
    <Menu tabular color="teal">
        <Menu.Item
          name={user.username}
          active
          as={Link}
          to="/social-app/"
        />
        <Menu.Item
          name='favourite'
          active
          as={Link}
          to="/social-app/favourite"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name='logout'
            onClick={logout}
          />

        </Menu.Menu>
      </Menu>
  ) : (
    <Menu tabular color="teal">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/social-app/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/social-app/login"
          />
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/social-app/register"
          />
        </Menu.Menu>
      </Menu>
  )

  return menuBar;
}



export default MenuBar;
