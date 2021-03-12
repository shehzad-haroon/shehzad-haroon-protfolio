import React from 'react'
import {Card,CardGroup} from 'react-bootstrap'
import RubberBand from 'react-reveal/RubberBand';
import Spin from 'react-reveal/Spin';
import Wobble from 'react-reveal/Wobble';

function Service() {

    
    return (
        <div id="M-">
            {/* <hr class="hr-style-left py-3" /> */}
           {/* <strong> <h3 className="text-center text-dark bg-white py-0 my-0 px-0 my-0 ">My Services</h3> </strong> */}
           <strong> <h2 className="text-center bg-light text-info ">My Services</h2> </strong>

           <RubberBand top right>
            <CardGroup >
  <Card> 
   <Wobble> <Card.Img variant="top" src="https://aqi.co.id/wp-content/uploads/2020/12/Peranan-AI-dalam-Web-Development.jpg" height="300px" /></Wobble>
    <Card.Body>
      <Card.Title className="text-center">Web Development</Card.Title>
      <Spin> <Card.Text className="text-center">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer  This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer
      </Card.Text>
      </Spin>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <Wobble> <Card.Img variant="top" src="https://image.freepik.com/free-vector/app-development-banner_33099-1720.jpg" height="300px" /></Wobble>
    <Card.Body>
      <Card.Title className="text-center">Progressive App Development</Card.Title>
      <Spin><Card.Text className="text-center">
      This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer  This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer  
      </Card.Text> </Spin>
    </Card.Body>
  </Card>
  <Card>
  <Wobble><Card.Img variant="top" src="https://spectrum.ieee.org/image/MzYzNjYzMw.jpeg" height="300px" /></Wobble>
    <Card.Body>
      <Card.Title className="text-center">Softwere Development</Card.Title>
      <Spin> <Card.Text className="text-center">
      This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer  This is a wider card with supporting text below as a natural lead-in to
        additioal content. This content is a little bit longer 
      </Card.Text> </Spin>
    </Card.Body>
  </Card>
</CardGroup>
</RubberBand>
        </div>
    )
}

export default Service
