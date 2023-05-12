import PostLayout from '@/layouts/postLayout';
import Head from 'next/head';
import { TITLE } from '../../constants';
import { useEffect } from 'react';

declare const window: any;

const Post = ({ post }) => {
  useEffect(() => {
    window.hljs?.configure({ ignoreUnescapedHTML: true });
    window.hljs?.highlightAll();
  }, []);

  return (
    <PostLayout>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <div id="post">
        <div className="container">
          <div id="post__thumbnail">
            <img src={post.thumbnail} alt={post.title} />
          </div>

          <div id="post__detail">
            <h1 id="post__detail__title">{post.title}</h1>

            <div id="post__detail__summary">
              <p className="paragraph">{post.summary}</p>
            </div>

            <div
              id="post__detail__content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      </div>
    </PostLayout>
  );
};

export const getServerSideProps = async ({ query }) => {
  // not found post
  if (false) {
    return { notFound: true };
  }

  return {
    props: {
      post: {
        thumbnail: 'https://via.placeholder.com/1600x900.png?text=16:9',
        title: 'Daha Hızlı Rest API için 6 İpucu',
        slug: 'daha-hizli-rest-api-icin-6-ipucu',
        updatedAt: '2023-03-05T17:38:22.076Z',
        summary:
          'Servisler uygulamalarımızın vazgeçilmez bir parçasıdır bu sebeple servislerde meydana gelen yavaşlık, tüm uygulamaları dolayısıylada kullanıcı deneyimini olumsuz etkileyebilir.',
        content:
          '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p> <table><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table> <dl> <dt>Definition list</dt> <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd> <dt>Lorem ipsum dolor sit amet</dt> <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd> </dl> <nav> <ul> <li><a href="#">Home</a></li> <li><a href="#">About</a></li> <li><a href="#">Clients</a></li> <li><a href="#">Contact Us</a></li> </ul> </nav> <h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul> <pre><code> #header h1 a { display: block; width: 300px; height: 80px; } </code></pre>',
        categories: [],
      },
    },
  };
};

export default Post;
