import { TECH_IMAGES } from '../constants';

const SingleProject = ({ title, thumbnail, techs, summary, url, postUrl }) => {
  return (
    <div className="project">
      <div className="project__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="project__detail">
        <h3 className="project__detail__title">{title}</h3>

        <div className="project__detail__techs">
          <div className="project__detail__techs__title">
            Kullandığım Teknolojiler
          </div>
          {techs.map((item, index) => (
            <img
              key={index}
              className="job__techs__item"
              src={TECH_IMAGES[item].image}
              alt={TECH_IMAGES[item].title}
            />
          ))}
        </div>

        <div className="project__detail__summary">{summary}</div>

        <div className="project__detail__actions">
          {url && (
            <a
              className="project__detail__actions__btn"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-external-link-alt"></i>
              <span>Canlıda Gör</span>
            </a>
          )}

          {postUrl && (
            <a
              className="project__detail__actions__btn"
              href={postUrl}
              target="_blank"
              rel="referrer noreferrer"
            >
              <i className="far fa-external-link-alt"></i>
              <span>Detayları Gör</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
