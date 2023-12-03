import Hero from "@/components/hero";
import Catalog from "@/components/catalog";
import HomeContent from "@/components/home_content";
import BlogPost from "@/components/blogPost";
import BrandFilter from "@/components/brandFilter";

export default function Home() {
    return (
        <main>
            <Hero/>
            <BrandFilter/>
            <Catalog/>
            <HomeContent/>
            <BlogPost/>
        </main>
    )
}
