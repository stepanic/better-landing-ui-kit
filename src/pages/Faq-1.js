import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Faq1SectionFaq1 from '../components/faq/Faq1SectionFaq1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Faq1() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Faq1SectionFaq1 />
    </React.Fragment>
  );
}

