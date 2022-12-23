import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;

const Comment = () => {
  const [input, setInput] = useState('')
const [data,setData]= useState([]);
  useEffect(() =>{ 
    socketInitializer()
  }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      // setInput(msg)
      setData((prev)=>([...prev,msg]))
      console.log(data)
    })
  }

  const onChangeHandler = (e) => {
    setInput(e.target.value)
  }
  
  const handleText=()=>{
    socket.emit('input-change',input)

  }
  return (
  <Box h="200px" overflow={'scroll'}>  <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    /><Button onClick={handleText}> Add Comment</Button>
   <div>
    {data.map((el,i)=>
    <div key={el+i}>{el}</div>
    )
    }
   </div>
  </Box>
  )
}

export default Comment;