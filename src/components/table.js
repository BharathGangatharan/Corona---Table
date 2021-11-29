import React,{ useState,useEffect} from 'react'
import './table.css';
import * as ReactBootStrap from 'react-bootstrap';
import Pagination from './pagination';


function Able(){
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    const[order,setOrder]=useState("ASC")
    const[currentPage,setCurrentpage]=useState(1);
    const[itemPerPage]=useState(20)



    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = data.slice(indexOfFirstItem,indexOfLastItem)




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

    const paginate =(number)=>setCurrentpage(number);


    return(
        <div className="makeChange">
            <button class="btn btn-primary" onClick={()=>sorting("country")}>Asc</button>
            <input type="search" value={search} onChange={changer} placeholder="Search for specific country" />
            <button class="btn btn-primary" onClick={()=>sorting("country")}>Desc</button>



        
            <ReactBootStrap.Table striped bordered hover className="table_back">
                <thead >
                    <tr>
                        <th>Country</th>
                        <th>Active</th>
                        <th>Tests</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItem.filter(item => {
                            if(search === ""){
                                return item
                            }else if(item.country.toLowerCase().includes(search.toLowerCase())){
                                return item
                            }
                        }).map(item =>(
                        
                                        <tr>
                                            <td>{item.country}</td>
                                            <td>{item.active}</td>
                                            <td>{item.tests}</td>
                                            <td>{item.deaths}</td>
                                            <td>{item.recovered}</td>
                                        </tr>
                        ))
                    }
                </tbody>
            </ReactBootStrap.Table>
            <Pagination className="page" itemPerPage={itemPerPage} totalItem={data.length} paginate={paginate}/>       
        </div>
    )
}

export default Able;
































































            /*{
                currentItem.filter(item => {
                    if(search === ""){
                        return item
                    }else if(item.country.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }
                }).map(item =>(
                    <div>
                        <table className="table table-striped table-dark">
                            <thead >
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
                ))*/