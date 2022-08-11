import heading from './assets/heading.jpg'
import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock,
  MyTag,
} from './classes/blocks'
import { socials } from './utils'

export const model = [
  new TitleBlock('Конструктор сайта JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff4444, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new MyTag('by Ruslan', {
    styles: {
      background: 'linear-gradient(to right, #ff4444, #493240)',
      'font-weight': 'bold',
      'text-align': 'center',
      color: '#fff',
    },
  }),
  new ImageBlock(heading, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
      'border-radius': '15px',
      border: '1px solid',
    },
    alt: 'Это картинка',
  }),
  new TextBlock('Мои социальные сети', {
    styles: {
      background: 'linear-gradient(to right, #ff4444, #493240)',
      padding: '1.5rem',
      'font-weight': 'bold',
      'text-align': 'center',
      color: '#fff',
    },
  }),
  new ColumnsBlock([socials['tg'], socials['gHub'], socials['vk']], {
    styles: {
      background: 'linear-gradient(to right, #ff4444, #493240)',
      padding: '1rem',
      'font-weight': 'bold',
      'text-align': 'center',
      color: '#fff',
    },
  }),
]
