import "./UserCard.scss";
import locationIcon from "../../assets/icon-location.svg";
import websiteIcon from "../../assets/icon-website.svg";
import socialIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";

export default function UserCard() {
  return (
    <section class="user-card">
      <div class="user__header">
        <div class="user__img"></div>
        <div class="user__header-info">
          <h1 class="user__name">The Octocat</h1>
          <h3 class="user__handle">@octocat</h3>
          <h3 class="user__date-joined">Joined 25 Jan 2011</h3>
        </div>
      </div>
      <p class="user__description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div class="user-stats">
        <div class="user-stats__repos">
          <p class="user-stats__label">Repos</p>
          <p class="user-stats__info">8</p>
        </div>
        <div class="user-stats__followers">
          <p class="user-stats__label">Followers</p>
          <p class="user-stats__info">3938</p>
        </div>
        <div class="user-stats__following">
          <p class="user-stats__label">Following</p>
          <p class="user-stats__info">9</p>
        </div>
      </div>
      <div class="user-links">
        <div class="user-links__location user-link__container">
          <img class="location-icon" src={locationIcon} alt="location pin" />
          <p class="user-link__name">San Francisco</p>
        </div>
        <div class="user-links__website user-link__container">
          <img class="website-icon" src={websiteIcon} alt="website" />
          <p class="user-link__name">https://github.blog</p>
        </div>
        <div class="user-links__social user-link__container">
          <img class="social-icon" src={socialIcon} alt="twitter" />
          <p class="user-link__name">Not Available</p>
        </div>
        <div class="user-links__company user-link__container">
          <img src={companyIcon} alt="office building" />
          <p class="user-link__name">@github</p>
        </div>
      </div>
    </section>
  );
}
