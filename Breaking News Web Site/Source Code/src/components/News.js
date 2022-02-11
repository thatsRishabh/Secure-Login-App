import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }
     capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} -Indian Breaking News`;
    }
    // we are writing multiple function into one so commented out below and made this function
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e682ff97199415b9f0bc07e777fcbb6&page=${this.state.page - 1}&pageSize=18`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    // componentdidMount is when 1st time the information is featched from API. Also this is react class based component not function based component so we are using 'this.props' insted of 'props'
    async componentDidMount() {
    {/*     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e682ff97199415b9f0bc07e777fcbb6&page=1&pageSize=18`;
        // let url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=0e682ff97199415b9f0bc07e777fcbb6&page=1pageSize=20";  //news source google
        // let url = "https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=0e682ff97199415b9f0bc07e777fcbb6&page=1pageSize=20"; //news source times of india
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({  articles: parsedData.articles,
                         totalResults: parsedData.totalResults ,
                         loading: false}) */}
        this.updateNews();
    }

    handlePrevClick = async () => {
     {/*    console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e682ff97199415b9f0bc07e777fcbb6&page=${this.state.page - 1}&pageSize=18`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        }) */}

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
     {/*    console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e682ff97199415b9f0bc07e777fcbb6&page=${this.state.page + 1}&pageSize=18`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }*/}

        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    render() {
        return (
            <div className="container my-3">
                {/* below style has first{} for writing javascript and inside {} for writing object */}
                <h2 className="text-center" style={{margin: '35px 0px'}}>Indian Breaking News Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner/>}
                {/* in above if loading is happening than only spinner will show */}
                <div className="row">
                    {/* in below while loading is happening our news will not be shown */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            {/* below slice fuction will cut short the text and headline */}
                            <NewsItem title={element.title ? element.title.slice(0, 90) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 18)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
