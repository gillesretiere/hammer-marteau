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
      {/* 
      <ConstatSection />
      <MedicalSection />
      <PromesseSection />
      <SolutionsSection />
      */}
    </Layout>
    </>
  )
}

export default HomePage