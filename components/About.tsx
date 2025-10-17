import Container from './Container';
import Title from './Title';

function About() {
  return (
    <div id='about-me' className='scroll-mt-40'>
      <Container type='container'>
        <div className='w-[90%] text-center m-auto lg:w-[70%]'>
          <Title text='About Me' />
          <p className='mb-4'>
            I&apos;m Raphael Eze, a full-stack developer passionate about
            crafting innovative, user-focused web applications. With a knack for
            problem-solving and a commitment to clean, efficient code, I build
            dynamic, responsive web applications that blend creativity and
            functionality. Connect with me to collaborate on exciting projects.
          </p>
          <p>
            Outside of coding, I&apos;m an avid gamer, diving into immersive
            video game worlds that spark creativity and sharpen my strategic
            thinking. I&apos;m equally excited about learning the latest tech
            innovations, from AI advancements to cutting-edge frameworks,
            keeping me inspired and ahead of the curve in the ever-evolving tech
            landscape.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
