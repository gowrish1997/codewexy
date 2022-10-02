import React from 'react'
import {Link} from 'react-router-dom'
const style={
    aboutpage:{
        position:'absolute',
        margin:"auto",
        top:'200px',
        left:0,
        right:0,
        bototm :0,
        width:'700px',
        height:'200px',
        backgroundColor:'rgb(192,192,192,0.8)',
        borderRadius:'10px',
        fontSize:'40px',
        color:'black',
       
        verticalAlign:'middle'
    },
    button:{
        position:'absolute',
        top:'10px',
        left:'10px',
padding:'10px 20px',
borderRadius:'10px',

backgroundColor:'rgb(0,255,0)'
    },
    button2:{
        position:'absolute',
        top:'10px',
        left:'100px',
padding:'10px 20px',
borderRadius:'10px',

backgroundColor:'rgb(0,255,0)'
        
    }
}

const About = () => {
  return (
    <div style={{position:'relative'}}>
    <Link to='/'><button style={style.button}>HOME</button></Link>
    <Link to='/headandtail'><button style={style.button2}>Head and tail</button></Link>
    <div style={style.aboutpage}>
     We Are Offering All Kinds of IT Solutions Services Iam gworish iam doung that for efali
    </div>
    </div> 
  )
}

export default About
