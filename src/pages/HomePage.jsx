import React from 'react';
import Layout from '../components/Layout';
import {
  HeroSection,
  SolutionsSection,
} from './sections/index.js';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection />
      <SolutionsSection />
    </Layout>
    </>
  )
}

export default HomePage