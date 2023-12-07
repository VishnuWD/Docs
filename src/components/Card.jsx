import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2, zIndex:50}} dragElastic={1} dragTransition={{bounceDamping:13, bounceStiffness:100}}  className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt />
        <p contentEditable={data.editable} className='text-sm mt-5 leading-tight font-semibold border-none'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0 '>
            <div className='flex items-center justify-between  px-8 mb-3 py-3'>
                <h5>{data.fileSize}</h5>
                {data.close ? <IoClose /> : <FiDownload/>}
            </div>
            {data.tag.isOpen && (
              <div className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor}`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )}
            
        </div>
    </motion.div>
    
  )
}

export default Card