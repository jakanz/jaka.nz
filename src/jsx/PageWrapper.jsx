import Header from "./wrapper/Header";
import Footer from "./wrapper/Footer";

export default function PageWrapper({children}) {
  return (
    <div className="page-wrapper" style={{display: "flex", flexDirection: "column"}}>
      <Header />
      <main style={{flex: 1, padding: 0}}>{children}</main>
      <Footer />
    </div>
  );
}