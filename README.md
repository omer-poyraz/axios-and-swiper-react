# Axios And Swiper

## Axios
With the [Axios](https://www.npmjs.com/package/axios) library, you can pull or process both RESTFUL and SOAP data into react applications. 
### `npm i axios`
`import axios from 'axios';`


## Swiper
You can create your own slider with the [Swiper](https://www.npmjs.com/package/swiper) library. You can use ready-made CSS files of the [Swiper](https://www.npmjs.com/package/swiper) library or you can use them by editing. You can run your Slider either automatically or manually.
### `npm i swiper`
```
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
```


```
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from './Api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const sliderParams = { spaceBetween: 30, centeredSlides: true, autoplay: { delay: 2500, disableOnInteraction: false }, pagination: { clickable: true } }

const App = () => {
  const [data, setData] = useState([])

  const getData = () => {
    axios.get(`${URL}/homeslider/homeslider-list.php`).then(res => {
      setData(res.data)
    })
  }

  useEffect(() => { getData() }, [])

  return (
    <>
      <div className='slider'>
        <Swiper {...sliderParams} modules={[Autoplay]}>
          {
            data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={`${item.image}`} alt={`${item.name}`} width='100%' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </>
  )
}

export default App
```