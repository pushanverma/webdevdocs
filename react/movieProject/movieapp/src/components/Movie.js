import React, { Component } from 'react'

import axios from 'axios';


import {movies} from '../movieData'
 
export class MovieList extends Component 
{
  constructor(){
console.log("constructor first");
    super();
    this.state={
      hover:"",
      parr:[1],
      movies:[],
    };
  }

  async componentDidMount(){
  const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b8bea083b30ce1722a66000967ce3316&language=en-US&page=2`)
  let movieData = res.data
  console.log(movieData)
 
    this.setState({
      movies:[...movieData.results]
    })

    console.log('mounting done with CDM third')
}
  render() 
  {
    console.log('render second');
      let moviesArr = movies.results
      console.log(moviesArr)

    return (
            <>
            <div >
                  <h3 className='text-center' style={{marginTop:'75px'}}> <strong>Trending</strong></h3>
                </div>  
                  <div className='movies-list'>
                    {
                      moviesArr.map((movieElem)=>(
                        <div className='card movie-card' onMouseEnter={()=> this.setState({hover:movieElem.id})}  onMouseLeave={()=>this.setState({hover:""})}>

                            <img  style={{height:'40vh' , width:'20vw'}} className="card-img-top movie-img"   src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`} alt='image not found'/>
                 
                            <h5 className="card-title movie-title">{movieElem.title}</h5>
                       
                      

                            <div className="button-wrapper" style={{display : 'flex' , justifyContent:'center'}}>
                            {this.state.hover == movieElem.id && (
                              <a href="#" className="btn btn-primary movies-button text-center">Add to Favourites</a>
                )}
                  
                            </div>
                        
                        </div>
                      ))
                    }
                  </div>

                  <div  style={{display:'flex', justifyContent:'center'}}>
                  <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                      </ul>
                  </nav>
                  </div>
            </>
  
    )
  }
}

export default MovieList