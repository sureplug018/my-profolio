import { ComponentType } from 'react';
import Card from './Card';

interface SkillProps {
  icon: ComponentType;
  name: string;
  color: string;
}

function Skill({ icon: Icon, name, color }: SkillProps) {
  return (
    <Card>
      <span className={`text-2xl ${color}`}>
        <Icon />
      </span>
      <span className='text-xs font-normal'>{name}</span>
    </Card>
  );
}

export default Skill;
