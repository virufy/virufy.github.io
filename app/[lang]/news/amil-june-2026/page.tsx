const AmilJune2026 = () => {
  return (
    <div className="relative flex justify-center bg-gradient-to-b from-black to-[#4064AD] pt-24 text-white">
      <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 sm:px-12 lg:px-40">
        <div>
          <h2>
            <strong>Fukui, Japan</strong> June 2026
          </h2>

          <h3 className="font-bold">
            From Silicon Valley to the Classroom: My First Lecture at the
            University of Fukui
          </h3>

          <a
            className="underline"
            href="https://www.linkedin.com/posts/amilkhanzada_managementengineering-mot-sem-ugcPost-7464600595262439424-ZVf8/?rcm=ACoAAAM95zEBXZG6rdEnyhTkvO1g9PoWWc6zY_c"
          >
            Link to article (LinkedIn)
          </a>
        </div>

        <div>
          <p>
            Today, I taught my first lecture in my new role as Specially
            Appointed Assistant Professor at the University of Fukui, in a
            graduate course on MOT (Management of Technology).
          </p>
        </div>

        <div>
          <p>
            The topic: Engineering Human Systems: Applied SEM for Startups. With
            support of my co-author Muskaan Irfan, we had students run live
            structural equation modeling in Python/Colab on our research data
            (N=112), analyzing volunteer motivation in a zero-budget
            organization.
          </p>
        </div>

        <div>
          <p>
            For any data-driven CEO or manager, the core insight is this: the
            variables that drive your team can be measured, modeled, and
            optimized with the same rigor you apply to your product.
          </p>
        </div>

        <div>
          <h1 className="font-bold">Three Takeaways from the Data</h1>
          <ul className="list-disc pl-6">
            <li>
              {
                'Latent variables let you measure things like "felt support" with mathematical precision.'
              }
            </li>
            <li>
              A job title costs $0 and moves the needle strongly (λ = .797).
            </li>
            <li>The statistical model is the map. The leader still drives.</li>
          </ul>
        </div>

        <div>
          <p>
            As founder of Virufy, a medical AI nonprofit operating across the
            US, UAE, and Japan, my mission is to teach the next generation of
            engineers that human systems can be designed with the same rigor as
            software.
          </p>
        </div>

        <div>
          <p>
            Thanks to Professor Takuji Takemoto for his trust, and to the
            students for their energy today.
          </p>
        </div>

        <div>
          <h1 className="font-bold">Opportunities</h1>
          <ul className="list-disc pl-6">
            <li>
              Join our lab (Master&apos;s or PhD, Apr 2027 intake):
              English-based, ~$10K total for 2 years, working at the
              intersection of AI, social innovation, and behavioral science.
              virufy.org/amil-jp-degree
            </li>
            <li>
              Join Virufy: our global medical AI nonprofit working on
              respiratory disease detection. virufy.org/join
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AmilJune2026;
