import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social as socials } from './data';
import logo from './logo.svg';
function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const linksContaineRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            linksContaineRef.current.style.height = `${linksHeight}px`
        } else {
            linksContaineRef.current.style.height = '0px'
        }
    }, [showLinks])
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='title' />
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContaineRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map(link => {
                            const { id, url, text } = link
                            return <li key={id}><a href={url}>{text}</a></li>
                        })}
                    </ul>
                </div>

                <ul className='social-icons'>
                    {socials.map(social => {
                        const { id, url, icon } = social
                        return <li key={id}><a href={url}>{icon}</a></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
