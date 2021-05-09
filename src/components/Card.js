import React, { Fragment,useState,useEffect } from 'react'
import AppData from './data'

function Card(props) {  
  
  const [openCards,setopenCards] = useState([])
  const [matched,setMatched] = useState([])
  const [shuffledData , setshuffledData] = useState([])
  const shuffledArray = (arr)=>{
    var temp ;
    for(let i = arr.length -1 ; i > 0 ; i--){
      let j = Math.floor(Math.random() * 10)
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }
  useEffect( ()=>{
    setshuffledData(shuffledArray(AppData))
  },[shuffledData])
  const handleClick = (index) =>{
    setopenCards((openCards)=>[...openCards ,index]);
  }
  useEffect(() => {
    const firstMatch = shuffledData[openCards[0]];
    const secondMatch = shuffledData[openCards[1]];
    if(openCards.length === 2 ) setTimeout(()=>{setopenCards([])},1000)
    if(secondMatch && firstMatch.name === secondMatch.name && firstMatch.id !== secondMatch.id){
      setMatched((matched)=>[...matched,firstMatch.name]);
    }  
  }, [openCards,shuffledData]);

  const data =  shuffledData.map((data,index) =>{
    let flip ;
    flip = true;
    if(openCards.includes(index)) flip= false
    if(matched.includes(data.name)) flip= false 
      return <Fragment key={data.id}>
                  <div onClick={()=> handleClick(index)} name={data.name} className={flip ?'card' : 'card active'}>                
                      <img  src={require(`./${data.id}.png`).default} alt='cardPhoto' className='cardFront'/>
                      <span className='cardBack'> ? </span>
                  </div>
             </Fragment>}) 
    return (
            <>                
                {data}
           </>
    )
}

export default Card
