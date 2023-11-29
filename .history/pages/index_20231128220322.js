import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getAllPosts } from "/utils/mdx";
import siteMetadata from "/data/siteMetadata";
import blogCategoriesData from "/data/blog/blogCategoriesData";
import Date from "/components/common/Date";
import generateRssFeed from '/utils/generateRSSFeed';


export default function blog({ posts }) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
      </Head>
      <div className="layout flex flex-col">
        {/* 置顶博文 */}
        <div className="flex flex-col">
          <Link
            href="/blog/loading"
            className="flex flex-col group ring-default"
            alt="1"
          >
            <div className={`relative mb-5 rounded-lg select-none h-[144px] sm:h-[300px] overflow-hidden img-loading-bg ${
            isLoaded ? "" : "img-loading-spin"
          }`}>
              <Image
                src="https://img.mo3on.com/2023/Galaxy.png"
                alt=""
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                priority
                width={678}
                height={300}
                className='absolute top-[50%] translate-y-[-50%]'
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </div>
            <p className="text-[15px] font-semibold italic my-0 leading-snug">
            我的名字叫隽敏，23岁。住在蓝星北部的阿宅特供区一带，不婚不育。我在宅友连锁店服务。每天都要加班到晚上8点才能回家。我不抽烟，巧克力味维他奶仅止于浅尝。晚上11点睡，每天要睡足7.5个小时。睡前，我一定准备好一杯次日早晨喝的水，然后做20分钟的冥想，上了床，马上熟睡。一觉到天亮，决不把疲劳和压力，留到第二天。医生都说我很正常。
            </p>

          </Link>
        </div>
                  {/* 博客列表 */}
        <div className="flex gap-4 items-center my-4 sm:mt-4"></div>
        <div className="flex flex-wrap gap-8 sm:max-md:gap-6 mt-0 sm:mt-2">
          {posts.map((post, index) => (
            <div className="sm:w-[calc(50%-1rem)]" key={index}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col ring-default"
                alt={post.frontmatter.title}
              >
                {/* 添加文章封面图片 */}
                {post.frontmatter.coverImage && (
                  <div className={`relative aspect-video mb-3 rounded-lg select-none overflow-hidden img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
                    <img
                      src={post.frontmatter.coverImage}
                      alt={`封面图片 - ${post.frontmatter.title}`}
                      onLoad={() => setIsLoaded(true)}
                      onError={() => setIsLoaded(true)}
                      className="rounded-lg object-cover w-full h-full"
                      width={608}
                      height={342}
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold leading-tight mb-1 sm:group-hover:text-blue-600 group-active:text-blue-800 sm:group-active:text-blue-800 dark:sm:group-hover:text-blue-400 dark:group-active:text-blue-500 sm:dark:group-active:text-blue-500">
                  {post.frontmatter.title}
                </h3>
                <div className="leading-snug text-secondary">
                  {post.frontmatter.description}
                </div>
              </Link>
              <time className="mt-1 text-tertiary">
                <Date dateString={post.frontmatter.date} />
              </time>
            </div>
          ))}
        </div>
 
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts().posts;
  await generateRssFeed();

  return {
    props: { posts },
  };
};
