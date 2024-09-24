import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project1.png',
      title: 'Frontend Food Delivery Website',
      tags: ['React', 'MVC', 'Development'],
      projectLink: 'https://go-food-go.vercel.app/'
    },
    {
      imgSrc: '/images/project2.png',
      title: 'Frontend Food Donation Website',
      tags: ['HTML', 'CSS','Js'],
      projectLink: 'https://anujagarwal28.github.io/Food-Rescue-Connect/'
    },
    {
      imgSrc: '/images/project3.png',
      title: 'Frontend E-commerce Website',
      tags: ['eCommerce', 'HTML', 'CSS', 'Js'],
      projectLink: 'https://anujagarwal28.github.io/e-commerce_website/'
    },
    {
      imgSrc: '/images/project4.png',
      title: 'Task Navigator',
      tags: ['React','MVC', 'Development'],
      projectLink: 'https://anujagarwal28.github.io/Todo_React/'
    },
    {
      imgSrc: '/images/project5.png',
      title: 'Bg Changer',
      tags: ['React', 'Development'],
      projectLink: 'https://anujagarwal28.github.io/Bg_Color_Changer/'
    },
    {
      imgSrc: '/images/project6.png',
      title: 'Password Generator',
      tags: ['React','MVC'],
      projectLink: 'https://anujagarwal28.github.io/Password-Generator/'
    },
  ];

const Work = () => {
  return (
    <section
    id="work"
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
            Portfolio Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />

                ))}
            </div>
        </div>
    </section>
  )
}

export default Work