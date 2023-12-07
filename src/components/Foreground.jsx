import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
  const ref = useRef()
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quod dolor sit.",
      fileSize: ".8mb",
      close:false,
      editable:true,
      tag:{
        isOpen:true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
    {
      desc: "Upload Content",
      fileSize: "0kb",
      close:true,
      editable:false,
      tag:{
        isOpen:true,
        tagTitle: "Upload",
        tagColor: "bg-blue-600",
      },
    },
    {
      desc: "This Documents are Draggable",
      fileSize: ".12kb",
      close:true,
      editable:false,
      tag:{
        isOpen:false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ]
  return (
    <div ref={ref} className='fixed z-10 top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((data, index)=>(
        <Card data={data} reference={ref}/>
      ))}
     </div>
  )
}

export default Foreground