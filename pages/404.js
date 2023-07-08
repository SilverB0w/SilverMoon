import Head from "next/head";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found - {siteMetadata.title}</title>
      </Head>

      <div className="layout text-center h-[600px] flex flex-col items-center justify-center">
        <div>
          <div className="text-6xl sm:text-8xl mb-2 sm:mb-4 select-none inline-block motion-safe:hover:animate-[bounce_0.2s_ease-in-out_infinite] will-change-auto">💫</div>
          <h1 className="px-6">啊噢<span className="tracking-[-0.35em]">，</span>你来到了<span className="whitespace-nowrap">404禁区<span className="absolute tracking-[-0.35em]">！</span></span></h1>
        </div>
        <p className="mb-0 mt-4 leading-normal text-secondary break-keep">
          请从这里返回
           <Link href="/blog" className="whitespace-nowrap">月球</Link>。
        </p>
      </div>
    </>
  );
}
