import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  // {
  //   imgSrc: '/images/figma.svg',
  //   label: 'Figma',
  //   desc: 'Design tool'
  // },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Website'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  // {
  //   imgSrc: '/images/mongodb.svg',
  //   label: 'MongoDB',
  //   desc: 'Database'
  // },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/bootstrap.svg',
    label: 'Bootstrap',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/vscode.svg',
    label: 'VS Code',
    desc: 'Code Editor'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'Github',
    desc: 'Open Source'
  },
];


const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">
        Here is my key Tech Stack
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        Delve into the powerful technologies that fuel my creation of exceptional, high-performing WebApps.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc, label, desc }, key)=>(
              <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills