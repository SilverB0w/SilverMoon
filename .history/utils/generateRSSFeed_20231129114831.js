import RSS from "rss";
import siteMetadata from "/data/siteMetadata";
import fs from "fs";
import { getAllPosts } from "./mdx";


export default async function generateRssFeed() {
  const site_url = "https://mo3on.com/";

  const posts = getAllPosts().posts;
  const allPosts = await posts;

  const feedOptions = {
    title: "新月集",
    description: "有关在蓝星的一切",
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${siteMetadata.authorImg}`,
    pubDate: new Date(),
    copyright: `© 隽敏 2023- ${new Date().getFullYear()}`,
    managingEditor: `${siteMetadata.author}`,
    webMaster: `${siteMetadata.author}`,
    ttl: '60',
  };

  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    let date = new Date(post.frontmatter.date.slice(0, 4), post.frontmatter.date.slice(4, 6) - 1, post.frontmatter.date.slice(6, 8));
    const imageUrl = `https://img.mo3on.com${post.frontmatter.coverImage}`;
    console.log('Cover image URL:', imageUrl);
    const imageType = imageUrl.endsWith('.png') ? 'image/png' : (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg')) ? 'image/jpeg' : '';
  
    const content = `
      <img src="${imageUrl}" alt="${post.frontmatter.title}" />
      ${post.content}
    `;
  
    
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `https://mo3on.com/blog/${post.slug}`,
      date: date,
      author: `${siteMetadata.author}`,
      enclosure: { url: imageUrl, type: imageType },
      custom_elements: [
        { 'content:encoded': content },
      ],
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
  
}
