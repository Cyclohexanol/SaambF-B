import Head from 'next/head';
import { AppProps } from 'next/app';
import * as React from 'react';
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'server/client';
import AdminLayout from 'layouts/Admin';
import MainLayout from 'layouts';
import { useRouter } from 'next/router';

import '@paljs/admin/style.css';
import 'tailwindcss/tailwind.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const router = useRouter();
  const admin = router.pathname.startsWith('/admin');
  return (
    <>
      <Head>
        <title>Saamb Food & Drinks</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <ApolloProvider client={apolloClient}>
        {admin ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )}
      </ApolloProvider>
    </>
  );
};

export default MyApp;
