import React, { Component } from 'react';
import { Jumbotron, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';

import Scroll from '../Scroll'

class Main extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Jumbotron >
      <Row id="start">
        <Col xs="auto">
          <img height="400" widhth="800" src="https://images.unsplash.com/photo-1517483141275-296bb15890b2?ixlib=rb-0.3.5&s=0720496303fbe630fa07eabd5ed1aee0&auto=format&fit=crop&w=1351&q=80" alt="obrazek"/>
        </Col>
        <Col xs="6">
          <br></br>
          <h1>Małgorzata Hałucha-Wojdowska </h1>
          <h2>Psycholog Psychoterapeuta </h2>
          <Button color="primary" 
              onClick={this.toggle} 
              style={{ marginBottom: '1rem' }}> Więcej informacji
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                  Jestem psychologiem, terapeutą ??? kogo ??. Pomagam ??? komu ?? w czym???, diagnozuję ??? coś tam???, pracuję indywidualnie i grupowo. 
                  Moim celem zawsze jest poprawa jakości i komfortu życia wszystkich osób bliskich i zainteresowanego terapią pacjenta. Moja praca polega na budowaniu szczerej relacji .... 
                  Pracuję pod stałą superwizją w nurcie poznawczo – behawioralnym, który jest udowodnioną naukowo metodą leczenia. 
                  Jestem członkiem Towarzystwa Psychologicznego.
              </CardBody>
            </Card>
          </Collapse>
        </Col>
      </Row>  
      <Row>
        <Scroll where="oferta" />
      </Row>
      </Jumbotron>
    );
  }
}

export default Main;