import "./UserCard.scss";
import locationIcon from "../../assets/icon-location.svg";
import linkIcon from "../../assets/icon-website.svg";
import socialIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";

export default function UserCard() {
  return (
    <section className="user-card">
      <div className="user__header">
        <div className="user__img"></div>
        <div className="user__header-info">
          <div>
            <h1 className="user__name">The Octocat</h1>
            <h3 className="user__handle">@octocat</h3>
          </div>
          <h3 className="user__date-joined">Joined 25 Jan 2011</h3>
        </div>
      </div>
      <p className="user__description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="user-stats">
        <div className="user-stats__repos">
          <p className="user-stats__label">Repos</p>
          <p className="user-stats__info">8</p>
        </div>
        <div className="user-stats__followers">
          <p className="user-stats__label">Followers</p>
          <p className="user-stats__info">3938</p>
        </div>
        <div className="user-stats__following">
          <p className="user-stats__label">Following</p>
          <p className="user-stats__info">9</p>
        </div>
      </div>
      <div className="user-links">
        <div>
          <div className="user-links__location user-link__container">
            <img
              className="location-icon"
              src={locationIcon}
              alt="location pin"
            />
            <p className="user-link__name">San Francisco</p>
          </div>
          <div className="user-links__website user-link__container">
            <img className="link-icon" src={linkIcon} alt="website" />
            <p className="user-link__name">https://github.blog</p>
          </div>
        </div>
        <div>
          <div className="user-links__social user-link__container">
            <img className="social-icon" src={socialIcon} alt="twitter" />
            <p className="user-link__name info-unavailable">Not Available</p>
          </div>
          <div className="user-links__company user-link__container">
            <img src={companyIcon} alt="office building" />
            <p className="user-link__name">@github</p>
          </div>
        </div>
      </div>
    </section>
  );
}
