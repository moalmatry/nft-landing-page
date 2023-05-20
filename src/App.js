import { DownLoad, SectionWrapper, Features } from './Components';
import Footer from './Components/Footer';
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty and NFTs Start Selling and Growing."
        description="Buy ,store ,collect NFTs, exchange & earn crypto. join 25+ million people using ProNef Market Place"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef. Smooth constant colors of a fluent ui design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs on all Native devices. You can easily get your app into peoples hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store "
        description="the app contains 2 screens. The first screen list of NFT.s"
        mockupImg={assets.mockup}
        banner="banner03"
      />
      <DownLoad />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <Footer />
      </div>
    </>
  );
};

export default App;
