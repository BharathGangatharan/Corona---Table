import React from 'react'
import './display.css'
const Display = ({info,pick}) => {

   // const[guess,setGuess]=useState(false)

    /*var size=info.length;

    /function check(){
        for(var i=0;i<size;i++){
            if(!info[i].country === pick){
                return false;
            }
            else if(info[i].country === pick){
                return true;
            }
        }
    }*/

    return (
        <div>
            {
                info.filter((filtered)=>{
                    if(filtered.country === pick){
                        return filtered;
                    }
                }).map((item,i)=>(
                    <div key={i} className="display_info">
                        <h3>Cases:{item.cases}</h3>
                        <h3>Tests:{item.tests}</h3>
                        <h3>Active:{item.active}</h3>
                        <h3>Deaths:{item.deaths}</h3>
                        <h3>Recovered:{item.recovered}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;