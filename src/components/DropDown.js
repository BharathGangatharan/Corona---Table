import React,{ useState} from 'react'
import Display from './display';
import './DropDown.css';

const DropDown = ({data}) =>{
    const[change,setChange]=useState([]);

    const handChangeCountry=(e)=>{
        setChange(e.target.value);
      }

    return(
        <div className="select-option">
            <select value={change} placeholder="Enter the country name"
            onChange={handChangeCountry}>
                {
                    data.map((info,i)=>(
                        <option key={i}>{info.country}</option>
                    ))
                }
            </select>
            
            <Display info={data} pick={change}  />
            
        </div>
    )
}

export default DropDown;






























































/* import React,{ useState,useEffect} from 'react'
import './table.css'

function Able(){
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    const[order,setOrder]=useState("ASC")


    useEffect(()=>{
        fetch('https://corona.lmao.ninja/v2/countries/')
        .then((res) => res.json())
        .then((json) => setData(json))
      },[])
    

    const sorting=(col)=>{
        if(order === "ASC"){
            const sorted=[...data].sort((a,b)=>a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1);
            setData(sorted)
            setOrder("DSC")
        
        }

        else if(order === "DSC"){
            const sorted=[...data].sort((a,b)=>a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1);
            setData(sorted)
            setOrder("ASC")
        }

    }


    const changer =(e)=>{
        setSearch(e.target.value)
    }


    return(
        <div>
            <input type="search" value={search} onChange={changer} />
            
            <button onClick={()=>sorting("country")}>Asc</button>
            <button onClick={()=>sorting("country")}>Desc</button>
            {
                data.filter(item => {
                    if(search === ""){
                        return item
                    }else if(item.country.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }
                }).map(item =>(
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Deaths</th>
                                    <th>Today Cases</th>
                                    <th>Tests</th>
                                    <th>Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.country}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.todayCases}</td>
                                    <td>{item.tests}</td>
                                    <td>{item.recovered}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }        
        </div>
    )
}

export default Able; */









































/*function Table(){

    const[info,setInfo]=useState([])

    useEffect(() =>{
        fetch('https://corona.lmao.ninja/v2/countries/')
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setInfo(data)
            console.log(data);
        })
    },[])

    return(
    <div className="container">
        {
            info.map((item,i) => {
                return(
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Country</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{item.continent}</td>
                            <td>{item.country}</td>
                            <td>{item.cases}</td>
                            <td>{item.deaths}</td>
                            <td>{item.recovered}</td>
                        </tr>
                        </tbody>
                  </table>
                )
            })
        }
    </div>
    )
}

export default Table; 
*/