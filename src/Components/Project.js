import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import expense from '../Images/expense.png'
import covid from '../Images/covid.png'
import shoe from '../Images/shoe.png'
import anim from '../Images/anim.png'
import Roll from 'react-reveal/Roll';
import Spin from 'react-reveal/Spin';

function Project() {
    return (
        <div id="p">
            {/* <hr class="hr-style-left py-3" /> */}
            <strong> <h2 className="text-center text-warning bg-dark font-weight-bolder">My Projects</h2> </strong>

            <Roll top> <Container className="bg-transparent py-4 px-4">
            <Spin>  <Row>
                <Col xs={12} md={4}  lg={6}>
                    <a href="http://covid-app-by-shehzad-haroon.surge.sh" target="_blank" className="text-center">   <Image src={covid} thumbnail />
                    <h4  className="text-center bg-dark text-warning font-weight-bolder" id="p">View Covid19 Tracker App</h4>
                    </a>
                    </Col>
                    <Col xs={12} md={4}  lg={6}>
                    <a href="http://shoe-app-by-shehzad-haroon.surge.sh" target="_blank" className="text-center">   <Image src={shoe} thumbnail />
                    <h4  className="text-center bg-dark text-warning font-weight-bolder" id="p">View Shoe Store</h4>
                    </a>
                    </Col>
                </Row>
                <Row className="py-4 px-8">
                <Col xs={12} md={4} lg={6}>
                <a href="http://expense-tracker-by-shehzad.surge.sh" target="_blank" className="text-center"><Image src={expense} thumbnail  />
                 <h4  className="text-center bg-dark text-warning font-weight-bolder" id="p">View Expense Tracker App</h4>
                        </a>
                    </Col> 
                    <Col xs={12} md={4}  lg={6}>
                    <a href="http://queen-race-by-shehzad-haroon.surge.sh" target="_blank" className="text-center">   <Image src={anim} thumbnail />
                    <h4  className="text-center bg-dark text-warning font-weight-bolder" id="p">View Red Queen Race</h4>
                    </a>
                    </Col>
                   </Row> </Spin> 
            </Container></Roll>
        </div>
    )
}

export default Project




