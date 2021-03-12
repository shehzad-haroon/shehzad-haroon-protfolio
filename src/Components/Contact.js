import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Text from 'react-text-typing'
import { Col, Row, Button,Card,Form } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Spin from 'react-reveal/Spin';
import Flash from 'react-reveal/Flash';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
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
export default function Contact() {
  const classes = useStyles();
  return (

    <div id="about">

      <section id="golf">
        <div class="fluid-container">
          <div class="row no-gutters">
            <RubberBand>
              <div class="col-md">
                <div class="flex-grow-1 py-4 px-2">

                  <hr class="hr-style-left" />
                  <RubberBand>
                    <h2 id="inside-about">Contact Us  <TagFacesIcon/></h2>
                    <Flash> <h3 class=" text-dec font-weight-normal" id="inside-about"> <a href="https://www.facebook.com/sheryyar.ahmed.1/"><FacebookIcon/></a><a href="https://hub.com    /"><GitHubIcon/></a></h3>
                      <p class="" id="inside-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> </Flash>
                     
                  </RubberBand>

                </div>
              </div>
            </RubberBand>
            <div class="col-md">

            
            </div>
          </div>
        </div>
        <Form>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
    <Form.Label column sm="2">
      Shehzadharoob@gmail.com
    </Form.Label>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Phone Number
      </Form.Label>
    <Col sm="10">
    <Form.Label column sm="2">
      0345675435
      </Form.Label>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Locate Us
      </Form.Label>
    <Col sm="10">
    <Form.Label column sm="2">
      Karachi,Pakistan
      </Form.Label>
    </Col>
  </Form.Group>
</Form>
      </section>

    </div>

  );
}


