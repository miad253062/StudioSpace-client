import FeaturedSection from './components/FeatureSection';
import HeroSlider from './components/HeroSlider';
import CategoryGrid from './components/CategoryGrid';
import InfoSections from './components/InfoSections';

function Home () {
  return (
    <main>
      <HeroSlider />
      <FeaturedSection />
      <CategoryGrid />
      <InfoSections />
    </main>
  )
}

export default Home;