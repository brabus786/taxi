import React from 'react';
import Layout from '../components/layout/layout';
import HomeTemplateTaxi from '../templates/home_template_taxi/home_template_taxi';

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeTemplateTaxi />
      </Layout>
    </div>
  )
}
