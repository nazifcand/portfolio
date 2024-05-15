import Layout from '@/layouts/default';
import Head from 'next/head';
import { TITLE } from '../../constants';
import { useState } from 'react';
import SingleVideo from '@/components/SingleVideo';
import { fetchVideos } from '@/services/videos.service';

const Videos = ({ videos }) => {
  const [loading, setLoading] = useState(false);
  const videoItems = videos.items;

  return (
    <Layout>
      <Head>
        <title>{`Youtube Vidolarım - ${TITLE}`}</title>
      </Head>

      <div id="videos">
        <div className="container">
          {!videoItems.length ? (
            <p className="no-content-text">
              Henüz video yüklemeye vakit bulamadım 😬
            </p>
          ) : (
            videoItems.map((video, index) => (
              <SingleVideo key={index} video={video} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const [err, result] = await fetchVideos();

  return {
    props: {
      videos: result || {
        items: [],
      },
    },
  };
};

export default Videos;
