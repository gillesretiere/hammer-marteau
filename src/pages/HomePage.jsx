import React from 'react';
import Layout from '../components/Layout';
import {
  HeroSection,
  ConstatSection,
  SolutionsSection,
} from './sections/index.js';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection />
      <ConstatSection />
      <SolutionsSection />
    </Layout>
    </>
  )
}

export default HomePage