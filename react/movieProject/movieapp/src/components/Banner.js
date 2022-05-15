import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <div className="card banner-card" >
        <img className="card-img-top banner-image" src="https://cdn.gulte.com/wp-content/uploads/2022/04/the-battleground-looks-set-its-going-to-be-intense-trailer-of-kgf-chapter-2-to-be-launched-on-27th-march-at-6-40-pm-001.jpg" alt="Card image cap"/>
     
          <h3 className="card-title banner-title"></h3>
          <p className="card-text banner-text"></p>
         
        
      </div>
    )
  }
}

export default Banner