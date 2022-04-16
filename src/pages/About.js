import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className='aboutBottom'>
        <h1> ABOUT US</h1>
        <p>
        ‘Pedro's Pizzeria’ Pizza has turned out to be prestigious for its tremendous,
         hand-hurled Neapolitan, profound dish, and Sicilian-style pizzas, every one 
         of which invests some energy in a block lined hearth stove before touching base
          at your table. A few pices are slathered in ‘Pedro's Pizzeria’ signature sauce
           made from vine-matured San Marzano tomatoes; others are finished with 
           increasingly test fixings, including one that is covered underneath Philly steak and peppers.
        </p>
        <p>
        Be that as it may, don’t give the name a chance to trick you:
         ‘Pedro's Pizzeria’ Pizza really has some expertise in something other than pizza.
        </p>
        <p>
        To be sure, it features the menu here, yet you can likewise get your hands around plates 
        of mixed greens, burgers, wraps, gyros, gourmet courses, pastas and the sky’s the limit from there.
        </p>
      </div>
    </div>
  );
}

export default About;