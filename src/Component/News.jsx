import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Sppiner from './Sppiner';



export class News extends Component {
    // static defaultProps = {
    //     country : 'in',
    //     pageSize: 8,
    //     category: 'general',
    // }

    // static propsTypes = {
    //     country: PropsTypes.string,
    //     pageSize: PropsTypes.number,
    //     category: PropsTypes.string,
    // }
    
    constructor(props){
        super(props);
        // console.log("constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.props.category} - NewsMonkey`
    }

//    async updateNews(){
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66ea144d1ec94e229c11855135cb6a15&page=${this.state.page} &pageSize=${this.props.pageSize}`
//         this.setState({loading: true})

//         let data = await fetch(url)
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState({
//             articles: parsedData.articles,totalResults: parsedData.totalResults,
//             loading: false
//          })

//    }


   async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66ea144d1ec94e229c11855135cb6a15&page=${this.state.page = 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})

        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,totalResults: parsedData.totalResults,
            loading: false
         })
        
    }

    handlePreviousClick = async ()=>{
        let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66ea144d1ec94e229c11855135cb6a15&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})

        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        console.log("previous btn clicked");
        
        // this.setState({page: this.state.page - 1});
        // this.updateNews();
    }
    handleNextClick = async ()=>{

        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/6))){

        

        let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66ea144d1ec94e229c11855135cb6a15&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})

        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page +1,
            loading: false
        })
        console.log("next btn clicked");
    // }

    // this.setState({page: this.state.page + 1});
    // this.updateNews();

    }


  render() {
    return (
      
        <div className="container ">
            <h1 className=" m-4 text-center">NewsMonkey:-Top <b>{this.props.category}</b> Headlines</h1>
            {this.state.loading && <Sppiner/>}
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-4">
         
        {!this.state.loading && this.state.articles.map((element)=>{
            
            return   <div key ={element.url}> 
            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            
            
            })}

        

        </div>
        {!this.state.loading && <div className="container d-flex justify-content-between">

        <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;	</button>

  
        </div>}
        </div>
        
      
    );
  }
}

export default News;
