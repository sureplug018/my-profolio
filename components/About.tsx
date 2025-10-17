import Container from './Container';

function About() {
  return (
    <Container>
      <p className='text-center text-primary m-auto underline underline-offset-4 font-extrabold text-2xl mb-4'>
        About Me
      </p>
      <p className='mb-4'>
        I'm Raphael Eze, a full-stack developer passionate about crafting
        innovative, user-focused web applications. With a knack for
        problem-solving and a commitment to clean, efficient code, I build
        dynamic, responsive web applications that blend creativity and
        functionality. Connect with me to collaborate on exciting projects.
      </p>
      <p>
        Outside of coding, I’m an avid gamer, diving into immersive video game
        worlds that spark creativity and sharpen my strategic thinking. I’m
        equally excited about learning the latest tech innovations, from AI
        advancements to cutting-edge frameworks, keeping me inspired and ahead
        of the curve in the ever-evolving tech landscape.
      </p>
    </Container>
  );
}

export default About;
