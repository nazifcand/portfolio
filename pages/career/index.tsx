import Layout from '@/layouts/default';
import Head from 'next/head';
import { TITLE, CAREERS } from '../../constants';
import CareerDetail from '@/components/CareerDetail';

const Career = () => {
  return (
    <Layout>
      <Head>
        <title>{`Kariyer - ${TITLE}`}</title>
      </Head>

      <div id="timeline">
        <div className="container">
          {CAREERS.map((item, index) => (
            <CareerDetail key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: { deneme: 'deneme' } };
};

export default Career;
