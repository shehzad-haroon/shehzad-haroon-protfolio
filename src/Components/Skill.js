import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Text from 'react-text-typing'
// import { Col, Row, Button } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Spin from 'react-reveal/Spin';
// import Flash from 'react-reveal/Flash';
// import TagFacesIcon from '@material-ui/icons/TagFaces';
// import {Navbar,} from 'react-bootstrap'


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
export default function Header() {
  const classes = useStyles();
  return (
      <React.Fragment>
    <strong> <h2 className="text-center bg-light text-info ">My Skills</h2> </strong>
    <div id="M">
        
      <section id="">
        <div class="fluid-container">
          <div class="row no-gutters">
          <div class=" d-flex align-items-start">
                <Zoom right>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Hand%2C_bar_and_pie_chart%2C_dark.png" class="img-fluid" alt="menu image" width="100%" />
                </Zoom>
              </div>
            <Spin>
              <div class="col-md">
                  
                <div class="flex-grow-1">

                  {/* <hr class="hr-style-left pad" /> */}
                  <RubberBand>
               <ul>
                  <li>Html</li> 
                  <li>Css</li> 
                  <li>Javascript</li> 
                  <li>React.Js</li> 
                  <li>Bootstrap</li> 
                  <li>Materail-Ui</li> 
                  <li>Redux</li> 
                  <li>Ant-Design</li> 
               </ul>
                     
                  </RubberBand>
              
                </div>
              </div>
            </Spin>
            <div class="col-md">

              
            </div>
          </div>
        </div>
      </section>

    </div>
    </React.Fragment>
  );
}


