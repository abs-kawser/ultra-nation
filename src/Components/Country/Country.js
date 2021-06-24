import React from 'react';

const Country = (props) => {
  // console.log(props.name);
  const {name,population,region,flag} =props.country;
  const flageStyle={height:'50px',border:'1px solid blue'}
  const countryStyle={border:'1px solid red',margin:'10px',padding:'10px 10px'}
   console.log(props);

      
    
    const Countrybtn= props.Countrybtn
     const CountryTwo=props.CountryTwo 
  return (
    <div style={countryStyle}>

         <h3>This is:{name}</h3>
         <img style={flageStyle} src={flag} alt="" />
         <p>{population}</p>  
          <p>{region}</p> 

    <button onClick={()=> Countrybtn(props.country)}>add country</button> 
    <br />
    <br />
    
    <button onClick={()=>CountryTwo(props.country)}> agin add country </button>  
    </div>
         
    
  );
};

export default Country;