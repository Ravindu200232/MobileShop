import Banner from "../../components/banner";
import Banner2 from "../../components/banner2";
import Header from "../../components/header";

export default function Home() {
    return (
      <>
       
        <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-xl z-50">
         <Header/>
        </header>
  
       
        <main className="mt-[100px] overflow-y-auto">
          <Banner />
          <Banner2 />
        </main>
      </>
    );
  }