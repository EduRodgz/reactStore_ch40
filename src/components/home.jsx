import './home.css';

function Home() {
    return (
        <div className='home page'>
            <h1>Why you should buy from us!</h1>
            <h5>
                Originating from Texas, we believe in strong American and patriotic values since 1998. We Sell Boot named products to all the new body stackers of the United States Marine Corps, anyone from enlisted to officers!
                <br />
                Learn more about our <a href="/about">history</a>.
            </h5>
            <img src="./images/texas.jpg" alt="texas" />
        </div>
    );
}

export default Home;