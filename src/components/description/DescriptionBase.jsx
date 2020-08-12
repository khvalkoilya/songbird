import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
// import imageDefault from '../../assets/base.jpg'

const DescriptionBase = ({name, translation, image}) => {
  return (
    <Row>
      <Col xs={12} lg={6} xl={5}>
        <img
          src={image}
          className="description-image mt-3"
          alt="bird"
        />
      </Col>
      <Col xs={12} lg={6} xl={7}>
        <p className="description-name mt-2 mt-lg-3">{name}</p>
        <hr />
        <p className="description-translation">{translation}</p>
        <hr />
        <p className="description-audio">Lfrgrgrg</p>
      </Col>
      <Col xs={12}>
        <p className="description-text">Птичка это очеьн акрп икнпмл мал ка нкгмакгмнкманк мнгки акнгаикн икн акнгаи к иакнгаи книа кни анки</p>
      </Col>
    </Row>
  )
}

export default DescriptionBase;