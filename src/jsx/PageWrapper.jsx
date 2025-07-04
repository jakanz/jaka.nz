import Header from "./wrapper/Header";
import Footer from "./wrapper/Footer";

export default function PageWrapper({children}) {
  return (
    <div className="bg-test">
      <Header />
      <main className="bg-main p-0">{children}</main>
      <Footer />
    </div>
  );
}
