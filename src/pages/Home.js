import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton'




function Home() {
const style = ({
  color:'white'
})
const style1 = ({
   fontSize: '2rem',
   color:'black'
})

  return (
  
    <div className="home" >
      <div className="about" >
      <br></br>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2> Hi, My Name is Ravi Naik Kodavath</h2>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    

        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item" style={{  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
            <h2 style={style}>Front-End</h2>
            <span style={style1} >
              ReactJS, Redux, HTML, CSS, StreamLit, NPM,BootStrap
              Ionic, BootStrap, MaterialUI, Yarn, StyledComponents
            </span>
          </li>
          <li className="item" style={{  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
            <h2 style={style}>Back-End</h2>
            <span style={style1}>
              NodeJS, Python , ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB , AWS S3, MS SQL 
            </span>
          </li>
          <li className="item" style={{  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
            <h2 style={style}>Languages</h2>
            <span style={style1}>JavaScript, Java, Python, TypeScript, GoLanguage</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
