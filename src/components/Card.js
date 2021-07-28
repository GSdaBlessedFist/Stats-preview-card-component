import "../SCSS/styles.scss";
import {useEffect} from "react";

export default function Card() {
    useEffect(() => {
        var h2Group = document.querySelectorAll('h2');
        var count = 550;
        h2Group.forEach((h2) => {
            setTimeout(() => {
                h2.classList.add('pulse');
            }, count)
            count += 750;
        })

    }, []);
    var imageStyle = {
        border: '0px white solid',
        textDecoration: 'none'
    }
    return (<>
        <div className="card">
            <img className="card__image-hero" style={imageStyle} alt=""/>
            <div className="card--content">
                <h1 className="card--content__text1"> <b> Get <span className="accent"> insights </span> that help your business grow.</b></h1>
                <div className = "card--content__text2">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                </div>
                <div className="card--content__info-section">
                    <div>
                        <h2> 10 k + </h2>
                        <h5> COMPANIES </h5>
                    </div>
                    <div>
                        <h2> 314 </h2>
                        <h5> TEMPLATES </h5>
                    </div>
                    <div >
                        <h2> 12 M + </h2>
                        <h5> QUERIES </h5>
                    </div>
                </div>
            </div> 
            
        </div>
    </>);
}