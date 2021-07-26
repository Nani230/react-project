import "./Icon.css"
import searchicon from "./images/searchicon.svg"
import profile from "./images/profile.svg"
import heart from "./images/heart.svg"
import notification from "./images/notification.svg"
import sell from "./images/sell.svg"
import up from "./images/up.svg"
import question from "./images/question.svg"
import download from "./images/download.svg"
import rewards from "./images/rewards.svg"
import gift from "./images/gift.svg"
import plus from "./images/plus.svg"
import orders from "./images/orders.svg"
import topoffers from "./images/topoffers.png"
import surf from "./images/surf.png"
import mobiles from "./images/mobiles.png"
import fashion from "./images/fashion.png"
import laptop from "./images/laptop.png"
import chair from "./images/chair.jpg"
import washin from "./images/washin.png"
import travel from "./images/travel.png"
import bear from "./images/bear.png"
import deals from "./images/deals.jpg"
import poco from "./images/poco.jpg"
import oppo from "./images/oppo.jpg"
import realme from "./images/realme.jpg"

function Icon(){
    return(
    <div className="body">
            <div className="navbar sticky-top">
                <h1>flipkart</h1>
                <input type="text" placeholder="search"/>
                <img className="searchicon" src={searchicon} alt="" />  
                < button className="login">log in
                <div className="onotherdropdown">
            
                    <a  href="/"><i className="new">New Customer?</i><span className="signup">Sign up</span></a><br /><hr />
                    

                    <img className="profie" src={profile} alt=""/>
                    <a href="/">My profile</a><br /><hr />
                     
                    <img  src={plus} alt=""/>
                    <a href="/"> Flipkart plus Zone </a ><br /><hr />

                    <img src={orders} alt=""/>
                    <a href="/">orders</a><br /><hr />

                    <img src={heart} alt=""/>
                    <a href="/">Wishlist</a><br /><hr />

                    <img src={rewards} alt=""/>
                    <a href="/">Rewards</a><br /><hr />
                     
                    <img src={gift} alt=""/>
                    <a href="/">Gift Cards</a><br />


            </div>
            
                </button>

                <button className="more" >More
                     <div className="dropdown">
                        
                        <img src={notification} alt=""/>
                        <a href="/">Notification preferences</a><br /><hr />

                        <img src={sell} alt=""/>
                        <a href="/">sell on flipkart </a ><br /><hr />

                        <img src={question} alt=""/>
                        <a href="/">24x7 Customer Care</a><br /><hr />

                        <img src={up} alt=""/>
                        <a href="/">Advertise</a><br /><hr />

                        <img src={download} alt=""/>
                        <a href="/">Downlaod App</a><br />

                     </div>

                </button>

                <button className="cart">cart</button>
              
            </div>


            <div className="items_contenet">
                <div className="cards">
                    <img src={topoffers} alt=""/>
                    <div>
                        <a href="/">Top Offers</a>
                    </div>
               </div>

               <div className="cards">
                    <img src={surf} alt=""/>
                    <div>
                        <a href="/">Grocery</a>
                    </div>
               </div>

               <div className="cards" >
                    <img src={mobiles} alt=""/>
                    <div>
                        <a href="/">Mobiles</a>
                    </div>
               </div>


               <div className="cards">
                    <img src={fashion} alt=""/>
                    <div>
                        <a className="fashion" href="/">Fashion
                        <div className="mens-top-wear">
                            <a  className="top-wear" href="/">Men's Top Wear
                            <div className="side-bar">
                                <i> More in Mens top wear</i>
                                <a href="/">All</a>
                                <a href="/">Men's T-Shirts</a>
                                <a href="/">Men's casual Shirts</a>
                                <a href="/">Men's Formal Shirts</a>
                                <a href="/">Men's Kurtas</a>
                                <a href="/">Men's Ethnic Sets</a>
                                <a href="/">Men's Blazers</a>
                                <a href="/">Men's Raincoat</a>
                                <a href="/">Men's Windcheaters</a>
                                <a href="/">Men's Suit</a>
                                <a href="/">Men's Fabrics</a>

                            </div>
                            </a>
                            <a className="bottom-wear" href="/">Men's Bottom Wear
                            <div className="side-bar">
                                <i> More in Mens Bottom wear</i>
                                <a href="/">All</a>
                                <a href="/">Men's jeans</a>
                                <a href="/">Men's Trousers</a>
                                <a href="/">Men's Trackpants</a>
                                <a href="/">Men's Shorts</a>
                                <a href="/">Men's Cargos</a>
                                <a href="/">Men's Threefourths</a>
                                <a href="/">Men's Pyjamas & Loungepants</a>
                                <a href="/">Men's Dhoti</a>
                                <a href="/">Men's Ethnic Pyjam</a>

                            </div>
                            </a>

                            <a href="/">Womens Ethnic
                            <div className="side-bar">
                                <i> More in Mens Bottom wear</i>
                                <a href="/">All</a>
                                <a href="/">Women sarees</a>
                                <a href="/">WoMen Kurtas & Kurtis</a>
                                <a href="/">Women Kurta Sets & Salwar Suits</a>
                                <a href="/">Ethnic Dresses</a>
                                <a href="/">Women Dress Materials</a>
                                <a href="/">Wom</a>
                                <a href="/">Men's Pyjamas & Loungepants</a>
                                <a href="/">Men's Dhoti</a>
                                <a href="/">Men's Ethnic Pyjam</a>

                            </div>
                            </a>
                            <a href="/">Womens Western</a>
                            <a href="/">Men Footwear</a>
                            <a href="/">Women footwear</a>
                            <a href="/">Watch and Accessories</a>
                            <a href="/">Bags,Suitcases & Luggage</a>
                            <a href="/">Kids</a>
                            <a href="/">Essentials</a>
                            <a href="/">Winter</a>


                        </div>
                        
                        </a>
                       
                    </div>
               </div>

               <div className="cards">
                    <img src={laptop} alt=""/>
                    <div>
                        <a href="/">Electronics</a>
                    </div>
               </div>


               <div className="cards">
                    <img src={chair} alt=""/>
                    <div>
                        <a href="/">Home</a>
                    </div>
               </div>


               <div className="cards">
                    <img src={washin} alt=""/>
                    <div>
                        <a href="/">Appliances</a>
                    </div>
               </div>


               <div className="cards">
                    <img src={travel} alt=""/>
                    <div>
                        <a href="/">Travel</a>
                    </div>
               </div>


               <div className="cards">
                    <img src={bear} alt=""/>
                    <div>
                        <a href="/">Beauty,Toys&More</a>
                    </div>
               </div>
           
        </div>
        {/* <img  src={oppo} alt=""/> */}


        {/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}

        <div className="top">
            <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div>
            <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div> <div>
                <img src={washin} alt=""/>
                <div>
                    <h1>Best washinmeachines</h1>
                    <p>loremdacjnjnkjszn kjnkjnk jnkj x kjn jn jh</p>
                    <button>buy now</button>
                </div>
            </div>
        </div>

        <div>
            <div>
                
            </div>
        </div>


    </div> 
    );
}

export default Icon