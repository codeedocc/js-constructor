import { col, css, row } from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options

    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const temp = css(this.options.styles)
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class MyTag extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const temp = css(this.options.styles)
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map((i) => col(i))

    return row(html.join(''), css(this.options.styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles, imageStyles: iS, alt } = this.options
    return row(
      `<img src="${this.value}" alt="${alt}" style="${css(iS)}"/>`,
      css(this.options.styles)
    )
  }
}
