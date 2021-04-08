import React from 'react';
import { Button } from '@material-ui/core';
import Layout from 'src/components/Layout';

export default function Home() {
  return (
    <Layout title="Youtube">
      <Button variant="outlined" color="secondary">
        Hello
      </Button>
      Clone Youtube com NextJs
    </Layout>
  );
}
