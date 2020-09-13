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
                        id="8981564"
                        title="How It Began: A Time–Traveler′s Guide to the Universe"
                        image="https://m.media-amazon.com/images/I/71g-XJE3X2L._AC_UL480_FMwebp_QL65_.jpg"
                        price={3561}
                        rating={5}
                    />
                    <Product
                        id="5997354"
                        title="Think Like a Monk: Train Your Mind For Peace And Purpose"
                        image="https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY327_FMwebp_QL65_.jpg"
                        price={1860}
                        rating={4}
                    />
                    <Product
                        id="6981234"
                        title="The 5 AM Club: Own Your Morning. Elevate Your Life"
                        image="https://m.media-amazon.com/images/I/714-1kZwslL._AC_UL480_FMwebp_QL65_.jpg"
                        price={1200}
                        rating={4}
                    />
                    <Product
                        id="5913574"
                        title="The 7 Habits of Highly Effective People"
                        image="https://m.media-amazon.com/images/I/81qgEPE6k1L._AC_UY327_FMwebp_QL65_.jpg"
                        price={1490}
                        rating={4}
                    />
                    <Product
                        id="7981564"
                        title="How It Ends: From You to the Universe"
                        image="https://m.media-amazon.com/images/I/7101qaqy0GL._AC_UL480_FMwebp_QL65_.jpg"
                        price={2544}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4015165"
                        title="Apple iPhone 11 Pro (64GB) - Midnight Green"
                        image="https://m.media-amazon.com/images/I/61itOh+Je8L._AC_UY327_FMwebp_QL65_.jpg"
                        price={99145}
                        rating={4}
                    />
                    <Product
                        id="1515416"
                        title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
                        image="https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UY327_FMwebp_QL65_.jpg"
                        price={40998}
                        rating={5}
                    />
                    <Product
                        id="1621763"
                        title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
                        image="https://m.media-amazon.com/images/I/61-snTeMjoL._AC_UY327_FMwebp_QL65_.jpg"
                        price={49990}
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="5451566"
                        title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
                        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
                        price={3499}
                        rating={4}
                    />
                    <Product
                        id="5248337"
                        title="Echo Flex– Plug-in Echo for smart home control"
                        image="https://m.media-amazon.com/images/I/41ky9Q83ePL._AC_UY327_FMwebp_QL65_.jpg"
                        price={2999}
                        rating={4}
                    />
                    <Product
                        id="5248937"
                        title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
                        image="https://m.media-amazon.com/images/I/61qIcidztUL._AC_UY327_FMwebp_QL65_.jpg"
                        price={3999}
                        rating={4}
                    />
                    <Product
                        id="5742537"
                        title="Introducing Echo Show 5 - Smart display with Alexa - 5.5 inch screen"
                        image="https://m.media-amazon.com/images/I/61RvgtLChZL._AC_UY327_FMwebp_QL65_.jpg"
                        price={6599}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3782537"
                        title="CasaStyle - Diana 3 Seater Sofa (Grey) | Best for Living Rooms, Offices"
                        image="https://m.media-amazon.com/images/I/51GDVdGfoqL._AC_UL400_.jpg"
                        price={15559}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6827654"
                        title="Sony XBR55X900F 32-Inch 4K Ultra HD Smart LED Android TV with Alexa Compatibility - 2018 Model"
                        image="https://m.media-amazon.com/images/I/71uqLWUl2GL._AC_UY327_FMwebp_QL65_.jpg"
                        price={31990}
                        rating={5}
                    />
                    <Product
                        id="4818145"
                        title="OnePlus Y Series 108 cm (43 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
                        image="https://m.media-amazon.com/images/I/817gj7pfUzL._AC_UY327_FMwebp_QL65_.jpg"
                        price={22990}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}


export default Home
