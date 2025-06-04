import React from 'react'
import TrailContainer from './trail-container'
const imageTrail = () => {
  return (
    <div>
        <section className="hero">
            <div className="hero-img">
                <img src="/hero.jpg" alt="hero" />
            </div>
            <p>life is in Frames</p>
            <p>We capture the moments that matter</p>

            <TrailContainer />
      </section>
    </div>
  )
}

export default imageTrail