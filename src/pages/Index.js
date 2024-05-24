import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
    </React.Fragment>
  );
}

