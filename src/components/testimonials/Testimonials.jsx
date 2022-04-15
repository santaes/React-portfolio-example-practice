import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.svg';
import AVATAR2 from '../../assets/avatar2.svg';
import AVATAR3 from '../../assets/avatar3.svg';
import AVATAR4 from '../../assets/avatar4.svg';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Hudde Holmwood',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestias laboriosam eum impedit ullam fugit distinctio beatae repudiandae fuga tempore excepturi',
  },
  {
    avatar: AVATAR2,
    name: 'Woodrow Ferguson',

    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestias laboriosam eum impedit ullam fugit distinctio beatae repudiandae fuga tempore excepturi',
  },
  {
    avatar: AVATAR3,
    name: 'Juvenal Street',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestias laboriosam eum impedit ullam fugit distinctio beatae repudiandae fuga tempore excepturi',
  },
  {
    avatar: AVATAR4,
    name: 'Tomila Gotti',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Molestias laboriosam eum impedit ullam fugit distinctio beatae repudiandae fuga tempore excepturi',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review fom clients (not real)</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={60}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className='testimonial' key={index}>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
