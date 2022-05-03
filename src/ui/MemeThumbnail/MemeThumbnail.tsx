import React from 'react'
import { IImage, IMeme } from '../../interfaces/common'
import MemeViewer from '../MemeViewer/MemeViewer'
import style from './MemeThumbnail.module.css'
export interface IAppProps {
  memes: Array<IMeme>
  images: Array<IImage>
  basePath?: string
}

const MemeThumbnail: React.FC<IAppProps> = (props) => {
  return (
    <div className={style.MemeThumbnail}>
      {props.memes.map((e: IMeme, i: number) => (
        <MemeViewer
          key={i}
          meme={e}
          image={props.images.find((img: IImage) => img.id === e.imageId)}
          basePath={props.basePath}
        />
      ))}
    </div>
  )
}
MemeThumbnail.defaultProps = { basePath: '/img/' }
export default MemeThumbnail
