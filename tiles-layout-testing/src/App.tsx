import { TilesLayout } from '@tiles-layout';

function App() {
  return (
    <div style={{
			width: '100vw',
			maxWidth: '100vw',
			minHeight: '100vh',
    }}>
      <TilesLayout 
        style={{
					width: '50%',
          margin: '0 auto'
        }} 
        tiles={TILES}
				showControls={true}
      />
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
		  backgroundColor: 'red',
    },
    width: 1,
		height: 1,
  },
  {
    style: {
		  backgroundColor: 'red',
    },
    width: 1,
		height: 1,
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
		  backgroundColor: 'red',
    },
    width: 1,
		height: 1,
  },
  {
    style: {
		  backgroundColor: 'red',
    },
    width: 1,
		height: 1,
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
  {
    style: {
		  backgroundColor: 'orange',
    },
    width: 3,
		height: 1,
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
