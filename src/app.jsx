import Axios from 'axios';
import React, { Component } from 'react';
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    Axios 
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots })); 
   }

   fetch('https://codepen.io/merobertsjr/pen/WayqqB', options)
   .then(data => {
       if (!data.ok) {
         throw Error(data.status);
        }
        return data.json();
       }).then(update => {
       console.log(update);
       // {
       //
       title: 'A blog post by Kingsley',
       //
       body: 'Brilliant post on fetch API',
       //
       userId: 1,
       //
       id: 101
       // };
       }).catch(e => {
       console.log(e);
       });




  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='jumbotron jumbotron-fluid padding-top-4'>
          
            <h1 className='display-4 text-center'>San Diego Top Spots</h1>
            <p className='lead text-center'>A list of the top 30 places to see in San Diego, California.</p>
            
          </div>
          { this.state.topspots.map(topspot => (
		        <TopSpot
			        key={topspot.id}
			        name={topspot.name}
			        description={topspot.description}
			        location={topspot.location} 
		        />
	))
}     
        </div>  
      </div>

    );
  }
}

export default App;