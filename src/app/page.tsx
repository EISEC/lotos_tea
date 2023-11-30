import Hero from "@/components/hero";
import Catalog from "@/components/catalog";
import Brands from "@/components/brands";
import HomeContent from "@/components/home_content";
import BlogPost from "@/components/blogPost";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Brands/>
            <Catalog/>
            <HomeContent/>
            <BlogPost/>
        </main>
    )
}
