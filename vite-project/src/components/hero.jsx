const HeroSection = () =>{
    return (
        <main className="hero container">
            <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST </h1>
            <p> Your Feet Deserves the best and We're Here to help you with Our Shoes 
                Your Feet Deserves the best and We're Here to help you with Our Shoes 
                                </p>

        <div className="hero-buttons">
            <button> Shop Now </button>
            <button className="Secondary-btn">Category</button>
            </div>

        <div className="Shopping"> 
            <p>Also Available On</p>
            <p><img src="/images/amazon.png" alt="amazon" height={50} /></p>
            <p><img src="/images/flipkart.png" alt="flipkart" height={50} /></p>
        </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero.jpeg" alt="Hero" height={250}/>
            
        </div>
     </main>

    );
        };
export default HeroSection;