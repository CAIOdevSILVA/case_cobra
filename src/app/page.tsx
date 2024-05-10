import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt24 xl:pt-32 lg:pb-52'>
          <h1 className='text-5xl text-red-500'>Ola</h1>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
