import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='grid row container-fluid'>
                <div className='col-7 p-5'>
                    <h3 className='heading' >Have real Excelence</h3>
                    <h3 className='heading' id='brown'>Have pure Taste</h3>
                    <p className='description'>Espresso has always been more than a beverage.
                        Its aroma, its intensity, its countless delicious
                        variations, its joining spirit...a good espresso
                        is a celebration of life itself. Starting in Italy this
                        unique feeling has sparked a café culture that
                        today is lived and loved all around the world.</p>
                    <h3 className='button'>Live Demo</h3>

                </div>
                <div className='p-5 col-5'>

                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30170735301033.56f187552a91c.jpg" className='img-fluid' alt="" />
                </div>
            </div>
            <div className='review-section'>
                <h2 className='Customer-review-heading mx-auto'>Customer review</h2>
                <div>

                </div>
                <h4 className='mx-auto review-button'>See All Reviews</h4>
            </div>
        </div>
    );
};

export default Home;