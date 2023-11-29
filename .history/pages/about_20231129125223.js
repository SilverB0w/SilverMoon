import Head from "next/head";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";

export default function about() {
  return (
    <>
      <Head>
        <title>关于 - {siteMetadata.title}</title>
      </Head>

      <div className="layout about flex flex-col gap-6">
        <section>
          <h2 className="text-[22px] font-semibold">个人简介</h2>

          <p className="mt-2 sm:mt-3 mb-3">
          我的名字叫隽敏，Jimmy，取名致敬<a href="https://zh.wikipedia.org/wiki/今敏" target="_blank">动画大师—今敏</a>。
          </p>

          <p className="mt-2 sm:mt-3 mb-3">
          普通碳基生物，供能燃料为睡眠，运动与自由。
          </p>

          <p className="mt-2 sm:mt-3 mb-3">
    
住在蓝星北部的阿宅特供区一带，不婚不育。我在宅友连锁店服务。每天都要加班到晚上8点才能回家。我不抽烟，巧克力味维他奶仅止于浅尝。晚上11点睡，每天要睡足7.5个小时。睡前，我一定准备好一杯次日早晨喝的水，然后做20分钟的冥想，上了床，马上熟睡。一觉到天亮，决不把疲劳和压力，留到第二天。医生都说我很正常。
          </p>
          
        </section>

        <section>
          <h2 className="text-[22px] font-semibold">关于本站</h2>

          <p className="mt-2 sm:mt-3 mb-3">
          博客使用该<Link href="https://github.com/Pudge1996/NEXT.LRD.IM" target="_blank" rel="noopener noreferrer" title="Theme">主题</Link>，通过 <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">Next.js</Link> 和 <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">Tailwind CSS</Link> 搭建<span className="whitespace-nowrap">而成。</span>
          </p>

          <p className="mt-2 sm:mt-3 mb-3">
          博文遵循 <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" rel="noopener noreferrer" title="Theme">CC BY-NC-SA 4.0 许可协议</Link> ，转载请注明文章链接。
          </p>

          <p className="mt-2 sm:mt-3 mb-3">
          这里是自说自话的小天地里记录生活。仅有我和你/妳的交流，倾听思维的脉搏。没有<span className="whitespace-nowrap">违禁词，</span>删帖警告，口口文学的困扰，来去自如。欢迎你来到这里。
          </p>

        </section>


        <section>
          <h2 className="text-[22px] font-semibold">联系方式</h2>

          <p className="mt-2 sm:mt-3 mb-1">
          💬 : <a href="https://t.me/Jmo3on" target="_blank">Telegram</a>
          </p>

          <p className="mt-2 sm:mt-3 mb-1">
          💌 : Jimmy@mo3on.com
          </p>
        
        </section>

      </div>
    </>
  );
}
