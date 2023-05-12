import moment from 'moment';
import 'moment/locale/tr';
moment.locale('tr');

const SingleVideo = ({ video }) => {
  const { snippet } = video;

  const formatDate = (date, format = 'DD.MM.YYYY HH:mm') => {
    return date ? moment(date).format(format) : '-';
  };

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
      target="_blank"
      className="video"
      rel="noreferrer"
    >
      <div className="video__image">
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <div className="video__image__overlay">
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <h6 className="video__title">{snippet.title}</h6>
      <p className="video__description">{snippet.description}</p>
      <time className="video__published-time">
        {formatDate(snippet.publishTime)}
      </time>
    </a>
  );
};

export default SingleVideo;
