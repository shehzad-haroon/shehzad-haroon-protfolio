import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row, Button } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Spin from 'react-reveal/Spin';
import Flash from 'react-reveal/Flash';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function About() {
  const classes = useStyles();
  return (

    <div id="about">

      <section id="golf">
        <div class="fluid-container">
          <div class="row no-gutters">
          <div class="menu-image h-100 d-flex align-items-start">
                <Zoom right>
                  <img src="https://www.sumanastech.com/wp-content/uploads/2018/10/app-development-illustration.png" class="img-fluid" alt="menu image" width="100%" />
                </Zoom>
              </div>
            <Spin>
              <div class="col-md">
                <div class="flex-grow-1 py-4 px-2">

                  <hr class="hr-style-left" />
                  <RubberBand>
                    <h2 id="inside-about">About Me  <TagFacesIcon/></h2>
                    <Flash> <h3 class=" text-dec font-weight-normal" id="inside-about">My Name Is Shehzad Haroon And I Am a Frontend Developer (React.js)</h3>
                      <p class="" id="inside-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> </Flash>
                     
                  </RubberBand>
                  <Row >

                    <Flash> <Col ><Button variant="primary" class="">View Services</Button>
                      <Button variant="dark" className="my-2 mx-2 ">View Github</Button></Col></Flash>
                  </Row>
                </div>
              </div>
            </Spin>
            <div class="col-md">

            
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}


