import {row, col, css} from '../utils'
// шаблон элементов
  class Block{
    constructor( value, options){
         this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error('метод toHTML должен быть реализован')
    }
}


export  class TitleBlock extends Block{
    constructor(value, options){
        super( value, options)
    }
    toHTML(){
        
        
      return row(col(`<${this.options.tag}>${this.value}</${this.options.tag}>`), css(this.options.styles))
    }
}
export  class ImageBlock extends Block{
    constructor(value, options){
        super( value, options)
    }
    toHTML(){
        return row(`<img src="${this.value}">`, css(this.options.styles))
    
    }
}
export  class ColumsBlock extends Block{
    constructor(value, options){
        super(value, options)
    }
    toHTML(){
        const html = this.value.map(item => col(item))
        return row(html.join(''))
    }
    }
export  class TextBlock extends Block{
    constructor(value, options){
        super(value, options)

    }
    toHTML(){
        return row(col(`<${this.options.tag}>${this.value}</${this.options.tag}>`), css(this.options.styles))
    
    }
}
