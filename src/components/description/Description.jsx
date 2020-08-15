import React, {useContext} from 'react';
import {
  Container,
} from 'react-bootstrap';
import {getBirdsDataImage} from '../getBirdsData/getBirdsData';
import DescriptionBase from './DescriptionBase';
// import birdsList from '../../utils/birdsList';
import birdsData from '../../utils/birdsTest';
import {Context} from '../context/Context';

const Description = () => {
  const defaultDescription = <>
    <p className="pt-3">Послушайте аудио.</p>
    <p className="pb-3">Выберите птицу из списка.</p>
  </>
  const {currentLevel, currentNumberOfBird} = useContext(Context);
  const data = birdsData[currentLevel][currentNumberOfBird];
  const description = <DescriptionBase name={data.name} translation={data.species} image={data.image} description={data.description}/>
  // const [description, setDescription] = useState(defaultDescription);
  getBirdsDataImage('eagle')
  return (
    <Container className="description">
      {description}
    </Container>
  )
};

export default Description;
