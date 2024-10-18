const abouts = [
  {
    id: 2,
    title: 'Ph.D',
    description:`I am pursuing a Ph.D. at Vignan University, Vadlamudi, with a focus on machine learning, deep learning, AI, and cybersecurity. My research explores innovative solutions in these domains, particularly enhancing security protocols using advanced AI techniques. I have actively contributed to the academic community through the publication of one research paper and have presented my findings at seven conferences. My work aims to bridge theoretical advancements and practical applications, driving impactful innovations in the fields of cybersecurity and artificial intelligence.`,
    date: 'Pursuing',
    category: { title: 'BTech', href: '#' },

  },
  {
    id: 3,
    title: 'Masters',
    description:`I completed my Master's degree in Computer Science and Engineering from KKR & KSR Institute of Science and Technology, Vinjanumpadu, Guntur, affiliated with JNTU Kakinada in 2014. This advanced program further honed my technical expertise, particularly in specialized areas of computer science, and I graduated with 85%.`,
    date: '2012-2014',
    category: { title: 'MTech', href: '#' },

  },
  {
    id: 4,
    title: 'Graduation',
    description:`I earned my Bachelor's degree in Computer Science and Engineering from St. Mary’s Engineering College, Chebrolu, Guntur, under JNTU Kakinada in 2011. This program provided a strong foundation in core computer science concepts and engineering principles, where I developed technical skills and problem-solving abilities. I secured 68% during this course.`,
    date: '2007-2011',
    category: { title: 'BTech', href: '#' },

  },
  {
    id: 5,
    title: 'Intermediate',
    description:'I completed my Intermediate education from Bhanu Jr College, Guntur, in 2007, securing 72%. This stage provided me with an in-depth understanding of subjects like mathematics, physics, and chemistry, which strengthened my analytical abilities and prepared me for my engineering studies.',
    date: 'April, 2007',
    category: { title: 'Science', href: '#' },
  },

  {
    id: 6,
    title: 'School',
    description:'I completed my SSC (10th grade) from Z.P. High School, Narakoduru, Guntur, in 2005, achieving 70%. This foundational stage equipped me with essential knowledge across a range of subjects, building a strong academic base for my future education.',
    date: '2005',
    category: { title: 'General', href: '#' },
  },
  // More abouts...
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Y. Bhanu Prasad is a highly skilled Database Administrator and Java Full Stack Developer with over seven years of experience in web-based application development and database management. He holds a Master’s degree in Computer Science and Engineering from JNTU Kakinada University and is currently pursuing a Ph.D. at Vignan's Foundation for Science, Technology and Research (VFSTR). His technical expertise encompasses Oracle 12c, PostgreSQL, and MongoDB, along with a strong proficiency in Java technologies, including Spring Boot and J2EE. Bhanu has successfully managed various database migration projects and is adept at configuring and administering server environments. His commitment to professional development is reflected in multiple faculty development programs and online certifications in relevant fields. Additionally, he has contributed to academic research in Cyber Security, Deep Learning, and Cloud Computing, publishing several papers in indexed journals. Known for his effective communication and collaborative skills, Bhanu is dedicated to leveraging new technologies to deliver innovative solutions in his field.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {abouts.map((about) => (
            <article key={about.id} className="flex max-w-xl flex-col items-start rounded-xl border border-gray-300 p-4 hover:border-gray-500 transition duration-300 hover:shadow-lg hover:shadow-gray-500/50">
              <div className="flex items-center gap-x-4 text-sm">
                <time className="text-gray-500">
                  {about.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  <u> {about.title}</u>
                </h3>
                <p className="mt-5 line-clamp-8 text-md leading-6 text-gray-600 text-justify">{about.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
