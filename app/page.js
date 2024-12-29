import Client from "@/components/(home)/Client";
import Hero from "@/components/(home)/Hero";
import Product from "@/components/(home)/Products";
import VideoSilder from "@/components/(home)/VideoSilder";
import Vission from "@/components/(home)/Vission";

export default function Home() {
  return (
    <>
      <div className="mt-24">
        <VideoSilder />
        <Hero />
        <Vission />
        <Product />
        <Client />
      </div>
    </>
  );
}
