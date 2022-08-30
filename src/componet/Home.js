import React from "react";
import {Link} from 'react-router-dom'
const style = {
  maincontainer: {
    
        height: "100vh",
        width: "100vw",
        backgroundImage: `url('https://cdn.jivox.com/files/55004/today_30_08/coding.jpg')`,
        backgroundSize: "cover",
      
  },
  header: {
    height: "75px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#11EF80",
    
  },
  rightcontent:{
    flex: 1,
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    marginRight:'20px'
  }
};

const Home = () => {
  return (
<div style={style.maincontainer}>
      <div style={style.header}>
        <div style={{flex:1}}>
        <h1 >CODEWEXY</h1>
        </div>
        <div style={style.rightcontent}>
          <Link to='/about'><div>ABOUT</div></Link> 
         <Link to='/headandtail'><div>HEAD and TAIL</div></Link> 
        </div>
      </div>
      </div>
  );
};

export default Home;
