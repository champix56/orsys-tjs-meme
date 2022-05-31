//import * as React from 'react'
// import styles from './styles.module.css'
import { DummyMeme, IImage, IMeme } from './interfaces/common'
import MemeThumbnail from './ui/MemeThumbnail/MemeThumbnail'
import MemeViewer, { IMemeViewerProps } from './ui/MemeViewer/MemeViewer'
// interface Props
//   text: string
// }

// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
export const MemeSVGViewer = MemeViewer
export const MemeSVGThumbnail = MemeThumbnail
export default IMemeViewerProps
export interface MemeInterface extends IMeme {}
export interface ImageInterface extends IImage {}
export const emptyMeme = DummyMeme
