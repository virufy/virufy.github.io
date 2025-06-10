const HalfmyDAF2025Letter = () => {
  return (
    <div className="space-y-6 bg-[#3468b2] pt-10 text-white">
      <div className="mx-auto items-center justify-center text-center font-medium">
        <h1 className="text-4xl font-bold text-green-500 sm:text-5xl">
          <strong>Virufy: Participation in #HalfMyDAF 2025 Initiative</strong>
        </h1>
      </div>

      <div className="flex items-stretch justify-evenly bg-[#255292] p-2 font-bold">
        <a href="https://www.halfmydaf.com/">Website </a>
        <a href="https://www.halfmydaf.com/frequently-asked-questions">
          FAQ Page
        </a>
        <a href="https://www.halfmydaf.com/for-donors">
          Instructions for Donors
        </a>
        <a href="https://www.halfmydaf.com/instructions">
          Instructions for Nonprofits
        </a>
      </div>

      <div className="grid gap-5 p-10">
        <h2 className="p-2 text-2xl font-bold">Overview</h2>
        <section className="block rounded-xl bg-[#255292] p-5">
          <h3 className="py-2 font-bold">What is #HalfMyDAF?</h3>
          <p className="mx-10 py-2">
            #HalfMyDAF is an initiative aimed at encouraging donors who have
            existing Donor Advised Funds (DAF) to distribute their charitable
            funds proactively. In the U.S., over $251 billion remain unused in
            DAF accounts... The <span>#HalfMyDAF</span> initiative aims to
            address this issue by offering $2.25 million in matching funds...
          </p>
        </section>

        <section className="block rounded-xl bg-[#255292] p-5">
          <h3 className="py-2 font-bold">
            What is a Donor Advised Fund (DAF)?
          </h3>
          <p className="mx-10">
            A Donor Advised Fund (DAF) is a charitable giving account...
            <em>
              donors retain the right to recommend grants to their preferred
              nonprofits.
            </em>
          </p>
        </section>
        <section className="block rounded-xl bg-[#255292] p-5">
          <h3 className="py-2 font-bold">Eligibility</h3>
          <ul className="mx-10 py-2">
            <li>
              Nonprofits: Must be U.S.-based 501(c)(3) organizations (
              <strong>Virufy</strong> meets this criterion).
            </li>
            <li>
              Donors: Must hold an active DAF account and commit to spending at
              least half of their DAF account balance (as of January 1, 2025) by
              September 26, 2025.
            </li>
            <li>
              Grants must be submitted by{' '}
              <strong className="text-[#ff9900] underline">
                June 27, 2025
              </strong>{' '}
              to be eligible for the first drawing; submissions by{' '}
              <strong className="text-[#ff9900] underline">
                September 26, 2025
              </strong>{' '}
              will be considered for the second drawing.
            </li>
          </ul>
        </section>
        <section className="block rounded-xl bg-[#255292] p-5">
          <h3 className="py-2 font-bold">Why We Should Participate</h3>
          <ul className="mx-10">
            <li>#HalfMyDAF is offering $2.25 million in matching funds</li>
            <li>
              $1 million is general matching; the rest supports nonprofits in
              gender equity, reproductive justice, and underserved education
            </li>
            <li className="underline">
              Donations matched up to $5,000; four nonprofits may receive up to
              $25,000
            </li>
            <li>
              Every donation from a different donor increases chances of
              matching
            </li>
          </ul>
        </section>

        <section className="block rounded-xl bg-[#255292] p-5">
          <h3 className="py-2 font-bold">
            What Our Donors Should Do to Participate
          </h3>
          <p className="py-2 font-bold">Virufy donors must:</p>
          <ol className="mx-10 my-2">
            <li>
              <strong>Identify themselves as DAF holders:</strong> Must have an
              active DAF with a recognized sponsor
            </li>
            <li>
              <strong>Initiate the Donation:</strong>
            </li>
            <ul className="mx-10">
              <li>
                Make a grant recommendation to <strong>Virufy</strong> (minimum
                $250)
              </li>
            </ul>
            <li>
              Complete the{' '}
              <a
                className="font-bold underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqTZQLzcXSfIesehFV1UXUPwHEgg_fc7oIUt7kb-27EEc7Xw/viewform"
              >
                Commitment Form
              </a>
              :
            </li>
            <ul className="mx-10">
              <li>
                Pledge to spend at least half their DAF balance by{' '}
                <strong className="text-[#ff9900] underline">
                  September 26, 2025
                </strong>
              </li>
              <li>
                Confirm their DAF grant to <strong>Virufy</strong>
              </li>
            </ul>
          </ol>
          <p>
            More information for donors at{' '}
            <a
              className="font-bold underline"
              href="https://www.halfmydaf.com/for-donors"
            >
              this link
            </a>
          </p>
        </section>
        <section className="block rounded-xl bg-[#255292] p-5">
          <h3 className="py-2 font-bold">
            What Virufy Should Do to Participate
          </h3>
          <p>Virufy’s role in #HalfMyDAF 2025 is proactive outreach:</p>
          <ol className="mx-10 my-2">
            <li>
              <strong>Identify and Reach Potential DAF Donors:</strong>
            </li>
            <ul className="mx-10">
              <li>Use networks to find donors</li>
              <li>Direct them to the commitment form</li>
            </ul>
            <li>
              <strong>Facilitate Efficient Fund Transfers:</strong>
            </li>
            <ul className="mx-10">
              <li>
                Register for ACH through Amalgamated Foundation’s GranteeView
                Portal
              </li>
            </ul>
          </ol>
        </section>
        <section className="block rounded-xl bg-[#255292] px-5 py-5">
          <p>
            More information for <strong>Virufy</strong> at{' '}
            <a
              className="font-bold underline"
              href="https://www.halfmydaf.com/instructions"
            >
              this link
            </a>
          </p>

          <div>
            <p>
              <strong>Contact for General Questions: </strong>
              <a href="mailto:grants@amalgamatedfoundation.org">
                grants@amalgamatedfoundation.org
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HalfmyDAF2025Letter;
