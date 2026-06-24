'use client';

import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
}

export const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  /*
    NOTE FOR DESSERT GROOVE DEVELOPERS:
    These are the actual static Google Reviews recorded for Dessert Groove.
    If you wish to fetch these dynamically in the future, you can integrate the
    Google Places API (https://maps.googleapis.com/maps/api/place/details/json)
    using the Place ID for Dessert Groove Wakad.
  */
  const googleReviews: GoogleReview[] = [
    {
      id: 'g-rev-1',
      author: 'Nupur Joshi',
      rating: 5,
      date: '8 months ago',
      text: `Ordered two wheat crust pizzas and they were absolutely delicious. Usually wheat pizzas have this weird bitterness but these were so good! They weren't too heavy like the fast food pizzas. It had tons of veggies and cheese too! The sauce was homemade and had this savoury tomato flavour instead of the tangy and citrusy store bought flavour. The lady was very nice and hospitable. Wonderful experience! If you are looking to try delicious, homemade and actually tasty pizzas, this is your spot.`
    },
    {
      id: 'g-rev-2',
      author: 'Tanya Srivastava',
      rating: 5,
      date: 'a year ago',
      text: `We ordered baguette,Focaccia and Brownie. We were really happy with the quality of the products. The brownie was amazing, made with jowar, ragi, dates, jaggery and cocoa powder sourced from South India. Appreciate Subha for informing before ordering about the ingredients. Highly recommend her baked goods if you're looking for fresh, healthy and quality products.`
    },
    {
      id: 'g-rev-3',
      author: 'Nirupama G',
      rating: 5,
      date: 'a year ago',
      text: `We were planning to go on a weight reduction diet and Dessert Groove cookies arrived, like Menaka! Forget the weight, said our tongue and tummy.
I haven't tasted cookies that tasted so yumm, before, that too with healthier sweeteners. The cookies "stole our heart". 💗
Have to definitely tell about the plum cake. It tastes authentic, even without eggs. I rarely find eggless version of plum cakes, in Coimbatore. Loved the crunch of the nuts and the dry fruits in the soft-o-soft plum cake!
Why should plum cakes be baked around Christmas only? May be, for me to watch my weight😬
Dessert Groove delicacies. are 100% *Keepers*`
    },
    {
      id: 'g-rev-4',
      author: 'Tarang Rana',
      rating: 5,
      date: 'a year ago',
      text: `had come to Pune 4 years back when entire country was in the grip of the COVID pandemic.I was searching for a bakery which would make our family celebrations more beautiful.

One of my close friends recommended dessert groove Since then every year all of ourbirthday cakes infact plum cake also In christmas come from desert grove
And Anu puts all her love in baking the cakes.

Recently I ordered blueberry cake for my son's bday and it was full of flavour and was so yummy.

Keep it up Dessert grove!`
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 474; // Card width (450px) + Gap (24px)
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Customer Trust</span>
          <h2 className="section-title">Real Google Reviews</h2>
          <div className="section-divider" />
          
          {/* Trust Rating Dashboard Banner */}
          <div className="google-rating-dashboard flex-center">
            <div className="rating-summary-card flex-center">
              <div className="google-logo-mock flex-center">G</div>
              <div className="rating-summary-info">
                <div className="stars-row flex-center" style={{ gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="star-filled" />
                  ))}
                </div>
                <p className="rating-summary-text">
                  <strong>5.0 / 5.0</strong> 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="reviews-carousel-wrapper">
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')} 
            className="carousel-nav-btn prev flex-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Swipeable Viewport */}
          <div ref={carouselRef} className="reviews-carousel-container">
            {googleReviews.map((review) => (
              <div key={review.id} className="review-card-slide">
                <div className="carousel-card-header">
                  <div className="review-author-meta">
                    <div className="author-avatar flex-center">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="review-author-name">{review.author}</h4>
                      <span className="review-google-badge">Verified Local Guide</span>
                    </div>
                  </div>
                  <span className="review-card-date">{review.date}</span>
                </div>

                <div className="review-stars-row flex-center" style={{ gap: '4px', justifyContent: 'flex-start', margin: '16px 0' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? 'star-filled' : 'star-empty'} 
                    />
                  ))}
                </div>

                <p className="carousel-review-text">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')} 
            className="carousel-nav-btn next flex-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Call to review */}
        <div className="reviews-footer text-center" style={{ marginTop: '40px' }}>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <MessageSquare size={16} />
            <span>Write a Review on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
