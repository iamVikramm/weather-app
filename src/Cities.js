
function Cities(){
    return(
        <section className="Cities">
                <h1>Cities</h1>
                <div className="outer-card">
                <div className="cards">
                    <div className="card">
                        <div className="image-name" style={{backgroundImage:`url("${"https://media.istockphoto.com/id/1397501916/photo/massive-lightning-bolt-with-branches-isolated-on-black-background-branched-lightning-bolt.jpg?b=1&s=170667a&w=0&k=20&c=LYTs-6iHNDMUhPjAexkYWD4d9X7852PXtBDBHXOGa8g="}")`}}>
                            <h3>Thunder</h3>
                        </div>
                        <div className="card-bottom">
                            <div className="degree"><h1>20</h1><span style={{fontWeight:"normal"}}>&#176;</span></div>
                            <div className="city-date">
                                <div className="city"><h2>Mumbai</h2></div>
                                <div className="date">11/3/23</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-name" style={{backgroundImage:`url("${"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"}")`}}>
                            <h3>Cloudy</h3>
                        </div>
                        <div className="card-bottom">
                            <div className="degree"><h1>24</h1><span style={{fontWeight:"normal"}}>&#176;</span></div>
                            <div className="city-date">
                                <div className="city"><h2>Hyderabad</h2></div>
                                <div className="date">11/3/23</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-name" style={{backgroundImage:`url("${"https://media.istockphoto.com/id/905143362/photo/twilight-sky-background-sky-sunset-sunrise-orange-sky-blue.jpg?s=612x612&w=0&k=20&c=kksnnoMl2-Q3hp6ZHtnObpV4u4VW0KYNcsYizqHd5l0="}")`}}>
                            <h3>Sunny</h3>
                        </div>
                        <div className="card-bottom">
                            <div className="degree"><h1>28</h1><span style={{fontWeight:"normal"}}>&#176;</span></div>
                            <div className="city-date">
                                <div className="city"><h2>Bengaluru</h2></div>
                                <div className="date">11/3/23</div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>   
            <div className="outer-search">
                <div className="search-bar-div">
                    <div className="input">Search City</div>
                    <i class="fa fa-thin fa-magnifying-glass"></i>
                </div>
            </div>
        </section>
    )
}

export default Cities;