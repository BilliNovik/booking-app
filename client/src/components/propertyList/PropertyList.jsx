import React from 'react'
import './propertyList.scss'

const PropertyList = () => {
    return (
        <div className='container'>
            <h1 className='title'>Browse by property type</h1>
            <div className="property">
                <div className="property__item">
                    <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" className="property__img" />
                    <div className="property__titles">
                        <h1 className="property__general">Hotels</h1>
                        <h2 className="property__sub">867,143 hotels</h2>
                    </div>
                </div>
                <div className="property__item">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="property__img" />
                    <div className="property__titles">
                        <h1 className="property__general">Apartments</h1>
                        <h2 className="property__sub">855,753 apartments</h2>
                    </div>
                </div>
                <div className="property__item">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="property__img" />
                    <div className="property__titles">
                        <h1 className="property__general">Resorts</h1>
                        <h2 className="property__sub">17,874 resorts</h2>
                    </div>
                </div>
                <div className="property__item">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" className="property__img" />
                    <div className="property__titles">
                        <h1 className="property__general">Villas</h1>
                        <h2 className="property__sub">452,844 villas</h2>
                    </div>
                </div>
                <div className="property__item">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg" alt="" className="property__img" />
                    <div className="property__titles">
                        <h1 className="property__general">Guest houses</h1>
                        <h2 className="property__sub">104,692 guest houses</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyList