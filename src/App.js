
import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NTFs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & ern crypto. Join 25+ million peope using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth costant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is build using Expo which runs nativly on all users'devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the secon one show the details of specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with ❤️ by {" "} <span className="bold">Daniel Giordani </span></p>
      </div>
    </>
  );
}

export default App;
