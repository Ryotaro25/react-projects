import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalConText } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalConText();
  
  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>Patments Infrastructure for the internet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora omnis cumque, consequatur molestiae quas cupiditate. Mollitia, laborum accusamus pariatur, ipsam doloremque architecto eaque enim nisi soluta deserunt assumenda nihil.</p>
        <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} alt="phone" className='phone-img' />
      </article>
    </div>
  </section>
}

export default Hero
