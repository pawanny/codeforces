import dynamic from 'next/dynamic';

import React from 'react'
const MyComponent = dynamic(() => import('@/callbutton/CallButton'), {
  loading: () => <p>Loading...</p>,
});
export default function page() {
  return (
    <>
    <CallButtons/>
    </>
  )
}
