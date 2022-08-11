import { Site } from '../classes/site'
import { Sidebar } from '../classes/sidebar'

export class App {
  constructor(model) {
    this.model = model
  }

  init() {
    const site = new Site('#site')

    site.render(this.model)

    const updateCallback = (changes) => {
      this.model.push(changes)
      site.render(this.model)
    }

    new Sidebar('#panel', updateCallback)
  }
}
