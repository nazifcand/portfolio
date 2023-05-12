import classNames from 'classnames';
import { PAGES } from '../constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PostLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header id="post-header">
        <div className="container">
          <div id="post-header__nav">
            {PAGES.map((item, index) => (
              <Link
                key={index}
                href={item.to}
                className={classNames({
                  'post-header__nav__item': true,
                  active: item.to == '/posts',
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {children}
    </>
  );
};

export default PostLayout;
