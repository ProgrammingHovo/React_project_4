import './index.css';
import Review from './Review';

function App() {
  return (
    <main>
      <section className='container' >
        <div className='title'>
          <h2 className='page_title'>Our reviews</h2>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
