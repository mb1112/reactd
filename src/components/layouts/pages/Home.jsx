import React, { Component } from 'react';
import { InfoConsumer } from '../../context.jsx';
import Info from '../../Info.jsx';


class Home extends Component{
    render(){
        return(    
        <div className="container"> 
        <style>
            
        </style>
            <h1 style={{textAlign:"center",  textShadow: '2px 2px #FFE5CC' , color:'#332E2A'}}>MESEC MUZIKE U BEOGRADU</h1>
            <div className="row mt-5">
            <InfoConsumer>
                {value => {
                    return value.info.map(item => {
                        return <Info key={item.id} item={item} />
                    });
                }}
            </InfoConsumer>
            </div>
        </div>
        );
    }
}

export default Home;