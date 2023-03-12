function News(){
    return(
        <section className="news-sec">
                <h1>News</h1>
                <div className="news-outer-card">
                <div className="news-cards">
                    <div className="news-card" style={{backgroundImage:`url("${"https://media.istockphoto.com/id/1397501916/photo/massive-lightning-bolt-with-branches-isolated-on-black-background-branched-lightning-bolt.jpg?b=1&s=170667a&w=0&k=20&c=LYTs-6iHNDMUhPjAexkYWD4d9X7852PXtBDBHXOGa8g="}")`}}>
                    <div className="fake"></div>
                        <span><button>Read More</button></span>
                        <h3>Thunder Strikes in Mumbai</h3>
                    </div>
                    <div className="news-card" style={{backgroundImage:`url("${"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"}")`}}>    
                        <div className="fake"></div>
                        <span><button>Read More</button></span>
                        <h3>Cloudstorm in Jaipur</h3>    
                    </div>
                    <div className="news-card" style={{backgroundImage:`url("${"https://media.istockphoto.com/id/905143362/photo/twilight-sky-background-sky-sunset-sunrise-orange-sky-blue.jpg?s=612x612&w=0&k=20&c=kksnnoMl2-Q3hp6ZHtnObpV4u4VW0KYNcsYizqHd5l0="}")`}}>
                    <div className="fake"></div>
                        <span><button>Read More</button></span>
                        <h3>It's Sunny in Chennai</h3>
                    </div>
                </div> 
                </div>   
        </section>
    )
}

export default News;