
const Banner = () => {
    return (
        <div className="bg-[#1C1C3A]">
            <div className="container">
                <div className="row">
                    <div className="md:col-6">
                            <img src="/src/assets/banner.png" alt="hello" />

                    </div>
                    <div className="md:col-6 mt-10 md:mt-0 text-center">
                       <h2 className="text-white text-5xl font-bold mt-10 text-center">
                       Gauge Water Purifier <br /> <span className="text-[#D73565]">Puts An End</span> To RO <br />Service Pain
                       </h2>
                       <p className="text-slate-400 text-center mt-8">Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.</p>
                       <button className="btn btn-primary bg-blue-600 mt-5">Take a Product tour</button>
                       <p className="text-slate-300 mt-6">
                       Experience Convenience Like Never Before With Our Smart Water Purifier

                       </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;