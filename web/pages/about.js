import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title> NERR - Northeast Rod Run </title>
        </Head>
        <Container>
          <section className="container mx-auto px-6 p-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              About
            </h2>
            <div className="flex items-center flex-wrap mb-10">
              <div className="w-full md:w-1/2">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  Founded
                </h4>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Ornare quam viverra orci sagittis eu volutpat odio.
                  Urna nunc id cursus metus aliquam. Aliquam purus sit amet
                  luctus venenatis. Amet nisl purus in mollis nunc. Sociis
                  natoque penatibus et magnis dis parturient montes nascetur
                  ridiculus. Eget est lorem ipsum dolor sit. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu dictum. Quam nulla
                  porttitor massa id neque. Facilisi etiam dignissim diam quis
                  enim. Aliquam faucibus purus in massa tempor. Sed libero enim
                  sed faucibus. Neque laoreet suspendisse interdum consectetur.
                  Sagittis orci a scelerisque purus semper eget duis at tellus.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/rodrun2.jpeg"
                  width={720}
                  height={540}
                  loading="lazy"
                  quality={100}
                />
              </div>
            </div>

            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2">
                <Image
                  src="/rodrun5.JPG"
                  width={3024}
                  height={3024}
                  loading="lazy"
                  quality={100}
                  // sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
                />
              </div>
              <div className="w-full md:w-1/2 pl-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  Events
                </h4>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Ornare quam viverra orci sagittis eu volutpat odio.
                  Urna nunc id cursus metus aliquam. Aliquam purus sit amet
                  luctus venenatis. Amet nisl purus in mollis nunc. Sociis
                  natoque penatibus et magnis dis parturient montes nascetur
                  ridiculus. Eget est lorem ipsum dolor sit. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu dictum. Quam nulla
                  porttitor massa id neque. Facilisi etiam dignissim diam quis
                  enim. Aliquam faucibus purus in massa tempor. Sed libero enim
                  sed faucibus. Neque laoreet suspendisse interdum consectetur.
                  Sagittis orci a scelerisque purus semper eget duis at tellus.
                </p>
              </div>
            </div>

            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  Charity
                </h4>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Ornare quam viverra orci sagittis eu volutpat odio.
                  Urna nunc id cursus metus aliquam. Aliquam purus sit amet
                  luctus venenatis. Amet nisl purus in mollis nunc. Sociis
                  natoque penatibus et magnis dis parturient montes nascetur
                  ridiculus. Eget est lorem ipsum dolor sit. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu dictum. Quam nulla
                  porttitor massa id neque. Facilisi etiam dignissim diam quis
                  enim. Aliquam faucibus purus in massa tempor. Sed libero enim
                  sed faucibus. Neque laoreet suspendisse interdum consectetur.
                  Sagittis orci a scelerisque purus semper eget duis at tellus.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/rodrun1.jpg"
                  width={1024}
                  height={682}
                  loading="lazy"
                  quality={100}
                  // sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
                />
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
