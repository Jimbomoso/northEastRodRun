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
              <div className="w-full">
                <h4 className="text-3xl text-gray-800 font-bold mb-5 p-5">
                  Founded
                </h4>
                <p className="text-gray-600 mb-8">
                  NERR started in 2008 as a group of friends wanting to do a
                  Power Tour-type cruise but not wanting to travel so far for
                  Power Tour. That first year had 14 vehicles in attendance.
                  It’s grown a little, but hasn’t evolved much since the
                  beginning, and we think that’s a good thing. The only very
                  noteworthy addition (starting in 2016) was making the cruise a
                  (voluntary) cruise for charity (see FAQ for details). It’s a
                  very chill cruise with great people and great stops along the
                  way. Many participants make friendships that continue through
                  the year And the cruise!….each day is always amazing; an
                  awesome route along handpicked backroads through some of the
                  best scenery the Northeast has to offer.
                </p>
              </div>
              <div className="w-full">
                <Image
                  layout="responsive"
                  src="/rodrun2.jpeg"
                  width={720}
                  height={540}
                  loading="eager"
                  quality={50}
                />
              </div>
              <div>
              <h4 className="text-3xl text-gray-800 font-bold p-5 mb-5">Events</h4>
              <p className="text-gray-600 mb-8">
                Every year NERR does 1 or two cruises, although usually just
                one. The duration is usually between 3 and 5 days. Each night is
                at a different hotel and each cruise (between hotels) is
                somewhere between 175 and 225 miles. There is at least one gas
                stop and sometimes special interest stops along the way
                (museums, hot rod shops, breweries, etc). Hotel information is
                posted in the Events section and each days route and itineraries
                are also posted there as the Run approaches.
              </p>
              </div>
              <div className="w-full">
                <Image
                  layout="responsive"
                  src="/rodrun3.JPG"
                  width={756}
                  height={1008}
                  loading="eager"
                  quality={50}
                />
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
