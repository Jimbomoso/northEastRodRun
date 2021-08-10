import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function Faq() {
  return (
    <>
      <Layout>
        <Head>
          <title> NERR - Northeast Rod Run </title>
        </Head>
        <Container>
          <section className="container mx-auto px-6 p-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              FAQ
            </h2>
            <h3 className="text-xl text-left py-5">
              {" "}
              We always get lots of questions from people wanting to join NERR
              events, about how to join and what we are all about, so we've
              listed some of the more frequestly asked questions
            </h3>
            <div className="flex items-center flex-wrap mb-10">
              <div className="w-full md:w-full">
                <h3 className="py-5 font-bold">
                  {" "}
                  IS THERE A REGISTRATION FEE?{" "}
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  No. We don't have any formal registration fee, but starting in
                  2016 we began asking participants to make a voluntary
                  contribution to help with the research and fight to help find
                  a cure for lymphoma (raising over $80,000.00 to date), as 100%
                  of the money we raise through donations, NERR swag sales &
                  raffles go directly to the Lymphoma Research Foundation (LRF).
                  We share links throughout the year to allow people to donate
                  directly to LRF, if the prefer, so they can get a tax
                  deduction.
                </p>
                <h3 className="py-5 font-bold">
                  {" "}
                  WHO CAN JOIN & GENERALLY HOW BIG ARE THE GROUPS?{" "}
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  We do not have a specific year cutoff for the cars that join
                  us on NERR. The only limitation is that we ask to keep it to
                  only American muscle cars, hot rods, rat rods, special
                  interest, etc. We have had as few as 14 vehicles (our first
                  year in 2008),up to numbers in the forties (over 50 vehicles &
                  over 100 people joined us in 2016). Most trips have between 40
                  to 50 vehicles. Cars from as far back as the 30's, right up to
                  brand new retro-styled muscle cars have joined NERR though the
                  years.
                </p>
                <h3 className="py-5 font-bold">
                  {" "}
                  WHAT RIDES ARE NOT ACCEPTED?{" "}
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  While we are a fundraising event, at our core we are still a
                  hot rod cruise and don't want to lose our identity, so at the
                  chance of upsetting some potential future participants, the
                  following must be mentioned. This event is NOT for imports.
                  Not that we think there is anything wrong with them, but this
                  is not that type of event. This event is NOT for your average
                  daily driver. If you don't know what that menad, then this
                  event is probably not for you. If youstill aren't sure what
                  we're talking about, go check out our Facebook page (Northeast
                  Rod Run Annual Cruise)and that should nail it down for you.
                  Just because you buy a new truck, or "regular" car and throw
                  shiny wheel, or tint your windows & tail lights, that doens't
                  make it any different. If your ride is front wheel drive,
                  unless is's something real special, chances are that we're not
                  the event for you. There are always exceptions, where people
                  have to take their "Plan B", because something went wrong with
                  their original ride at the last minute & they couldn't canel
                  their lodging (we usually get a 3 day window to cancel rooms).
                  This is NOT Hot Rod Power Tour, so if you're Plan A is still a
                  year away from being ready, realistically, you never had a
                  Plan A, so this event isn't for you. If any of this upsets
                  you, then you are probably looking at the wrong type of event
                  here. We like our growth year after year, but we don't want to
                  grow just for the sake of growing & then lose all the great
                  qualities that got us to be what we currently are.
                </p>
                <h3 className="py-5 font-bold">
                  WHAT IS THE AVERGE AGE OF ATTENDEES?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  We seem to attract a very diverse group, but usually have less
                  people in their twenties, than people in their sixties, with
                  most people being in their late thirties to forties. A lot of
                  the people that travel long distance to get to our cruises,
                  are usually on the older side of things, maybe being because
                  they are retired and have more time to enjoy things like this.
                  In 2015 our youngest driver was 27 and our oldest was 74.
                </p>
                <h3 className="py-5 font-bold">
                  ARE CHILDREN ALLOWED ON THE RUN?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  Absolutely! Although when we first started out in 2008, we
                  made the decision to hold off on allowing children (it ended
                  up being the right choice too), because we weren't 100% sure
                  how things would go. Now we have no problem with people
                  bringing their children along, because we always get a
                  respectable crowd & that is very important to us.
                  Approximately 75 percent of the participants are couples and a
                  stange little fact is that their have been more daughters
                  brought on these trips than sons.
                </p>
                <h3 className="py-5 font-bold">
                  WHAT TIME TO YOU START EACH MORNING?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  The group is usually on the road by 9AM, but depending on the
                  day's route we could possibly be on the road as early as 8AM,
                  if we have a long day ahead of us. Most of the time will be
                  posted online a couple of weeks before kickoff, but sometimes
                  it is decided at the end of the previous day. If it is decided
                  that NERR will be hitting the road at a certain time, that
                  doesn't mean we will be metting up in a parking lot at that
                  time. It means we will be pulling out at that time (A.I.S.
                  time). We can't sit there and wait "just 5 more minutes" for
                  one person, because that one person turns into many people and
                  then it's an hour later and we're still in the parking lot.
                  That's not fair to everyone who was ready on time.{" "}
                </p>
                <h3 className="py-5 font-bold">
                  HOW FAR DO YOU TRAVEL EACH DAY?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  A typical day is usually betwen 175 and 225 miles, depending
                  on if we have a pre-planned stop or an attraction that day.
                  Sometimes it can also be less because there might be something
                  planned at our day's final destination. The reason our daily
                  mileage is lower than a lot of other organized runs, is
                  because usually over 80% of our routes travel on slower and
                  more scenic roads. We try to relax and enjoy the ride, instead
                  of just blasting down the interstate to make it to the next
                  night's hotel.
                </p>
                <h3 className="py-5 font-bold">
                  HOW OFTEN DO YOU STOP FOR FUEL?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  Because we have many cars that aren't your normal highway
                  cruisers, most gas stops are usually within 100 of each other.
                  This also gives people plenty of chances to stretch their legs
                  and refuel their bodies, along with refueling their car's
                  tanks
                </p>
                <h3 className="py-5 font-bold">
                  WHAT DO YOU DO FOR FOOD ALONG THE WAY?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  Along the road some people just pick up quick eats when we are
                  stopped for gas. Regular sit-down restaurants don't work out
                  well because of our size. Most places won't even accept us
                  because of our size. some attendees have tried stopping on
                  their own, in smaller groups and it turned into a 2 hour event
                  for them (sometimes even longer) and they end up missing out
                  on some planned stops and driving with the group. Any newbies
                  that have done that, always complain after, saying they wish
                  they waited to eat. Most people just pack road snacks to eat
                  while driving and wait until after hotel check-in, before
                  going out to dinner somewhere.
                </p>
                <h3 className="py-5 font-bold">
                  HOW OFTEN AND HOW LONG ARE THE USUAL STOPS?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  Most days we try to have one "point of interest" stop, but
                  sometimes depending on the day's drive, we might even get two
                  of them. Once we get to our destinations we will evaluate the
                  palce and decide on how long before we hit the road again. We
                  try to keep our stops around 1 1/2 hours. A departure time
                  will always be announced before we begin to check out the
                  attractions. As an example, if it is decided that we are
                  leaving at 11:30AM, that means that the lead car will be
                  pulling out at 11:30 (A.I.S. time) and it you're not behind
                  the wheel at that time, you WILL be left behind. This is the
                  only way to keep a larger group together.
                </p>
                <h3 className="py-5 font-bold">
                  HOW DO YOU KEEP THE GROUP TOGETHER?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  As the group gets bigger it does get harder, but everyone
                  keeps an eye in their rearview mirrow to make sure things are
                  going ok. We try to avoid high traffic areas, so it's easier
                  than one would think to keep everyone together. If we do go
                  through a busy section of traffic (or lots of traffic lights),
                  once we get through the area the lead group will sometimes
                  pull over (if it is safe to do so) and wait for the rest of
                  the group to catch up. This is another reason why we stop so
                  often for gas & bathrooom breaks. It helps NERR regroup.
                  Soemtimes if we are in a rural area, the second car in line
                  might pull out and block traffic so that the whole group can
                  get through together.
                </p>
                <h3 className="py-5 font-bold">
                  HOW DO I BOOK MY HOTEL ROOMS?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  Once the lodging details are posted, usually soon after the
                  current event is over, we begin booking our rooms for the
                  following year. Each participant is responsible for booking
                  their own rooms. We will usually have up to a month before
                  kick-off (but sometimes as little as 60 days) to book a
                  reduced rate, that has been negotiated between NERR and the
                  different host properties. You don't have to book during that
                  time period, or even book at the same hotels as NERR, but
                  because NERR runs during peak season in the northeast, if
                  people wait until later in the year, they will pay much more.
                  Many times people who wait, also have a hard time booking
                  rooms because most hotels end up having 2 night minimums
                  (which NERR is able to work around) at that time of year.
                  EVERY YEAR we have people that don't take this advice and end
                  up either booking somewhere else, for way more money, or even
                  end up not being able to go because there are no rooms
                  available in some of the areas we travel. We have heard many
                  people over the years, say they regret not booking when
                  originally informed and never want to let it happen again.
                </p>
                <h3 className="py-5 font-bold">
                  WHAT DOES EVERYONE DO WHEN THE DAY'S DRIVE IS OVER?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  It's very common for everyone to get together in the host
                  hotel parking lots at the end of the day, to enjoy a few
                  frosty cold beverages and talk about the day's activities. We
                  also try to book our lodging in areas that are close to
                  restaurants, so people can get a good neal in them before
                  after hours festivities begin. As often as we can, we try to
                  book hotels that walking distance to everything in the area,
                  that way no one needs to get behind the wheel again once we
                  check in.
                </p>
                <h3 className="py-5 font-bold">WHAT ABOUT BREAKDOWNS?</h3>
                <p className="p-2 text-gray-600 mb-8">
                  If someone breaks down, people are always willing to pull over
                  and help. It is recommended that everyone pack tools in their
                  car, so that we can try and fix anyone on the side of the
                  road. Even if you "know your car is flawless", don't be afraid
                  to pack something extra in case it might be needed by someone
                  else. Also, it's a good idea to bring something that others
                  normally wouldn't think of. We have NEVER left anyone behind
                  on any of our cruises. We have ALWAYS gotten them to at least
                  the host hotel so work can continue on their car.
                </p>
                <h3 className="py-5 font-bold">
                  CAN I PARTICIPATE ON ONLY A PORTION OF NERR?
                </h3>
                <p className="p-2 text-gray-600 mb-8">
                  Absolutely! It's not always possible for people to get away
                  for extended periods needed to make the entire event.We have
                  had people join us for just one day/night and also as little
                  as just one leg of driving. We get that from a lot of
                  first-timers, then we almost always hear them say "I wish I
                  booked the entire trip. I didn't think it was going to be this
                  much fun". as they leave with regrets.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
