import Link from "next/link";
import DarkModeButton from "/components/common/DarkModeButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center sm:justify-between items-center gap-2 max-w-2xl px-3 py-12 sm:pt-6 mx-auto select-none text-tertiary text-sm sm:border-t border-neutral-200 dark:border-neutral-900 transition-[border-color]">
      <div>&copy; 隽敏 2023-{currentYear}</div>
      <div className="hidden sm:flex justify-between items-center gap-2">
     
        <Link
          href="https://silver-moon.cc/feed.xml"
          title="订阅地址"
          target="_blank"
          className="flex justify-between items-center gap-1 ring-default"
        >
          RSS 
        </Link>
        <span> · </span>
        <div className="flex justify-between items-center gap-1">
            <DarkModeButton />  
        </div>  
      </div>
    </div>
  );
}