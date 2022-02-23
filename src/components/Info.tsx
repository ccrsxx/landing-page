import { infoCat } from '../assets';

export function Info() {
  return (
    <section className='info'>
      <h2>Lorem, ipsum dolor.</h2>
      <div className='card-container'>
        <div className='card'>
          <img src={infoCat} alt='a beatiful cat' className='card-img' />
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            minus.
          </p>
        </div>
        <div className='card'>
          <img src={infoCat} alt='a beatiful cat' className='card-img' />
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            minus.
          </p>
        </div>
        <div className='card'>
          <img src={infoCat} alt='a beatiful cat' className='card-img' />
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            minus.
          </p>
        </div>
        <div className='card'>
          <img src={infoCat} alt='a beatiful cat' className='card-img' />
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            minus.
          </p>
        </div>
      </div>
    </section>
  );
}
