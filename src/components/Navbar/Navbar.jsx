import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Avatar from '../Avatar/Avatar';

import images from '../../constants/images';
import './Navbar.scss';

function Navbar() {
    const links = ['Inicio', 'Perfil'];
    const [toggleMenu, setToggleMenu] = useState(true);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="" />
            </div>
            <ul className="app__navbar-links">
                {links.map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
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
                                {links.map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item}`}
                                            onClick={() => setToggleMenu(false)}
                                        >
                                            {item}
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
