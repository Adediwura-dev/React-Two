import "./ProductsLogo.css";
import Logo1 from "../../../../assets/GoogleProducts/imgi_5_gemini-update.png";
import Logo2 from "../../../../assets/GoogleProducts/imgi_6_logo-maps-2025-color-2x-web-96dp.webp";
import Logo3 from "../../../../assets/GoogleProducts/imgi_7_logo-sheets-2026-color-2x-web-64dp (1).webp";
import Logo4 from "../../../../assets/GoogleProducts/imgi_8_youtube.png";
import Logo5 from "../../../../assets/GoogleProducts/imgi_2_chrome.png";
import Logo6 from "../../../../assets/GoogleProducts/imgi_10_logo-gmail-2026-color-2x-web-64dp.webp";
import Logo7 from "../../../../assets/GoogleProducts/imgi_11_logo-photos-2025-color-2x-web-64dp.webp";
import Logo8 from "../../../../assets/GoogleProducts/imgi_35_gboard.png";
import Logo9 from "../../../../assets/GoogleProducts/imgi_47_googlefit.png";
import Logo10 from "../../../../assets/GoogleProducts/imgi_38_authenticator.png";
import Logo11 from "../../../../assets/GoogleProducts/imgi_12_android.png";
import Logo12 from "../../../../assets/GoogleProducts/imgi_4_logo-docs-2026-color-2x-web-64dp.webp";

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
];

const scrollingLogos = [...logos, ...logos];

const ProductsLogo = () => {
  return (
    <div className="products-logo">
      <div className="logos">
        {scrollingLogos.map((logo, index) => (
          <img key={index} src={logo} alt="Google product" />
        ))}
      </div>
    </div>
  );
};

export default ProductsLogo;
