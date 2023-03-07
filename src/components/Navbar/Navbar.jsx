import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Avatar from '../Avatar/Avatar';

import images from '../../constants/images';
import './Navbar.scss';

function Navbar() {
    const links = ['Inicio', 'Perfil'];

    const routes = [
        { to: '/home', text: 'Inicio' },
        { to: '/profile', text: 'Perfil' },
    ];

    const [toggleMenu, setToggleMenu] = useState(true);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="" />
            </div>
            <ul className="app__navbar-links">
                {routes.map((route) => (
                    <li className="app__flex p-text" key={`link-${route.text}`}>
                        <div />
                        <NavLink
                            to={route.to}
                            className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-toogle">
                <div className="app__navbar-toogle-avatar">
                    <Avatar imgSrc={images.userImg} />
                </div>

                <div className="app__navbar-menu">
                    <HiMenuAlt4 onClick={() => setToggleMenu(true)} />

                    {toggleMenu && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggleMenu(false)} />
                            <ul>
                                {links.map((route) => (
                                    <li key={route}>
                                        <a
                                            href={`#${route}`}
                                            onClick={() => setToggleMenu(false)}
                                        >
                                            {route}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
