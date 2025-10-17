import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import Skill from './Skill';

function Skills() {
  const frontendSkills = [
    { icon: FaHtml5, name: 'HTML 5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS 3', color: 'text-blue-500' },
    { icon: IoLogoJavascript, name: 'Javascript', color: 'text-yellow-500' },
    { icon: FaBootstrap, name: 'Bootstrap', color: 'text-purple-600' },
    { icon: RiTailwindCssFill, name: 'Tailwind', color: 'text-blue-400' },
    { icon: FaReact, name: 'React', color: 'text-cyan-500' },
    { icon: RiNextjsFill, name: 'NextJs', color: 'text-black' },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: 'NodeJs', color: 'text-green-800' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-900' },
    { icon: SiMysql, name: 'MySQL', color: 'text-cyan-950' },
    { icon: SiPostgresql, name: 'Postgresql', color: 'text-cyan-800' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
  ];
  return (
    <div className='w-[90%] md:w-[80%] m-auto'>
      <p className='text-center text-primary m-auto underline underline-offset-4 font-extrabold text-2xl mb-6'>
        My Skills
      </p>
      <div className='text-center mb-4'>
        <p className='text-dark font-bold'>Frontend Development</p>
        <div className='mb-4'>
          Experienced frontend developer crafting sleek, user-friendly web
          interfaces.
        </div>
        <div className='grid md:grid-cols-7 lg:grid-cols-7 grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-[90%] m-auto'>
          {frontendSkills.map((skill, index) => (
            <Skill
              color={skill.color}
              key={index + 1}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>

      <div className='text-center mb-4'>
        <p className='text-dark font-bold'>Backend Development</p>
        <div className='mb-4'>
          Skilled in developing secured and scalable server-side solutions and
          expertise in RESTful APIs and database management.
        </div>

        <div className='grid md:grid-cols-5 lg:grid-cols-5 grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-[90%] m-auto'>
          {backendSkills.map((skill, index) => (
            <Skill
              color={skill.color}
              key={index + 1}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
