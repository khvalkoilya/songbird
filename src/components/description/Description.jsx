import React, { useContext, useEffect } from 'react';
import {
  Container,
} from 'react-bootstrap';
import { getBirdsDataImage } from '../getBirdsData/getBirdsData';
import DescriptionBase from './DescriptionBase';
import birdsList from '../../utils/birdsList';
import birdsData from '../../utils/birdsTest';
import Context from '../context/Context';

const Description = () => {
  const defaultDescription = (
    <>
      <p className="pt-3">Послушайте аудио.</p>
      <p className="pb-3">Выберите птицу из списка.</p>
    </>
  );
  const { currentLevel, currentNumberOfBird, defaultDescriptionOfBird } = useContext(Context);
  const data = birdsList[currentLevel][currentNumberOfBird];
  const description = defaultDescriptionOfBird
    ? defaultDescription
    : (
      <DescriptionBase
        name={data.name}
        translation={data.species}
        image={data.image}
        description={data.description}
        audio={data.audio}
      />
    );
  getBirdsDataImage('Otis tarda')
  useEffect(() => {
    if (!defaultDescriptionOfBird) {
      document.querySelector('.description-audio > div > audio').pause();
    }
  });
  return (
    <Container className="description">
      {description}
    </Container>
  );
};

export default Description;
