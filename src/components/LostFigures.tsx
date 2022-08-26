import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface ILostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<ILostFiguresProps> = ({title, figures}) => {
  return (
    <div className='col h-75 bg-light rounded'>
      <h3>{title}</h3>
      {figures.map(figure => 
      <div key={figure.id}>
        {figure.name}
        {figure.logo && <img src={figure.logo} alt={figure.name}/>}
      </div>
      )}
    </div>
  );
};

export default LostFigures;