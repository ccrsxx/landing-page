import { heroCat, homepageCat } from '../assets';

export function About() {
  return (
    <header className='about'>
      <nav>
        <div className='hero-icon-container'>
          <img className='hero-icon' src={heroCat} alt='hero cat' />
        </div>
        <ul className='contact-container'>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Product</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='homepage'>
        <div className='homepage-text'>
          <h1>Cat Playground</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic ex
            quia vel eveniet ea, libero cupiditate optio, reiciendis aliquam
            rerum et assumenda ab a quisquam tenetur nemo. Magnam, tempore.
          </p>
          <button className='btn' type='button'>
            Sign up
          </button>
        </div>
        <div className='homepage-img-container'>
          <img className='homepage-img' src={homepageCat} alt='cat playing' />
        </div>
      </div>
    </header>
  );
}
