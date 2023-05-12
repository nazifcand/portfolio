import Layout from '@/layouts/default';
import Head from 'next/head';
import { TITLE } from '../../constants';
import SingleProject from '@/components/SingleProject';

const PROJECTS = [
  {
    title: 'HesapKanka',
    thumbnail: 'https://hesapkanka.com/images/logo.png',
    summary: `Backend'i hazır olan bu projenin yönetim panelini geliştirdim. State Management için Redux/Redux-toolkit kullandım. Arayüzü logo renklerine göre kendim tasarladım.`,
    url: 'https://hesapkanka.com/',
    techs: [
      'react',
      'html5',
      'css3',
      'sass',
      'git',
      'github',
      'postman',
      'vscode',
      'terminal',
    ],
  },
];

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <div id="projects">
        <div className="container">
          {!projects.length ? (
            <p className="no-content-text">
              Sanırım bir kaç projede yer almam gerekli 😯
            </p>
          ) : (
            projects.map((project, index) => (
              <SingleProject key={index} {...project} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: { projects: PROJECTS } };
};

export default Projects;
