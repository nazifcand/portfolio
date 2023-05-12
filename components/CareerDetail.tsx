import { TECH_IMAGES } from '../constants';

const CareerDetail = ({
  title,
  company,
  type,
  start,
  end,
  location,
  summary,
  techs,
}) => {
  return (
    <div className="job">
      <h5 className="job__title">{title}</h5>
      <div className="job__company">
        {company} - {type} |{' '}
        <span>
          {start} - {end}
        </span>
      </div>

      <p
        className="job__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></p>
      <div className="job__location">{location}</div>

      {techs.length > 0 && (
        <div className="job__techs">
          <div className="job__techs__title">Kullandığım Teknolojiler</div>
          {techs.map((item, index) => (
            <img
              key={index}
              className="job__techs__item"
              src={TECH_IMAGES[item].image}
              alt={TECH_IMAGES[item].title}
              title={TECH_IMAGES[item].title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerDetail;
