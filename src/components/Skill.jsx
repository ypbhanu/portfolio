import React from 'react';
import ORACLE from '../assets/oracle.png';
import JDBC from '../assets/jdbc.jpeg';
import MVC from "../assets/mvc.png"
import HIBERNATE from '../assets/hiber.jpeg';
import MONGO from '../assets/Mongodb.png';
import TOMCAT from '../assets/tomcat.png';
import JSP from '../assets/jsp.png';
import INTELLIJ from '../assets/intellij.jpeg';
import LOG from '../assets/log4j.png';
import CSS from '../assets/css.png';
import JNDI from '../assets/jndi.jpeg';
import POWER from '../assets/power.jpeg';
import SVN from '../assets/svn.png';
import GITHUB from '../assets/github.png';
import HTML from '../assets/html.png';
import PYTHON from '../assets/python.png';
import SPRING from '../assets/spring.png';
import JAVA from '../assets/java.png';
import R from '../assets/rpro.jpeg';
import HADOOP from '../assets/hadoop.jpeg';
import PHP from '../assets/php.png';
import BOOT from '../assets/boot.png';
import MYSQL from '../assets/mysql.png';
import THYME from '../assets/thyme.png';
import LINUX from '../assets/linux.png';
import POTSGRE from '../assets/postgre.png';


// import { HorizontalLine } from './HorizontalLine'
 const SkillCard = ({ name, title, image }) => {
    return (
        <div className="p-4 rounded-md shadow-md bg-white">
            <div className="flex justify-center mb-4">
                <img src={image} alt={name} className="w-24 h-24 rounded-full" />
            </div>
            <h3 className="text-lg text-center font-semibold mb-2">{name}</h3>
            <p className="text-gray-500 text-center mb-4">{title}</p>
        </div>
    );
};

const HorizontalLine = () => {
    return (
      <div className="pt-20">
        <hr className="border-gray-500" />
      </div>
    );
  };
const Skill = () => {
    const skills = [
        {
            name: 'Oracle 8i',
            title: 'Advanced',
            image: ORACLE,
        },
        {
            name: 'JDBC',
            title: 'Advanced',
            image: JDBC,
        },
        {
            name: 'MVC',
            title: 'Advanced',
            image: MVC,
        },
        {
            name: 'Hibernate/JPA',
            title: 'Advanced',
            image: HIBERNATE,
        },
        {
            name: 'IntelliJ',
            title: 'Advanced',
            image: INTELLIJ,
        },
        {
            name: 'MongoDB',
            title: 'Advanced',
            image: MONGO,
        },
        {
            name: 'JSP & Servlets',
            title: 'Advanced',
            image: JSP,
        },
        {
            name: 'Tomcat Webserver',
            title: 'Advanced',
            image: TOMCAT,
        },
        {
            name: 'Log4j ',
            title: 'Advanced',
            image: LOG,
        },
        {
            name: 'JNDI',
            title: 'Advanced',
            image: JNDI,
        },
        {
            name: 'Power BI Report Server',
            title: 'Advanced',
            image: POWER,
        },
        {
            name: 'SVN',
            title: 'Advanced',
            image: SVN,
        },
        {
            name: 'GitHub',
            title: 'Intermediate',
            image: GITHUB,
        },
        {
            name: 'Python',
            title: 'Intermediate',
            image: PYTHON,
        },
        {
            name: 'Spring and Spring Boot',
            title: 'Intermediate',
            image: SPRING,
        },
        {
            name: 'JAVA',
            title: 'Intermediate',
            image: JAVA,
        },
        {
            name: 'HTML',
            title: 'Advanced',
            image: HTML,
        },
        {
            name: 'CSS',
            title: 'Advanced',
            image: CSS,
        },
        {
            name: 'R-Programming',
            title: 'Advanced',
            image: R,
        },
        {
            name: 'Hadoop',
            title: 'Advanced',
            image: HADOOP,
        },
        {
            name: 'Linux',
            title: 'Advanced',
            image: LINUX,
        },
        {
            name: 'Bootstrap',
            title: 'Advanced',
            image: BOOT,
        },
        {
            name: 'Thymeleaf',
            title: 'Advanced',
            image: THYME,
        },
        {
            name: 'PHP',
            title: 'Intermediate',
            image: PHP,
        },
        {
            name: 'MySQL',
            title: 'Intermediate',
            image: MYSQL,
        },
        {
            name: 'PostgreSQL',
            title: 'Intermediate',
            image: POTSGRE,
        },
    ];

    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Skills</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Here are some of my skills
                    </p>
                </div>
                <HorizontalLine/>
                <div className="container pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {skills.map((profile, index) => (
                            <SkillCard key={index} {...profile} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;