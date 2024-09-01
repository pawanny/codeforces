import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('@/callbutton/CallButton'), {
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  return (
    <>


      <MyComponent/>
    </>
  );
}
