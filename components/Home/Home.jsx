import React from 'react'
import PlacementStories from './PlacementStories'
import Hero from './Hero'
import Awards from './Awards'
import Recognition from './Recognition'
import About from './About'
import Reviews from './Reviews'
import Faq from './Faq'
import Course from './Course'

const Home = () => {
    return (
        <div>
            <Hero />
            <Awards />
            <Recognition />
            <Course/>
            <PlacementStories />
            
            <About />
            <Reviews />
            {/* <Faq /> */}
        </div>
    )
}

export default Home
