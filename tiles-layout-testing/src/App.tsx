import { TilesLayout } from '@tiles-layout';

function App() {
  return (
    <div style={{
			width: '50vw',
			height: '100vh',
    }}>
      <TilesLayout tiles={TILES} />
    </div>
  )
}


const TILES = [
  {
		style: {
      backgroundColor: 'red'
    },
    width: 1,
		height: 2,
  },
  {
    style: {
      backgroundColor: 'blue',
    },
    width: 2,
		height: 2,
  },
  {
    style: {
      backgroundColor: 'green',
    },
    width: 3,
		height: 3,
  },
  {
    style: {
      backgroundColor: 'blue',
    },
    width: 2,
		height: 2,
  },
  {
    style: {
		  backgroundColor: 'red',
    },
    width: 1,
		height: 1,
  },
];

export default App
