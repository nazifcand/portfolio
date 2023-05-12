import SocialMedias from '@/components/SocialMedias';

const Header = () => {
  return (
    <header id="header">
      <div id="header__inner">
        <div className="container">
          <div id="user">
            <div id="user__avatar">
              <img src="/me.jpg" alt="Nazif Can DURGUT" />
            </div>

            <div id="user__detail">
              <h1 id="user__detail__name">Nazif Can DURGUT</h1>
              <p id="user__detail__summary">
                Merhaba, ben Nazif 👋 Ben fullstack geliştiriciyim.
                <br />
                JavaScript yazmayı çok seviyorum. Yaptığım şeylerin deneyimine,
                mimarisine, yeniden kullanılabilirliğine ve kod kalitesine büyük
                özen gösteriyorum.
              </p>
              <span id="user__detail__location">
                <i className="far fa-map-marker-alt"></i>
                <span>Bursa / Turkey</span>
              </span>

              <div id="user__detail__socials">
                <SocialMedias />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
