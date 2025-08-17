import React from "react";
import roomsCSS from './../Rooms/Room.module.css'

function Rooms() {
    return(
        <div className={`${roomsCSS.Rooms_container} section`} id="Rooms">
            <h2 className="section_Title"> Our Rooms<span> and Prices:</span></h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                            <button className="btn">Junior Suite</button>
                        </div>
                        <div className={roomsCSS.Card_Back}>
                            <div className={roomsCSS.price}>
                                <p>$100/Night</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Flat-Screen TV</p>
                                <p> - Mini-Fridge</p>
                                <p> - Wifi</p>
                                <p> - Resto Access</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                            <button className="btn">Twin Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back2}`}>
                            <div className={roomsCSS.price}>
                                <p>$150/Night</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Twin Room</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Twin Bed</p>
                                <p> - Flat-screen TV</p>
                                <p> - Mini-Fridge</p>
                                <p> - Wifi and Parking</p>
                                <p> - Resto Access</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                            <button className="btn">Quad Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back3}`}>
                            <div className={roomsCSS.price}>
                                <p>$200/Night</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Quad Room</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Quad Bed</p>
                                <p> - Flat-screen TV</p>
                                <p> - Fridge</p>
                                <p> - Wifi and Parking</p>
                                <p> - Resto Access</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                            <button className="btn">Deluxe Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back4}`}>
                            <div className={roomsCSS.price}>
                                <p>$250/Night</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Deluxe Room</h3>
                                <p> - Premium Cleaning</p>
                                <p> - Spacious Bathroom</p>
                                <p> - Fridge and TV</p>
                                <p> - Wifi and Parking</p>
                                <p> - Resto and Gym</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front5}`}>
                            <button className="btn">Exclusive Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back5}`}>
                            <div className={roomsCSS.price}>
                                <p>$300/Night</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Exclusive Room</h3>
                                <p> - Premium Cleaning</p>
                                <p> - Spacious Room</p>
                                <p> - Fridge, TV and Balcony</p>
                                <p> - Wifi and Parking</p>
                                <p> - Bar, Resto and Gym</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front6}`}>
                            <button className="btn">VIP Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back6}`}>
                            <div className={roomsCSS.price}>
                                <p>$350/Night</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>VIP Room</h3>
                                <p> - Exclusive Cleaning</p>
                                <p> - Luxurious Room</p>
                                <p> - Fridge, TV and Balcony</p>
                                <p> - Wifi and Parking</p>
                                <p> - Private Balcony</p>
                                <p> - Bar, Resto and Gym</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rooms