import React from 'react'
import { ButtonPrimary } from './Button';
const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    // {
    //   label: 'Reviews',
    //   href: '#reviews'
    // },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/anujagarwal28'
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/anujagarwal28'
    },
  ];
const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[15ch]">
                    Let’s Team Up Now!
                    </h2>
                    <button className='bg-sky-400 rounded-xl w-36 h-8 text-zinc-950 text-sm hover:bg-sky-300' > <a href="mailto:agarwalanuj163@gmail.com">Start Project</a></button>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div className="">
                        <p className="mb-2">SiteMap</p>
                        <ul>
                            {sitemap .map(({label, href}, key ) =>(
                                <li key={key}>
                                    <a 
                                    href={href}
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="">
                        <p className="mb-2">Socials</p>
                        <ul>
                            {socials.map(({label, href}, key ) =>(
                                <li key={key}>
                                    <a 
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                href=""
                className=""
                >
                    <img 
                    src="logo.png"
                    width={80}
                    height={80} 
                    alt="Logo" 
                    />
                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">Anuj Agarwal</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer