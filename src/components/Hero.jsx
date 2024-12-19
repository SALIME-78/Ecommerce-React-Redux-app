import React from 'react'

function Hero() {
  return (
    <div className="relative h-[calc(100vh-72px)] ps-14">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-forest-image.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white max-w-3xl">
          <h1 className="text-4xl font-light mb-4">
            Welcome to our store
          </h1>
          <p className="text-lg">
            Welcome to our store! Discover a wide range of high-quality products at competitive prices, all in one place. Enjoy a seamless shopping experience with fast delivery and exclusive deals.
          </p>
        </div>
      </div>
  )
}

export default Hero