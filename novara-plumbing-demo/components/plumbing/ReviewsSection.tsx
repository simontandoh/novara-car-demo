import { reviews } from "./content";

export function ReviewsSection() {
  return (
    <section id="reviews">
      <div className="reviews-inner">
        <div className="reviews-header">
          <div>
            <p className="section-label">Reviews</p>
            <h2 className="section-title">
              4.9 Stars.
              <br />
              3,200+ Jobs.
            </h2>
          </div>
          <p className="reviews-side-note">
            Verified reviews from real Liverpool customers via Google and
            Checkatrade.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <blockquote
              className="review-card reveal-on-scroll"
              key={review.author}
            >
              <div className="review-stars" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span className="star" key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="review-text">{review.quote}</p>
              <cite className="review-author">{review.author}</cite>
              <div className="review-location">{review.location}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
