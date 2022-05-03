import React from 'react'
import { IImage, IMeme } from '../../interfaces/common'
import style from './MemeViewer.module.css'

export interface IMemeViewerProps {
  meme: IMeme
  image: IImage | undefined
  basePath?: string
}
const MemeViewer: React.FC<IMemeViewerProps> = (props) => {
  return (
    <svg
      className={style.MemeViewer}
      data-testid='MemeViewer'
      viewBox={`0 0 ${props.image ? props.image.w : '1000'} ${
        props.image ? props.image.h : '1000'
      }`}
    >
      {undefined !== props.image && (
        <image href={`${props.basePath}${props.image.url}`} x='0' y='0' />
      )}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fontSize={props.meme.fontSize}
        fill={props.meme.color}
        textDecoration={props.meme.underline ? 'underline' : 'none'}
        fontStyle={props.meme.italic ? 'italic' : 'normal'}
        fontWeight={props.meme.fontWeight}
      >
        {props.meme.text}
      </text>
    </svg>
  )
}
MemeViewer.defaultProps = { basePath: '/img/' }
export default MemeViewer
