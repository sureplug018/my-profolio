import { ComponentType } from 'react';

interface SkillProps {
  icon: ComponentType;
  name: string;
  color: string;
}

function Skill({ icon: Icon, name, color }: SkillProps) {
  return (
    <div className='flex flex-col border border-gray-300 mb-2 py-1 px-2 rounded-lg items-center shadow-md hover:shadow-lg cursor-pointer'>
      <span className={`text-2xl ${color}`}>
        <Icon />
      </span>
      <span className='text-xs font-normal'>{name}</span>
    </div>
  );
}

export default Skill;
