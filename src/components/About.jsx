import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    // {
    //   label: 'Years of experience',
    //   number: 10
    // }
  ];


const About = ()=> {
  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Hello, I'm Anuj Agarwal. <br />
                As a React JS developer, I turn complexity into simplicity, crafting sleek, high-performance web applications that users love. My foundation in Data Structures and Algorithms fuels my ability to build fast, responsive, and scalable interfaces. Whether it's optimizing user interactions or solving intricate problems, I’m driven to innovate and elevate the web experience for the next generation of digital solutions.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label,number}, key)=>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    <img 
                        src="logo.png" 
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[60px] md:h-[60px]" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About