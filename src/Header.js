import "./App.css"
function Header(){
    return(
        <div className="Header">
            <div className="nav-outer">
                <div className="nav">
                    <div className="home nav-heading">Home</div>
                    <div className="nav-heading">Cities</div>
                    <div className="nav-heading">News</div>
                </div>
            </div>
            <div className="head-middle-outer">
                <div className="head-middle">
                    <h2>Weather Details</h2>
                    <div className="rows">
                        <div className="row-item"><p>Cloudy</p><p>10%</p></div>
                        <div className="row-item"><p>Humidity</p><p>65%</p></div>
                        <div className="row-item"><p>Wind</p><p>8Km/h</p></div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="temp"><h1>24</h1><span style={{fontWeight:"normal",fontSize:"2.5rem"}}>&#176;</span></div>
                <div className="city-date">
                    <p className="header-city">Hyderabad</p>
                    <small>08:30&nbsp;&nbsp;  Saturday&nbsp;&nbsp; 11/3/23</small>
                </div>
                <div className="sun-icon">
                    <i style={{fontSize:"2rem"}} class="fa fa-thin fa-sun"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;