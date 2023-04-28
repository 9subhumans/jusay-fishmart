import React, { useEffect } from 'react';
import { redirect } from 'next';
import Router from 'next/router';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

function Verify({ redirect }) {
  useEffect(() => {
    Router.push(redirect);
  }, [redirect]);

  return <React.Fragment />
}

export async function getServerSideProps(context) {
  const { res, req } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  
  if (!cookies || !cookies.token) {
    return {
      props: {
        redirect: '/products'
      },
    };
  }

  const data = jwt.verify(cookies?.token, process.env.APPSECRET);

  if (data) {
    return {
      props: {
        redirect: data.isAdmin ? '/admin' : '/user'
      },
    };
  }

  return {
    props: {
      redirect: '/products'
    },
  };
}

export default Verify;