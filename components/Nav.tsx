import classNames from 'classnames';
import { PAGES } from '../constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = ({}) => {
  const router = useRouter();

  return (
    <div id="nav">
      <div className="container">
        <nav className="nav">
          {PAGES.map((item, index) => (
            <Link
              key={index}
              href={item.to}
              className={classNames({
                nav__item: true,
                active: router.pathname == item.to,
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
