import React from 'react';
import Layout from '../components/Layout';
import {
  HeroSection,
  ConstatSection,
  MedicalSection,
  PromesseSection,
  SolutionsSection,
} from './sections/index.js';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection />
      <SolutionsSection />
      {/* 
      <ConstatSection />
      <MedicalSection />
      <PromesseSection />
      */}
    </Layout>
    </>
  )
}

export default HomePage