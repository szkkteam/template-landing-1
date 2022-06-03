import React from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';

const HeroSection = () => {
  return (
    <Hero>
      <Header />
    </Hero>
  );
};

const Index = () => {
  // const router = useRouter();

  return (
    <>
      <Main
        meta={<Meta title="Home" description="This is the home page" />}
        header={<HeroSection />}
      >
        <div>Hello world!</div>
      </Main>
    </>
  );
};

export default Index;
