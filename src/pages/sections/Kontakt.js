import React from 'react'
import { Jumbotron, Row, Col } from 'reactstrap';

import Mapa from './Mapa'
import Scroll from '../Scroll'

const Kontakt = ()=>
  (
    <Jumbotron id="kontakt">
        <Scroll where="start" />
        <h2> Kontakt </h2>
      <Row>
        <Col xs="5">
        <h4> Chcesz umówić się na wizytę? </h4>
        <p> Zadzwoń od poniedziałku do piątku w godzinach od 16:00 do 21:00 pod numer telefonu +48 501 047 391 (gdy nie odbieram, to proszę o pozostawienie wiadomości - oddzwonię).</p>
        <h4> Jak do trafić do gabinetu? </h4>
        <p> Przyjmuję w gabinecie na ul. Tomasza Zana 14, gmina Stare Babice, miejscowość Latchorzew.</p>
        </Col>
        <Col xs="auto">
          <Mapa />
        </Col>  
      </Row>
      </Jumbotron>
   )

export default Kontakt;