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