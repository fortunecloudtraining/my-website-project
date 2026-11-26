import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import aboutImage from "../assets/react.svg";
import '../assets/css/home.css'

const headingColor = {
    color: "red",
    backgroundColor: "yellow",
    fontSize: "50"
}
const Home = () => {
    return (
        <>
            <section>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slider2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slider3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-4">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente necessitatibus minus, facilis perspiciatis earum voluptates sequi, impedit velit vel nam praesentium laboriosam quaerat corrupti voluptatibus commodi suscipit molestias omnis incidunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente necessitatibus minus, facilis perspiciatis earum voluptates sequi, impedit velit vel nam praesentium laboriosam quaerat corrupti voluptatibus commodi suscipit molestias omnis incidunt.</p>
                        </div>
                        <div className="col-md-6 p-4">
                            <img src={aboutImage} className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5 bg-dark mb-5">
                <div className="container p-3">
                    <div className="row">
                        <h1 className="p-3 text-white">Our Products</h1>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={slider1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product1</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={slider2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product2</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={slider3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product3</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h1 style={{ color: "blue", backgroundColor: "black" }}>This is Inline Css Example</h1>

                <h1 style={headingColor}>This is Internal css Example</h1>

                <h1 className="myText">This is External CSS Example</h1>
            </section>

        </>
    )
}
export default Home