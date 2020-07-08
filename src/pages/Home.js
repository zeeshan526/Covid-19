import React  from 'react'
import Footer from './Footer'
import image from './images/covid.jpg';

// import Cards from './components/Cards/Cards'
// import Charts from './components/Chart/Charts'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Charts , CountryPicker} from '../components';
import styles from '../App.module.css';

import {fetchData} from '../Api';

class Home extends React.Component{

  state={
    data:{},
  }

  async componentDidMount(){
    const  Data = await fetchData()
    this.setState({data : Data});
 
   }
   handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){
    const { data, country } = this.state;
    return(
      <>
     
      <div  className={styles.container}>
      <img  src={image} alt="COVID-19" width='370px' height='100px'/>
         <Cards data={data}/>
         <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} /> 

      </div>
     <Footer/>
      

</>
    )
  }
}

export default Home;
