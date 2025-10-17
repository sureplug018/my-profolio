import Link from 'next/link';
import Button from './Button';
import Card from './Card';
import Container from './Container';
import Title from './Title';
import { projects, Project } from '@/data/projects';

function Projects() {
  return (
    <div className='mt-20'>
      <Container type='full'>
        <Title text='Projects' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[90%] m-auto gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
          {projects.map((project: Project, index: number) => (
            <Card key={index}>
              <div
                className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg'
                data-alt='Screenshot of an e-commerce website homepage.'
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>
              <div className='pb-6 px-3'>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-text-dark mt-2 text-2xl font-bold'>
                    {project.name}
                  </h2>
                  <p className='text-text-dark/80 /70 text-base font-normal leading-relaxed'>
                    {project.description}
                  </p>
                  <div className='flex gap-2 mt-2 text-sm'>
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex}>{tech},</span>
                    ))}
                  </div>
                </div>
                <div className='flex flex-row space-x-20 mt-5 items-center justify-between'>
                  <Link href={project.gitUrl}>
                    <span className='bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium'>{`</>`}</span>
                  </Link>
                  <Link href={project.siteUrl}>
                    <Button type='smallSecondary'>{`Visit URL`}</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
