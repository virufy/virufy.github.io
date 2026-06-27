'use client';

import React, { useState } from 'react';

export default function DataEfficientCoughAI() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="relative flex justify-center bg-gradient-to-b from-black to-[#4064AD] pt-24 text-white">
        <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 leading-normal sm:px-12 lg:px-40">
          <section>
            <h2>Foreword</h2>

            <p>
              Every year, millions of people die from respiratory diseases that
              could have been caught earlier. Not because the science
              doesn&apos;t exist, but because the tools to act on it don&apos;t
              reach them in time.
            </p>

            <p>
              This is one of global health&apos;s most solvable problems. And
              yet it remains unsolved.
            </p>

            <p>
              We believe that a smartphone, a device already in the hands of
              billions of people worldwide, can become one of the most powerful
              diagnostic tools in history. Not someday. Now. By listening to a
              cough, our AI can detect the acoustic signatures of respiratory
              disease in seconds, without a lab, without specialized equipment,
              and without the delays that cost lives.
            </p>

            <p>
              This white paper presents the scientific foundation, technical
              architecture, and ethical framework behind that vision. It
              reflects the work of a global team of researchers, clinicians,
              engineers, and public health professionals united by a single
              conviction: that access to early disease detection is not a
              privilege, it is a right.
            </p>

            <p>
              We are at an inflection point in global health. The tools to close
              the diagnostic gap exist. The question is whether we will deploy
              them with the urgency the moment demands.
            </p>

            <p>Virufy is committed to that urgency.</p>

            <p>
              <strong>Amil Khanzada</strong>
              <br />
              Chief Executive Officer, Virufy
            </p>
          </section>

          <section>
            <h1>Virufy White Paper</h1>
            <h2>
              AI-Powered Acoustic Diagnostics for Global Respiratory Health
            </h2>

            <p>
              <strong>Virufy Research Team, 2026</strong>
            </p>
          </section>

          <section>
            <h2>Executive Summary</h2>

            <p>
              Respiratory diseases cause more than 4 million deaths each year
              worldwide. The COVID-19 pandemic more specifically exposed
              critical weaknesses in global diagnostic systems. Virufy is a
              nonprofit organization working to combat these issues. Virufy is
              developing AI-powered acoustic diagnostics that analyze cough
              recordings captured via smartphone. The platform delivers rapid,
              non-invasive, hardware-independent respiratory prescreening within
              seconds, enabling scalable and equitable access to diagnostics
              globally. Virufy’s technology is protected under U.S. Patent No.
              12,444,502 and has been developed in collaboration with the U.S.
              Department of Health and Human Services (BARDA) and Stanford
              University.
            </p>
          </section>

          <section>
            <h2>The Global Respiratory Diagnostic Gap</h2>

            <p>
              Respiratory diseases cause more than 4 million annual deaths
              worldwide, underscoring the urgent need for accessible diagnostic
              systems (
              <a
                href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370%2823%2900113-X/fulltext"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                GBD 2019 Chronic Respiratory Diseases Collaborators, 2023
              </a>
              ) The COVID-19 pandemic revealed significant structural weaknesses
              in global testing capacity, including limited laboratory
              infrastructure, fragile supply chains, and workforce shortages (
              <a
                href="https://cen.acs.org/analytical-chemistry/diagnostics/Developing-countries-face-diagnostic-challenges/98/i27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Chemical &amp; Engineering News, 2020
              </a>
              ,{' '}
              <a
                href="https://journals.asm.org/doi/10.1128/jcm.03189-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Cornish et al., 2023
              </a>
              ). Traditional respiratory diagnostics rely heavily on centralized
              laboratories, trained personnel, specialized reagents, and
              consistent supply chains. In many low-income countries, laboratory
              density remains critically low. This over the pandemic contributed
              to prolonged diagnostic delays and reduced outbreak responsiveness
              (
              <a
                href="https://link.springer.com/article/10.1186/s12992-022-00796-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Duma et al., 2022
              </a>
              ). Evidence from outbreak evaluations demonstrates that delays in
              diagnostic deployment directly increase transmission, morbidity,
              and mortality (
              <a
                href="https://gh.bmj.com/content/8/7/e012506"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Escadafal et al., 2023
              </a>
              ,{' '}
              <a
                href="https://link.springer.com/article/10.1186/s41256-023-00330-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Zhou et al., 2023
              </a>
              ). Access disparities were also present in high-income countries,
              where vulnerable populations, including immigrants and elderly
              communities, experienced reduced access to healthcare and testing
              services during the pandemic (
              <a
                href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1422343/full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Spencer et al., 2024
              </a>
              ). Together, these findings highlight the need for scalable,
              infrastructure-independent diagnostic prescreening solutions
              capable of real-time deployment across diverse healthcare settings
              (
              <a
                href="https://journals.publishing.umich.edu/mjm/article/id/1682/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Prasad et al., 2023
              </a>
              ).
            </p>
          </section>
          <section className="pt-2">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          </section>

          {isExpanded && (
            <>
              <section>
                <h2>Virufy’s AI-Powered Acoustic Screening Platform</h2>

                <p>
                  Virufy streamlines traditional laboratory-dependent screening
                  with AI-driven acoustic analysis by identifying respiratory
                  biomarkers embedded in cough sounds.
                </p>
                <img
                  src="/images/publications/Virufy-Screening.png"
                  alt="Virufy AI Platform"
                  className="mx-auto my-4 rounded-lg shadow-md"
                />
                <p>
                  Virufy’s AI-powered acoustic screening process provides rapid,
                  non-invasive, population-scale respiratory screening that is
                  globally accessible. Users begin by recording a brief cough
                  through a smartphone (Android, iOS, or web). The system then
                  extracts clinically relevant acoustic features while filtering
                  background noise. Deep learning models analyze these features
                  to detect patterns associated with respiratory conditions.
                  Within seconds, users receive a prescreening result, enabling
                  faster triage, referral, and integration with healthcare or
                  telemedicine systems.
                </p>
              </section>

              <section>
                <h2>
                  Comparison of Traditional Diagnostic Testing and Virufy AI
                  Screening
                </h2>

                <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="min-w-full border-collapse divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Feature
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Traditional Diagnostics
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Virufy AI Screening
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr className="">
                        <td className="px-6 py-4 font-medium">
                          Turnaround Time
                        </td>
                        <td className="px-6 py-4">Days to weeks</td>
                        <td className="px-6 py-4 font-semibold">Seconds</td>
                      </tr>

                      <tr className="">
                        <td className="px-6 py-4 font-medium">Cost per Test</td>
                        <td className="px-6 py-4">$50-200+</td>
                        <td className="px-6 py-4 font-semibold">
                          Minimal at scale
                        </td>
                      </tr>

                      <tr className="">
                        <td className="px-6 py-4 font-medium">
                          Infrastructure
                        </td>
                        <td className="px-6 py-4">Labs + personnel</td>
                        <td className="px-6 py-4 font-semibold">
                          Smartphone only
                        </td>
                      </tr>

                      <tr className="">
                        <td className="px-6 py-4 font-medium">Accessibility</td>
                        <td className="px-6 py-4">Location dependent</td>
                        <td className="px-6 py-4 font-semibold">Global</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  This table summarizes key differences between conventional
                  diagnostic methods and Virufy’s AI-powered screening solution,
                  highlighting improvements in turnaround time, cost efficiency,
                  infrastructure requirements, and accessibility.
                </p>
              </section>

              <section>
                <h2>Scientific Foundation</h2>

                <p>
                  Virufy’s AI-powered diagnostic platform is grounded in a
                  robust scientific and intellectual property framework. Its
                  innovations are protected under U.S. Patent No. 12,444,502,
                  which covers acoustic respiratory pattern recognition,
                  mobile-based inference architecture, and a modular, extensible
                  framework for multi-disease detection. This patent secures
                  Virufy’s technology as a unique, scalable solution for
                  respiratory health monitoring.
                </p>

                <h3>Clinical Evidence</h3>

                <p>
                  In initial clinical studies, Virufy’s COVID-19 prescreening
                  model achieved 85% sensitivity and specificity. Data were
                  collected from more than 20 countries, encompassing a wide
                  range of demographics, languages, and age groups, ensuring
                  both inclusivity and fairness. Independent studies underscore
                  the critical importance of rigorous validation in outbreak
                  contexts.
                </p>

                <h3>Multi-Disease Capability (Future Vision)</h3>

                <p>
                  Virufy’s AI framework is designed to be extensible to
                  additional respiratory conditions in the future. Potential
                  areas of expansion include influenza, respiratory syncytial
                  virus (RSV), tuberculosis, asthma and emerging respiratory
                  pathogens. By leveraging ongoing research and continuously
                  expanding diverse global datasets, Virufy aims to evolve into
                  a comprehensive, multi-disease platform capable of delivering
                  scalable, rapid, and equitable respiratory health screening
                  worldwide.
                </p>
              </section>
              <section>
                <h2>Technology Architecture</h2>

                <p>
                  Virufy’s platform is built on a layered, scalable technology
                  architecture that enables accurate, rapid, and secure
                  respiratory screening from a simple smartphone recording. The
                  system is designed for both individual use and large-scale
                  public health deployment, ensuring robustness, privacy, and
                  adaptability.
                </p>

                <h3>Acoustic Capture Layer</h3>

                <p>
                  The platform begins with a multi-format audio intake, allowing
                  users to submit cough recordings through smartphones (Android,
                  iOS) or web browsers. Advanced noise filtering algorithms
                  isolate the cough signal from environmental sounds, ensuring
                  high-quality input for analysis. All audio data is transmitted
                  using end-to-end encryption, preserving user privacy and
                  meeting international data security standards.
                </p>

                <h3>Feature Extraction Layer</h3>

                <p>
                  Captured cough audio is first segmented into discrete events
                  and then transformed into time–frequency representations using
                  short-time Fourier analysis, with optional alternative
                  representations as appropriate. Clinically relevant acoustic
                  features are derived from these representations, including
                  spectral shape and dynamics (e.g., MFCCs) and temporal
                  structure across cough phases. Together, these features
                  provide a compact, information-rich representation of
                  respiratory sound biomarkers suitable for downstream modeling.
                </p>

                <h3>AI Inference Layer</h3>

                <p>
                  Clinically relevant acoustic features are analyzed using
                  convolutional neural networks (CNNs) and ensemble modeling
                  approaches optimized for respiratory sound classification. The
                  inference layer maps complex cough acoustics to actionable
                  prescreening outputs in near real time. Continuous validation
                  and model refinement ensure robustness across evolving
                  datasets while maintaining high diagnostic performance.
                </p>

                <h3>Integration &amp; Scalability</h3>

                <p>
                  Virufy is designed for seamless integration with healthcare
                  ecosystems. Cloud-based deployment ensures scalability and
                  global accessibility, while API interfaces allow integration
                  with telemedicine platforms and electronic health records. The
                  architecture also supports public health surveillance
                  applications, enabling real-time aggregation of prescreening
                  data for epidemiological monitoring and outbreak response.
                </p>
                <img
                  src="/images/publications/Virufy-Technology.png"
                  alt="Virufy Technology Architecture"
                  className="mx-auto my-4 rounded-lg shadow-md"
                />

                <p>
                  <strong>Virufy Technology Architecture:</strong> A scalable,
                  AI-powered acoustic platform enabling secure, rapid, and
                  non-invasive respiratory screening through layered processing,
                  from acoustic capture and feature extraction to AI inference,
                  cloud integration, and public health deployment.
                </p>
              </section>
              <section>
                <h2>Ethics, Privacy &amp; Responsible AI</h2>

                <p>
                  Virufy is committed to deploying AI responsibly, ethically,
                  and securely, ensuring technology improves health outcomes
                  while protecting privacy, fairness, and trust in all countries
                  where data is collected. Our platform follows
                  privacy-by-design principles, including minimal data
                  collection, de-identification, anonymization, and encrypted
                  storage and transmission (AES-256, TLS 1.2+). All operations
                  comply with relevant local regulations, for example, HIPAA
                  (U.S.), APPI (Japan), UAE Data Protection Law, and India’s
                  Personal Data Protection Act (PDPA), supported by robust data
                  governance, access controls, and audit logging. Virufy
                  actively mitigates bias through demographic fairness audits,
                  diverse international training datasets, and continuous
                  post-deployment monitoring. All research protocols undergo
                  Institutional Review Board (IRB) approval, with informed
                  consent and secure data-sharing practices. Our AI models are
                  explainable and auditable, ensuring clinicians and public
                  health professionals can trust outputs. Deployment emphasizes
                  transparency, accountability, and measurable impact, with
                  policies and audits continuously updated to ensure ongoing
                  ethical and regulatory compliance worldwide.
                </p>
              </section>

              <section>
                <h2>Future Directions</h2>

                <p>
                  Virufy’s ultimate goal is to create a world in which
                  individuals can proactively monitor and manage their health in
                  real time using accessible, non-invasive technology. By
                  enabling early detection of respiratory conditions and
                  supporting timely clinical and public health interventions,
                  Virufy aims to optimize the allocation of medical resources,
                  strengthen outbreak preparedness and response, and reduce the
                  risk of large-scale health and economic disruptions. While
                  building on core functionality, the upcoming phases of
                  development are designed to include the following focus areas:
                </p>

                <h3>a. Publication of validated performance data</h3>

                <p>
                  Virufy will prioritize the transparent publication of
                  validated performance metrics, including sensitivity,
                  specificity, and overall accuracy, using diverse and
                  representative datasets. Public dissemination of these
                  findings will support scientific scrutiny, enable benchmarking
                  against existing diagnostic tools, and build confidence among
                  healthcare providers, regulators, and public health
                  authorities.
                </p>

                <h3>b. Regulatory approval and clinical integration</h3>

                <p>
                  Securing regulatory approvals in relevant jurisdictions is a
                  critical step toward formal clinical adoption. Virufy will
                  engage with regulatory bodies to ensure compliance with
                  medical device and digital health standards, facilitating safe
                  integration into clinical workflows and public health
                  surveillance systems.
                </p>

                <h3>
                  c. Geographic expansion through institutional partnerships
                </h3>

                <p>
                  Virufy&apos;s nonprofit structure supports trusted engagement
                  with ministries of health, research universities, global NGOs,
                  community health organizations, and elderly care providers.
                  Current collaboration with Stanford University and the
                  University of Washington provides a model for the
                  institutional engagement needed to scale globally, enabling
                  scalable deployment, population-level screening initiatives,
                  and applicability across diverse demographic, socioeconomic,
                  and epidemiological contexts, particularly in settings where
                  commercial diagnostic solutions have limited reach.
                </p>

                <h3>
                  d. Continuous integration of user and stakeholder feedback
                </h3>

                <p>
                  Virufy will systematically incorporate feedback from users,
                  clinicians, and public health stakeholders into ongoing
                  development. This iterative approach will improve usability,
                  accessibility, and equity, ensuring that the technology
                  remains responsive to real-world needs and effective across
                  diverse populations.
                </p>
              </section>
              <section>
                <h2>Call to Action</h2>

                <p>
                  Virufy invites key stakeholders to engage and collaborate in
                  advancing global respiratory health:
                </p>

                <ul>
                  <li>
                    <strong>Governments &amp; Ministries of Health:</strong>{' '}
                    Integrate Virufy’s AI platform into national outbreak
                    preparedness and public health strategies.
                  </li>
                  <li>
                    <strong>Researchers &amp; Academic Institutions:</strong>{' '}
                    Partner on multi-disease validation studies and scientific
                    publications.
                  </li>
                  <li>
                    <strong>Funders &amp; Philanthropists:</strong> Support the
                    development and deployment of AI-driven respiratory health
                    solutions globally.
                  </li>
                  <li>
                    <strong>Volunteers &amp; Innovators:</strong> Contribute
                    expertise to Virufy’s international network and help advance
                    AI healthcare innovation.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold">References</h2>

                <ol className="list-decimal space-y-4 pl-6">
                  <li className="leading-relaxed">
                    Chemical &amp; Engineering News. (2020). Developing
                    countries face diagnostic challenges.{' '}
                    <em>Chemical &amp; Engineering News</em>, 98(27).{' '}
                    <a
                      href="https://cen.acs.org/analytical-chemistry/diagnostics/Developing-countries-face-diagnostic-challenges/98/i27"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    Cornish, N. E., Bachmann, L. H., Diekema, D. J., McDonald,
                    L. C., McNulty, P., Stevens-Garcia, J., Raphael, B. H.,
                    &amp; Miller, M. B. (2023). Pandemic demand for SARS-CoV-2
                    testing led to critical supply and workforce shortages in
                    U.S. clinical and public health laboratories.
                    <em>Journal of Clinical Microbiology</em>, 61(7), e03189-20.{' '}
                    <a
                      href="https://journals.asm.org/doi/10.1128/jcm.03189-20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    Duma, Z., Chuturgoon, A. A., Ramsuran, V., Edward, V.,
                    Naidoo, P., Mpaka-Mbatha, M. N., Bhengu, K. N., Nembe, N.,
                    Pillay, R., Singh, R., &amp; Mkhize-Kwitshana, Z. L. (2022).
                    The challenges of severe acute respiratory syndrome
                    coronavirus 2 (SARS-CoV-2) testing in low-middle income
                    countries and possible cost-effective measures in
                    resource-limited settings. <em>Global Health</em>, 18(1), 5.{' '}
                    <a
                      href="https://link.springer.com/article/10.1186/s12992-022-00796-7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    Escadafal, C., Baldan, R., De Vos, M., Ruiz, R. J., III,
                    Emperador, D. M., Murahwa, A. T., Macé, A., Bausch, D. G.,
                    Vessière, A., &amp; Sacks, J. A. (2023). Evaluating
                    diagnostic tests during outbreaks: Challenges and lessons
                    learnt from COVID-19.
                    <em>BMJ Global Health</em>, 8(7), e012506.{' '}
                    <a
                      href="https://gh.bmj.com/content/8/7/e012506"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    GBD 2019 Chronic Respiratory Diseases Collaborators. (2023).
                    Global burden of chronic respiratory diseases and risk
                    factors, 1990–2019: An update from the Global Burden of
                    Disease Study 2019.
                    <em>EClinicalMedicine</em>, 59, 101936.{' '}
                    <a
                      href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370%2823%2900113-X/fulltext"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    Prasad, S., Bellomo, T. R., Cinti, S., Firn, J., Shuman, A.
                    G., &amp; Goold, S. D. (2023). Lessons learned from the
                    allocation of diagnostic testing as a scarce resource in the
                    COVID-19 pandemic.
                    <em>Michigan Journal of Medicine</em>, 6.{' '}
                    <a
                      href="https://journals.publishing.umich.edu/mjm/article/id/1682/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    Spencer, M. R. T., Yoon, S., Lee, Y., Bustamante, A. V.,
                    &amp; Chen, J. (2024). Healthcare and telehealth use among
                    U.S. immigrants during the COVID-19 pandemic.{' '}
                    <em>Frontiers in Public Health</em>, 12, 1422343.{' '}
                    <a
                      href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1422343/full"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>

                  <li className="leading-relaxed">
                    Zhou, S., Feng, X., Hu, Y., Yang, J., Chen, Y., Bastow, J.,
                    Zheng, Z.-J., &amp; Xu, M. (2023). Factors associated with
                    the utilization of diagnostic tools among countries with
                    different income levels during the COVID-19 pandemic.
                    <em>Global Health Research and Policy</em>.{' '}
                    <a
                      href="https://link.springer.com/article/10.1186/s41256-023-00330-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline"
                    >
                      CrossRef
                    </a>
                  </li>
                </ol>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}
