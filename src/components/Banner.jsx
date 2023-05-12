import bannerImg from "./images/snapback-banner.jpg";

const Banner = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-12">
                    <img src={bannerImg} className="img-fluid" width="2000" alt="BannerBullStyle" />
                </div>
            </div>
        </div>
    )
}

export default Banner;