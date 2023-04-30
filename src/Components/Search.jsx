import React from 'react'
import './search.css'
function Search({setvalue,value}) {
    function search(event){
        {console.log(event.target.value)}
        setvalue(event.target.value)
    }
    function mybut(event){
        setvalue(event.target.value)
    }

  return (
    <div style={{height:"20vh",width:"100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
        <h1 style={{color:'#F37F00'}} >Recipe Search</h1>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>

        <input type="search" onChange={search} style={{width:'200px',height:'30px',paddingLeft:"10px"}} />
        <button className='but' onClick={mybut} style={{height:'30px',borderRadius:'5px'}}>Search</button>
        </div>
    </div>
  )
}

export default Search