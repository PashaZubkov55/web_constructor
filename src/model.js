import img from './assets/img/javascript.png'
import {TitleBlock, TextBlock, ImageBlock, ColumsBlock} from './classes/block'
 export const model =[

    new TitleBlock('web constructor to javaScript', {
        tag: 'h1',
        styles:{
            color: 'green',
            
        }
    }),
    new TextBlock('welcome to web constructor', {
        tag: 'h1',
        styles:{
            color: '#eee',
            
        }
    }),

    new ImageBlock(img, {

    })
 ]