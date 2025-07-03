import React from 'react';
import Layout from '../components/Layout';
import {
  HeroSection,
  ConstatSection,
  MedicalSection,
  PromesseSection,
  SolutionsSection,
  SolutionsCartolangSection,
} from './sections/index.js';

const HomePage = () => {
  return (
    <>
    <Layout>
      <HeroSection />
      <SolutionsSection />
      <SolutionsCartolangSection />
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