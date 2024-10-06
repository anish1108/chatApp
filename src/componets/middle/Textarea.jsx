import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react'



const Textarea = () => {
  const[text, setText] = useState(" ")
  const [show, setShow] = useState(false)

  let changehandler = (e)=>{
    setText(e.target.value)
    // console.log(text)
  }

  let emojiclickhandle = ()=>{
      setShow(prev=>!prev)
  }

  let inputclickhandel = ()=>{
    if(show==true){
      setShow(prev=>!prev)
    }
   
  }

  const handelemoji = (e)=>{
    // console.log(e)
    setText(prev => prev + e.emoji)
  }
 
  return (
    <div>
      <form className='relative flex gap-2 justify-center'>
        <input onClick={inputclickhandel} value={text} onChange={changehandler} className=' p-4 my-2 rounded-lg' type="text" placeholder='Ente your Message' />
        {show ? (
          <div className='absolute bottom-20 right-0'><EmojiPicker onEmojiClick={handelemoji}/></div>) : 
          (<button onClick={emojiclickhandle} className=' bg-green-400 px-4 rounded-lg'>Emoji</button>
          )}
        <button className=' bg-green-400 px-4 rounded-lg' >Send</button>
      </form>
    </div>
  )
}

export default Textarea