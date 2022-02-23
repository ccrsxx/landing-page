import { About, Info, Quote, Call, Footer } from './components';

export default function App() {
  return (
    <div className='App'>
      <About />
      <main>
        <Info />
        <Quote />
        <Call />
      </main>
      <Footer />
    </div>
  );
}
