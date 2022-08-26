import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface ILostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<ILostFiguresProps> = ({title, figures}) => {
  return (
    <div className='col h-75 bg-info bg-gradient rounded'>
      <h3 className='fs-4 text-center'>{title}</h3>
      {figures.map(figure => 
      <div
      className='d-flex flex-row justify-content-between align-items-center mt-1 mb-1'
      key={figure.id}>
        {figure.name}
        {figure.logo && <img className='lost-figure' src={figure.logo} alt={figure.name}/>}
      </div>
      )}
    </div>
  );
};

export default LostFigures;