const experiences = [
    
    {
        id: 1,
        title:"Senior Software Engineer",
        description:"Leading software development and system management initiatives within the university",
        location:"Vignan University, Vadlamudi, Guntur",
        date: "Sep 2023 - Present" 
    },
    {
        id:2,
        title:"Database Administrator",
        description:"Managed and optimized databases, ensuring efficient performance and data security",
        location:"Amaravati HR Services (Client: VIT-AP University, Amaravati)",
        date: "Sep 2017 – Sep 2023"
    },
    {
        id:3,
        title:"Assistant Professor",
        description:"Department of Computer Science and Engineering, Taught computer science subjects and mentored students in various academic projects.",
        location: "RVR & JC College of Engineering, Guntur, AP",
        date:"Dec 2015 – Jul 2017"
    }
  ]
  
  export default function Experience() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Experience</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.id} className="flex max-w-xl flex-col items-start border p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-x-4 text-sm">
                  <time className="text-gray-500">
                    {experience.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    <u> {experience.title}</u>
                  </h3>
                  <p className="mt-5 line-clamp-8 text-md leading-6 text-gray-600 text-justify">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  