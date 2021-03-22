import{model} from './model'
import { Site } from './classes/site'
import {SiteBar} from './classes/sidebar'


import './assets/styles/main.css'

 const site = new Site('#site')

 site.render(model)

  new SiteBar('#panel', block=>{
   model.push(block)
   site.render(model)
 })
 

