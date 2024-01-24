import "./UserCard.scss";
import locationIcon from "../../assets/icon-location.svg";
import linkIcon from "../../assets/icon-website.svg";
import socialIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";

export default function UserCard({ userData, isDarkMode }) {
  return (
    <section className={`user-card ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="user__header">
        <div className="user__img-container">
          {userData && userData.avatar_url ? (
            <img
              className="user__img"
              src={userData.avatar_url}
              alt={`Avatar of ${userData.login}`}
            />
          ) : (
            <div className="user__placeholder-circle"></div>
          )}
        </div>
        <div className="user__header-info">
          <div>
            <h1 className="user__name">
              {userData?.name ? userData.name : userData?.login}
            </h1>
            <h3 className="user__handle">@{userData?.login}</h3>
          </div>
          <h3 className="user__date-joined">
            Joined{" "}
            {userData && userData.created_at
              ? new Date(userData.created_at)
                  .toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(",", "")
              : "Date not available"}
          </h3>
        </div>
      </div>
      <p
        className={`user__description ${userData?.bio ? "" : "no-bio-opacity"}`}
      >
        {userData?.bio || "This profile has no bio"}
      </p>
      <div className={`user-stats ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="user-stats__repos">
          <p className="user-stats__label">Repos</p>
          <p className="user-stats__info">
            {userData ? userData.public_repos : 0}
          </p>
        </div>
        <div className="user-stats__followers">
          <p className="user-stats__label">Followers</p>
          <p className="user-stats__info">
            {userData ? userData.followers : 0}
          </p>
        </div>
        <div className="user-stats__following">
          <p className="user-stats__label">Following</p>
          <p className="user-stats__info">
            {userData ? userData.following : 0}
          </p>
        </div>
      </div>
      <div className={`user-links ${isDarkMode ? "dark-mode" : ""}`}>
        <div>
          <div className="user-links__location user-link__container">
            <img
              className="location-icon"
              src={locationIcon}
              alt="location pin"
            />
            <p className={`user-link__name ${isDarkMode ? "dark-mode" : ""}`}>
              {userData?.location || "Not Available"}
            </p>
          </div>
          <div className="user-links__website user-link__container">
            <img className="link-icon" src={linkIcon} alt="website" />
            <p className={`user-link__name ${isDarkMode ? "dark-mode" : ""}`}>
              {userData?.blog ? (
                <a
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.blog}
                </a>
              ) : (
                "Not Available"
              )}
            </p>
          </div>
        </div>
        <div>
          <div className="user-links__social user-link__container">
            <img className="social-icon" src={socialIcon} alt="twitter" />
            <p className="user-link__name">
              {userData?.twitter_username || "Not Available"}
            </p>
          </div>
          <div className="user-links__company user-link__container">
            <img src={companyIcon} alt="office building" />
            <p className={`user-link__name ${isDarkMode ? "dark-mode" : ""}`}>
              {userData?.company || "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
