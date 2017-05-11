import React from 'react';

export const Droplets = () => {
        let dropNum = 777;
        let chance = 7;
        let drops = [];
	
	[...Array(dropNum).keys()].map((_, i) => {
		let dropHori = randRange(0,screen.width*1.1);
                let dropVert = randRange(-1000, 1400);
                let rand = Math.floor((Math.random()*10)+1);

                let fr = (rand > chance) ? 861: 1;

                drops.push(<div className="drop" id={"drop"+i} style={{left: dropHori, top: dropVert, zIndex: fr}}></div>);
	});

        return (<div>{drops}</div>);
	
}

const randRange = (minNum, maxNum) => {
        return (Math.floor(Math.random() * (maxNum-minNum + 1)) + minNum);
}

export default Droplets;
