import React, { useEffect} from 'react'
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { gsap } from 'gsap'
import M from "materialize-css/dist/js/materialize.min.js";

//Components
import AboutUs from './AboutUs';
import Navbar from './Navbar';

const LandingPage = ({ users }) => {

    gsap.fromTo('div .card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, });


    // useEffect(() => {
    //     var sidenav = document.querySelectorAll(".sidenav");
    //     M.Sidenav.init(sidenav, {});
    //   }, []);
    
    return (
        <>

            <Route exact path="/">
                <Navbar />
                {/* <nav>
                    <div className="nav-wrapper z-depth-0 blue-grey darken-3">
                        <a href="#!" className="brand-logo center">j.DevSpace</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">About Us</a></li>
                            <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                        </ul>

                        <ul id="nav-mobile" className="left">
                            <li><a href="https://github.com/ShaiahWren/Study-App" target="_blank"><span className="fab style2 major fa-github" style={{ padding: '12px', fontSize: '35px' }}></span></a></li>
                        </ul>
                    </div>
                </nav>

                <ul id="mobile-demo" className="sidenav">
                    <li><a href="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">About Us</a></li>
                    <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                </ul> */}

                <div className='intro'>
                    <h1 id="top">Our Beautiful Study App</h1>
                    <p>j.DevSpace is a resource for junior developers that neatly brings together interview prep, video coding tutorials, and the jobs search in an easy-to-use app. A back-end with express routes stores flashcards for JavaScript, Python, and React fundamentals in a database.</p>
                </div>
                <div className="intro-wrapper">
                    <div className="row">
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h3><a href="#news">News</a></h3>
                                {/* <p>A place for sharing news and resources about projects, tech, etc!</p> */}
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h3><a href="#flashcards">Flashcards</a></h3>
                                {/* <p>Quiz yourself on JS, React, etc!</p> */}
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h3><a href="#videos">Videos</a></h3>
                                {/* <p>Video tutorials and more</p> */}
                            </div>
                        </div>
                        <div className="col m6 l3">
                            <div className="card z-depth-0 blue-grey lighten-5">
                                <img className="intro-images" src="/images/flashcards.png" alt="" />
                                <h3><a href="#jobs">Jobs</a></h3>
                                {/* <p>Job info for junior devs</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-scroll">
                    <div>
                        <div>
                            <h2 id="news">News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>
                        </div>
                        <div>
                            <h2 id="flashcards">Flashcards</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>

                        </div>
                        <div>
                            <h2 id="videos">Videos</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>

                        </div>
                        <div>
                            <h2 id="jobs">Jobs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo vel orci porttitor malesuada. Proin sed tempor eros, sit amet dapibus turpis. Praesent vitae elit quis nibh facilisis eleifend. In id viverra tellus, sed varius mauris. Suspendisse vel ultrices urna. Sed sit amet dui et nisl dapibus feugiat sed eget mi. Mauris nunc velit, pulvinar id augue eget, vulputate dapibus sapien. Vestibulum est felis, ornare a purus vitae, scelerisque vestibulum diam. Fusce vehicula mi eget velit posuere, quis condimentum mi finibus. Nullam maximus ex nec ex posuere elementum. Cras at efficitur erat. Curabitur sed mauris purus. Aliquam feugiat mi eget purus dapibus, a vulputate nisl feugiat. Fusce semper eu odio sit amet posuere. Morbi quis velit nisl. Nunc eget ante sagittis dui finibus facilisis at vitae nunc.</p>
                            <p><a href="#top"><img className='backToTop' src="/images/back-to-top.png" alt="back to top"/></a></p>

                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/aboutus">
                <AboutUs />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </>
    )
}

export default LandingPage;
