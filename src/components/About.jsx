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
                Welcome! I am Anuj Agarwal, a results-driven software developer with a good foundation in Data Structures and Algorithms (DSA) and extensive experience in Frontend Development, particularly with React js. I am eager to apply my analytical problem-solving skills and expertise in building optimized, user-centric web applications to contribute to a forward-thinking development team.
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
                        src="pic.jpg" 
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About