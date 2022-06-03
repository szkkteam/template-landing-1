import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

export interface MetaProps {
  title: string;
  description: string;
}

const Meta = ({ title, description }: MetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          locale: AppConfig.locale,
          site_name: AppConfig.title,
        }}
      />
    </>
  );
};

export default Meta;
