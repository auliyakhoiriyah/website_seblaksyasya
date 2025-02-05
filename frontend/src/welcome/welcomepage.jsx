import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/bg.jpeg";
import sblk from "../assets/seblak biasa.jpg";
import sblk2 from "../assets/seblak mie.jpg";
import sblk3 from "../assets/seblak mix.jpg";
import {StarFilled} from "@ant-design/icons";
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Gambar Background */}
            <img 
                src={bg}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            
            {/* Navbar */}
            <div className="relative p-5">
                <Navbar />
            </div>

            {/* Konten Kiri dengan Card */}
            <div className="absolute top-0 left-0 h-full flex items-center p-4 pt-36">
                <div className="grid grid-cols-1 gap-8">
                    {/* Card 1 */}
                    <div className="relative bg-white bg-opacity-50 w-[230px] max-w-sm p-3 rounded shadow-md flex flex-col">
                        <div className="flex-1">
                        <div className="w-1/2 h-3/4">
                            <h3 className="text-lg text-right font-semibold text-green-950">Seblak Biasa</h3>
                            <p className="text-xs text-right font-semibold text-green-950">5.000<small> Rp</small></p>
                            <p className="text-xs text-green-950">
                                <small className="flex items-center gap-1">
                                    <StarFilled style={{ color: 'gold' }} />
                                    <span className="text-green-950">4.5</span>
                                    <span className="ml-8 text-green-950">33 Terjual</span>
                                </small>
                            </p>
                        </div>    
                        </div>
                        <Link to="/signin">
                        <button className="mt-4 py-2 px-10 bg-gray-300 text-green-900 font-bold text-md rounded-md hover:bg-gray-200 drop-shadow-lg">
                            Pesan Sekarang!
                        </button>
                        </Link>
                        <img 
                            src={sblk}
                            alt="Foto 1"
                            className="w-24 h-24 rounded-lg absolute -top-5 right-2 drop-shadow-lg"
                        />
                    </div>
                    {/* Card 2 */}
                    <div className="relative bg-white bg-opacity-50 w-[230px] max-w-sm p-3 rounded shadow-md flex flex-col">
                        <div className="flex-1">
                        <div className="w-1/2 h-3/4">
                            <h3 className="text-lg text-right font-semibold text-green-950">Seblak Mie</h3>
                            <p className="text-xs text-right font-semibold text-green-950">10.000<small> Rp</small></p>
                            <p className="text-xs text-green-950">
                                <small className="flex items-center gap-1">
                                    <StarFilled style={{ color: 'gold' }} />
                                    <span className="text-green-950">4.5</span>
                                    <span className="ml-8 text-green-950">33 Terjual</span>
                                </small>
                            </p>
                        </div>    
                        </div>
                        <Link to="/signin">
                        <button className="mt-4 py-2 px-10 bg-gray-300 text-green-900 font-bold text-md rounded-md hover:bg-gray-200 drop-shadow-lg">
                            Pesan Sekarang!
                        </button>
                        </Link>
                        
                        <img 
                            src={sblk2}
                            alt="Foto 1"
                            className="w-24 h-24 rounded-lg absolute -top-5 right-2 drop-shadow-lg"
                        />
                    </div>
                    {/* Card 3 */}
                    <div className="relative bg-white bg-opacity-50 w-[230px] max-w-sm p-3 rounded shadow-md flex flex-col">
                        <div className="flex-1">
                        <div className="w-1/2 h-3/4">
                            <h3 className="text-lg text-right font-semibold text-green-950">Seblak Mix</h3>
                            <p className="text-xs text-right font-semibold text-green-950">25.000<small> Rp</small></p>
                            <p className="text-xs text-green-950">
                                <small className="flex items-center gap-1">
                                    <StarFilled style={{ color: 'gold' }} />
                                    <span className="text-green-950">4.5</span>
                                    <span className="ml-8 text-green-950">33 Terjual</span>
                                </small>
                            </p>
                        </div>    
                        </div>
                        <Link to="/signin">
                        <button className="mt-4 py-2 px-10 bg-gray-300 text-green-900 font-bold text-md rounded-md hover:bg-gray-200 drop-shadow-lg">
                            Pesan Sekarang!
                        </button>
                        </Link>
                        <img 
                            src={sblk3}
                            alt="Foto 1"
                            className="w-24 h-24 rounded-lg absolute -top-5 right-2 drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute w-96 bottom-4 right-28 p-4 rounded-lg">
                <p className="text-sm text-center font-bold">
                    <big>Seblak</big> kini menjadi makanan yang digemari berbagai kalangan masyarakat.Seiring berkembangnya tren jajanan tradisional dan kaki lima, kini seblak muncul dengan berbagai varian.
                </p>
            </div>
        </div>
    );
};

export default WelcomePage;
