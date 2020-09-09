import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" alt="Prime Video Poster" />
                <div className="home__row">
                    <Product
                        id="5917354"
                        title="Think Like a Monk: Train your mind for peace and purpose everday."
                        image="https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY327_FMwebp_QL65_.jpg"
                        price={'1,890'}
                        rating={5}
                    />
                    <Product
                        id="7981564"
                        title="Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century (Think and Grow Rich Series)"
                        image="https://m.media-amazon.com/images/I/71UypkUjStL._AC_UY327_FMwebp_QL65_.jpg"
                        price={252}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4015165"
                        title="Apple iPhone 11 Pro (64GB) - Midnight Green"
                        image="https://m.media-amazon.com/images/I/61itOh+Je8L._AC_UY327_FMwebp_QL65_.jpg"
                        price={'99,145'}
                        rating={4}
                    />
                    <Product
                        id="1515416"
                        title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
                        image="https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UY327_FMwebp_QL65_.jpg"
                        price={'40,998'}
                        rating={5}
                    />
                    <Product
                        id="1621763"
                        title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
                        image="https://m.media-amazon.com/images/I/61-snTeMjoL._AC_UY327_FMwebp_QL65_.jpg"
                        price={'49,990'}
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="5451566"
                        title="Echo Dot (3rd Gen) Charcoal with Echo Auto"
                        image="https://m.media-amazon.com/images/I/61nCzkCteAL._AC_UY327_FMwebp_QL65_.jpg"
                        price={'6,899'}
                        rating={4}
                    />
                    <Product
                        id="5248337"
                        title="All-new Ring Video Doorbell 3 with Echo Show 5"
                        image="https://m.media-amazon.com/images/I/513YujS1acL._AC_UY327_FMwebp_QL65_.jpg"
                        price={'14,650'}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Sony XBR55X900F 55-Inch 4K Ultra HD Smart LED Android TV with Alexa Compatibility - 2018 Model"
                        image="https://m.media-amazon.com/images/I/71uqLWUl2GL._AC_UY327_FMwebp_QL65_.jpg"
                        price={'61,990'}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}


export default Home
