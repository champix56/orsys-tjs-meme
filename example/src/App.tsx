import React from 'react'

import { MemeSVGThumbnail, MemeSVGViewer } from 'orsys-tjs-meme'
import 'orsys-tjs-meme/dist/index.css'
const meme=JSON.parse('{"titre": "titre meme 1","text": "Mon meme","x": 100,"y": 100,"fontSize": 12,"fontWeight": 700,"color": "#ADE0F1","underline": true,"italic": false,"imageId": 0,"id": 1}')
const image=JSON.parse(' {"id": 0,"title": "futurama","url": "futurama.jpg","w": 1000,"h": 563}')
const memes=[meme,meme,meme,meme,meme,meme,meme,meme,meme];
const images=[image,image,image,image,image,image,image];
const App = () => {
  
   return <div>
     <MemeSVGThumbnail memes={memes} images={images}/>
     <MemeSVGViewer meme={meme} image={image}  />
  {/* <MemeSVGViewer meme={meme} image={image}/> */}
  </div>
}

export default App
