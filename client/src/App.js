import logo from './logo.svg';
import './App.css';
import React from 'react';
import { gsap } from 'gsap';
import svg from './Group.svg';

const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out" }})

//tl.fromTo('.Subtitle', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}); //pop out animation
//tl.fromTo('.Subtitle2', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}); //pop out animation
//tl.fromTo('.MainText', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}); //pop out animation
//tl.fromTo('.MainText2', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}); //pop out animation
//tl.fromTo('.SearchText', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5});//pop out animation

//tl.fromTo('.SearchText', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<50%');

function App() {


  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    
  <body>
      <div className='Title'>
        MenuMate.
      </div>
      <div className='Subtitle'>
        Finding a good meal <br></br> Just got better.
      </div>
      <div className='MainText'>
        Welcome to MenuMate, your number one provider focused on evaluating the best restaurants for you. With the click of a button, MenuMate scoures and assembles data from various sources to provide you with the most up-to-date and accurate information on the restaurants in your area. Browse through our database and find your perfect meal today!
      </div>
      <div className='SearchText'>
        <br></br> Use the search bar below to find your next meal today!
      </div>
      <div className='SearchBar'>
        <form class="search" action="">
          <input type="search" placeholder="Search here..." required/>
            <button type="submit">Search</button>
        </form>
      </div> 
      <div className="Pho">
        <img src = {svg}></img>
      </div>
      <div className='Subtitle2'>
        About our Project. 
      </div>
      <div className='MainText2'>
      <p align = 'left'>With an increase in the number of fast food and fine dining restaurants in the recent years, the number of restaurants that have begun to mal-perform has risen at an equivalent rate.
      Due to either a lack of dedication to their business, or an issue revolving company finances, certain fast food restaurants and fine dining companies may not be at their operational prime. This decrease in dining experience would result in you, their valued guests, to be offered subpar service and potentially hazardous and life-threatening food in return.  
      <br></br><br></br> Our project, MenuMate, helps to avert this issue as much as possible, so that any customer who pays for their food are offered a quality product that is safe and delicious. through one simple search, users will be able to look for their favourite restaurants and determine whether or not their favourite restaurants shouldn’t be there favourite anymore By analyzing a variety of indicators, such as Health inspection records, food-site reviews, and a variety of other offically-recognized indicators, MenuMate is able to determine whether or not your restaurant is properly producing quality food in a safe and ethical manner.
      <br></br><br></br> Though MenuMate is only available in the city of Ottawa, we hope to branch out our project to various other cities to make sure that everyone is able to receive the great food that they deserve.
      <br></br><br></br> This project is thanks to the works and tribulations of four Ottawa-based university students. These four students are: 
      <br></br><br></br> <b>Joshua John</b>, of <b>Carleton University. </b>
      <br></br> <b> Masoud Kairimi, Asad Ali, Anthony Le </b> of <b>the University of Ottawa.  </b>
      </p>

      </div>
  </body>
  )
}

  export default App;
