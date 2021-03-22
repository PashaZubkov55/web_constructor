import { TextBlock, TitleBlock } from "./block"

export class SiteBar{
    constructor(selector, update){
        this.update = update
        this.$selector = document.querySelector(selector)
            this.init()
        
    }


    init(){
        this.$selector.insertAdjacentHTML('afterbegin', this.template)
        this.$selector.addEventListener('submit',this.add.bind(this))
    }

    get template(){
        return form('text')
    }

    add(event){
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value


        const newBlock = type === 'text'
        ? new TextBlock(value, {styles})
        : new TitleBlock(value, {styles})

        this.update(newBlock)

          event.target.value.value = ''
         event.target.styles.value = ''

      


    }

}

export function form(type) {
    return `
    <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
    <input class = 'form-control form-control-sm' name='value' placeholder='value'>
    </div>
    <div class="form-group">
    <input class = 'form-control form-control-sm' name='styles' placeholder='styles'>
    </div>
    <button class='btn btn-primary btn-sm' type="submit">добавить</button>
    </form>
    <hr />
    
    `
    
}