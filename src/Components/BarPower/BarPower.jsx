import React from 'react';

export default function BarPower(info) {
  const poder = info.poder;

  const BarPower = {
    backgroundColor: 'orange',
    width: poder + '%',
		height: '100%',
    borderRadius: '0.3rem',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '0.3rem',
		color: 'white',
		fontSize: '1.2rem',
		justifyContent: 'center',
	}

	const Bar = {
		width: '100%',
		backgroundColor: '#f0f0f0',
		marginLeft: '1rem',
		borderRadius: '0.4rem',
		height: '30px'
	}

  const BoxPower = {
    display: 'flex',
	}

  return (
    <div style={BoxPower}>
      <h2>Poder:</h2>
			<div style={Bar}>
				<div style={BarPower}>{poder}%</div>
			</div>
    </div>
  );
}
