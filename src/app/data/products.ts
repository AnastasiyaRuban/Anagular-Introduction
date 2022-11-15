import { Product } from './../types/card';
export const products: Product[] = [{
  id: 1,
  company: 'Google',
  title: 'Смартфон Google Pixel 4 XL 6/128GB',
  image: 'https://avatars.mds.yandex.net/get-mpic/5391389/img_id5139515789172432240.jpeg/orig',
  rating: {
    value: 5,
    reviews: 4
  },
  price: {
    value: 63000,
    discount: 0.17
  },
  deliveryOptions: {
    delivery: '21.11',
    postamate: true,
    available: 10
  },
  // badge: {
  //   color: '#198838',
  //   text: 'Выбор покупателей'
  // },
  colors: {
    one: {
      color: 'pink',
      image: 'https://cdn1.ozone.ru/s3/multimedia-k/wc1000/6162073640.jpg'
    },
    two: {
      color: 'black',
      image: 'https://cdn1.ozone.ru/s3/multimedia-w/wc1000/6063006476.jpg'
    }
  }
},
{
  id: 2,
  company: 'Xiaomi',
  title: 'Смартфон Poco M4 pro+ 8/256 ГБ',
  image: 'https://cdn1.ozone.ru/s3/multimedia-j/wc1000/6357388363.jpg',
  rating: {
    value: 5,
    reviews: 109
  },
  price: {
    value: 19990,
    discount: 0.25
  },
  deliveryOptions: {
    delivery: '23.11',
    postamate: true,
    available: 16
  },
  badge: {
    color: '#FF0000',
    text: 'Лучшая цена'
  },
  colors: {
    one: {
      color: 'blue',
      image: 'https://cdn1.ozone.ru/s3/multimedia-u/wc1000/6357349566.jpg'
    },
    two: {
      color: 'black',
      image: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1000/6372384463.jpg'
    }
  }
},
{
  id: 2,
  company: 'Apple',
  title: 'Смартфон Apple iPhone X 64GB 64 ГБ',
  image: 'https://avatars.mds.yandex.net/get-mpic/4937511/img_id3131546776792385488.png/orig',
  rating: {
    value: 5,
    reviews: 2
  },
  price: {
    value: 22920,
    discount: 0.1
  },
  deliveryOptions: {
    delivery: '27.11',
    postamate: true,
    available: 19
  },
  badge: {
    color: '#FFD700',
    text: 'Бестселлер'
  },
  colors: {
    one: {
      color: 'white',
      image: 'https://cdn1.ozone.ru/s3/multimedia-1/wc1000/6381206413.jpg'
    },
    two: {
      color: 'black',
      image: 'https://cdn1.ozone.ru/s3/multimedia-4/wc1000/6381198280.jpg'
    },
    three: {
      color: 'red',
      image: 'https://cdn1.ozone.ru/s3/multimedia-4/wc1000/6381198280.jpg'
    }
  }
}]
