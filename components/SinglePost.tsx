import moment from 'moment';
import 'moment/locale/tr';
import Link from 'next/link';
moment.locale('tr');

const SinglePost = ({ post }) => {
  const formatDate = (date, format = 'DD.MM.YYYY HH:mm') => {
    return date ? moment(date).format(format) : '-';
  };

  return (
    <div className="post">
      <div className="post__thumbnail">
        <Link href={`/posts/${post.slug}`}>
          <img src={post.thumbnail} alt={post.title} />
        </Link>
      </div>

      <div className="post__detail">
        <h5 className="post__detail__title">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h5>
        <p className="post__detail__summary">{post.summary}</p>
        <time className="post__detail__time">{formatDate(post.updatedAt)}</time>
      </div>
    </div>
  );
};

export default SinglePost;
