import logo from "../assets/img/coin.png";
const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-center gap-3">
        <img width={50} height={50} className="img-fluid" src={logo} alt="Logo" />
        <h1>Coinmania</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <h4>Anasayfa</h4>
        <h4>Giriş Yap</h4>
      </div>
    </div>
  );
};

export default Header;
