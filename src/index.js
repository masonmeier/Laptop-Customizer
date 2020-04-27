import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const FEATURES = {
  Processor: [
    {
      name: 'I-15 Quantum Link Processor',
      cost: 700
    },
    {
      name: 'Warp 10 Drive',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Hot-Wheels! Rocket Ride OS',
      cost: 200
    },
    {
      name: '6 Oompa Loompa Pulling Levers',
      cost: 600
    }
  ],
  "Video Card": [
    {
      name: 'An underpaid sketch artist drawing the frames',
      cost: 1150.98
    },
    {
      name: 'Trap Jerry Seinfeld inside of your desktop (requires purchase of Costanza bracket)',
      cost: 1345
    }
  ],
  Display: [
    {
      name: 'We literally just take your eyes and glue them to the screen.',
      cost: 1500
    },
    {
      name: 'Spinal plug into the Matrix',
      cost: 1400
    },
  ]
};

ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
