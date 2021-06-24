
import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const [counters, setCounters] =useState([]);
   const [cart ,setCart]=useState([]);

    useEffect(() =>{ 
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>{ 
          setCounters(data)
          console.log(data)
        //  const namesOfCountry=data.map(country => country.name)
        //  console.log( namesOfCountry );
        })
    
    }, [])
    //btn part  
     const Countrybtn = (country)=> {
           const newCart=[...cart,country]
           setCart(newCart);
     }
      
     const CountryTwo=(country)=>{
      console.log('add',country);
       }
    
  return (
    <div className="App">
       <h1>Number of countries:{counters.length}</h1>
       <h4>Country addedd:{cart.length}</h4>
      <Cart cart={cart}></Cart>


        {
  counters.map(country=><Country country={country} CountryTwo={CountryTwo} Countrybtn={Countrybtn} key={country.alpha3Code}>
  </Country>)
        }

  
 
</div>
  );
}

export default App;


//use state and useEffect 2tai lagba api er jonno 