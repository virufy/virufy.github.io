//Note:since this page doesnt have an image at the top, reminder that you need the relative -top-24 , -mb-24 , and p-24 to make it look better since the navbar
// is transparent
const PressReleaseDubai = () => {
  return (
    <>
      <div className="relative -top-24 -mb-24 flex justify-center overflow-hidden bg-gradient-to-b from-black to-[#4064AD] pt-24 text-white">
        <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 sm:px-12 lg:px-40">
          <div>
            <h2>
              <b>
                Virufy to Showcase Innovative COVID-19 Screening Technology at
                Prototypes for Humanity 2024 in Dubai
              </b>
            </h2>
          </div>
          <div>
            <p>
              <em>
                <b>Dubai, UAE, November 18, 2024</b>
              </em>{' '}
              – Virufy, a pioneering initiative in digital health, is honored to
              announce its participation in Prototypes for Humanity 2024, an
              elite international conference bringing together 100’s of the
              world’s most promising innovators. The event, held from November
              18 to 21 in Dubai, UAE, will feature groundbreaking projects
              tackling some of the world’s most urgent challenges. Virufy’s
              AI-driven approach to rapid COVID-19 screening has earned a
              coveted place at this influential gathering.
            </p>
          </div>
          <div>
            <p>
              Virufy’s team includes co-researchers from Stanford University,
              Harvard University, the University of South Dakota, and the
              University of Fukui in Japan. These collaborators are committed to
              harnessing technology empowering global change through innovation.
              Their project’s potential impact on global public health
              exemplifies the values and goals championed by Prototypes for
              Humanity.
            </p>
          </div>
          <div>
            <p>
              <em>Prototypes for Humanity</em> connects cutting-edge researchers
              with global media, potential investors, and high-impact
              organizations. International journalists will attend to gain
              first-hand insights and conduct interviews with participating
              innovators. This engagement aims to raise public awareness of
              these innovations, fostering connections that can drive real-world
              change.
            </p>
          </div>
          <div>
            {/* <h4 className="font-bold">About Virufy:</h4> */}
            <p>
              Virufy’s groundbreaking solution addresses a critical need:
              instant and accessible AI smartphone-based screening for
              respiratory diseases. In an era where misinformation can
              complicate public health efforts, Virufy’s technology is
              positioned to provide reliable, scalable health insights. “Our
              participation in Prototypes for Humanity allows us to connect with
              a global community, helping to accelerate the journey of our
              research from prototype to practical application,” said Marketing
              and Communications Director Gabriela Sonsino, at Virufy. “We are
              grateful for this platform to spotlight the role of scientific
              innovation in creating a healthier, more resilient world.”
            </p>
          </div>
          <div>
            <p>
              The Prototypes for Humanity conference is structured to celebrate
              solutions to global problems, support collaborative action, and
              drive positive social and environmental impact. As a part of this
              event, Virufy is engaging with forward-thinking leaders in
              technology, healthcare, and social innovation to amplify the reach
              of its mission.
            </p>
          </div>

          <div>
            <div>
              For more information about Virufy and to explore its work in
              digital health innovation, please visit
              <a className="text-red-500" href="https://virufy.org/">
                {' '}
                https://virufy.org/
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressReleaseDubai;
