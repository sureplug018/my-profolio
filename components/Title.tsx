interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <p className='text-center text-primary m-auto underline underline-offset-4 font-extrabold text-2xl mb-6'>
      {text}
    </p>
  );
}

export default Title;
