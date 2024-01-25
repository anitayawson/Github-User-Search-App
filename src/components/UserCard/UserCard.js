import "./UserCard.scss";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as LinkIcon } from "../../assets/icon-website.svg";
import { ReactComponent as SocialIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { useTheme } from "../ThemeProvider";

export default function UserCard({ userData }) {
  const { theme } = useTheme();
  return (
    <section className={`user-card ${theme}`}>
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
            <h1 className={`user__name ${theme}`}>
              {userData?.name ? userData.name : userData?.login}
            </h1>
            <h3 className="user__handle">@{userData?.login}</h3>
          </div>
          <h3 className={`user__date-joined ${theme}`}>
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
        className={`user__description ${theme} ${
          userData?.bio ? "" : "no-bio-opacity"
        }`}
      >
        {userData?.bio || "This profile has no bio"}
      </p>
      <div className={`user-stats ${theme}`}>
        <div className="user-stats__repos">
          <p className={`user-stats__label ${theme}`}>Repos</p>
          <p className={`user-stats__info ${theme}`}>
            {userData ? userData.public_repos : 0}
          </p>
        </div>
        <div className="user-stats__followers">
          <p className={`user-stats__label ${theme}`}>Followers</p>
          <p className={`user-stats__info ${theme}`}>
            {userData ? userData.followers : 0}
          </p>
        </div>
        <div className="user-stats__following">
          <p className={`user-stats__label ${theme}`}>Following</p>
          <p className={`user-stats__info ${theme}`}>
            {userData ? userData.following : 0}
          </p>
        </div>
      </div>
      <div className="user-links">
        <div>
          <div
            className={`user-links__location user-link__container ${
              !userData?.location ? "not-available" : ""
            }`}
          >
            <LocationIcon
              className={`location-icon ${theme} ${
                userData?.company ? "" : "not-available"
              }`}
            />
            <p className={`user-link__name ${theme}`}>
              {userData?.location || "Not Available"}
            </p>
          </div>
          <div
            className={`user-links__website user-link__container ${
              !userData?.blog ? "not-available" : ""
            }`}
          >
            <LinkIcon
              className={`link-icon ${theme} ${
                userData?.company ? "" : "not-available"
              }`}
            />
            {userData?.blog ? (
              <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                <p className={`user-link__name ${theme}`}>{userData.blog}</p>
              </a>
            ) : (
              <p
                className={`user-link__name ${theme} ${
                  userData?.blog ? "" : "not-available"
                }`}
              >
                Not Available
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="user-links__social user-link__container">
            <SocialIcon
              className={`social-icon ${theme} ${
                userData?.company ? "" : "not-available"
              }`}
            />
            <p
              className={`user-link__name ${theme} ${
                userData?.twitter_username ? "" : "not-available"
              }`}
            >
              {userData?.twitter_username ? (
                <a
                  href={`https://twitter.com/${userData.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.twitter_username}
                </a>
              ) : (
                "Not Available"
              )}
            </p>
          </div>
          <div className="user-links__company user-link__container">
            <CompanyIcon
              className={`company-icon ${theme} ${
                userData?.company ? "" : "not-available"
              }`}
            />
            <p
              className={`user-link__name ${theme} ${
                userData?.company ? "" : "not-available"
              }`}
            >
              {userData?.company || "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
