import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-paffing w-full">
        <Skeleton className="w-full h-[274px] rounded-lg bg-black-300" />
      </section>

      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="w-56 h-10 bg-black-300" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="w-full h-[440px] sm:w-[356px] bg-black-300" />
          <Skeleton className="w-full h-[440px] sm:w-[356px] bg-black-300" />
          <Skeleton className="w-full h-[440px] sm:w-[356px] bg-black-300" />
        </div>
      </section>
    </main>
  )
}
