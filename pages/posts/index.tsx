import Layout from '@/layouts/default';
import Head from 'next/head';
import { TITLE } from '../../constants';
import SinglePost from '@/components/SinglePost';

const POSTS = [
  // {
  //   thumbnail: 'https://via.placeholder.com/320x180.png?text=16:9',
  //   title: 'Deno Nedir? NodeJS’in Sonunu Getirir mi?',
  //   slug: 'deno-nedir-nodejsin-sonunu-getirir-mi',
  //   updatedAt: '2023-03-05T17:38:22.076Z',
  //   summary:
  //     'NodeJS günümüzde JavaScript ekosisteminin en önemli parçasını oluşturuyor. Neredeyse her proje için NodeJS’i kullanıyoruz. REST servisler yazıyoruz, websocket ile haberleşme yapıyoruz ya da en basitinden bir uygulamanın bağımlılıkları için npm (Node Package Manager) kullanıyoruz.',
  //   categories: [],
  // },
];

const Posts = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <div id="posts">
        <div className="container">
          {!posts.length ? (
            <p className="no-content-text">Henüz içerik girmedim. 😬</p>
          ) : (
            posts.map((post, index) => <SinglePost key={index} post={post} />)
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: { posts: POSTS } };
};

export default Posts;
