import '../App.css'

import { HeroSection } from '../component/home/heroSection';
import { HomeShopCategories } from '../component/home/hero-FeaturedCategories';
import { HomeProductCategories } from '../component/home/hero-FeaturedProducts';
import { WhyChooseUs } from '../component/home/why-choose-us';
import Footer from '../component/home/footer';
import HomeNewsletter from '../component/home/home-newsletter';

export default function Home(){
    return <>
        <HeroSection />
        <HomeShopCategories />
        <HomeProductCategories />
        <WhyChooseUs />
        <HomeNewsletter />
        <Footer />
    </>
}