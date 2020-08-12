import React, {useState} from 'react';
import {
  Container,
} from 'react-bootstrap';
import {getBirdsDataImage} from '../getBirdsData/getBirdsData';
import DescriptionBase from './DescriptionBase';
import birdsList from '../../utils/birdsList';

const Description = () => {
  const defaultDescription = <>
    <p className="pt-3">Послушайте аудио.</p>
    <p className="pb-3">Выберите птицу из списка.</p>
  </>
  const data = birdsList[0][0];
  const description = <DescriptionBase name={data.name} translation={data.translation} image={data.image} />
  // const [description, setDescription] = useState(defaultDescription);
  // getBirdsDataImage('Karakara')
  return (
    <Container className="description">
      {description}
    </Container>
  )
};

export default Description;
