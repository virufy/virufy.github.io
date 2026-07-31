import type { I18nData } from '../types';

export const blogPageContent = {
  hero: {
    title: 'Our Blog',
    subtitle:
      'Stories, research insights, and updates on advancing AI-powered respiratory health.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Insights & Updates',
    tagIcon: '/icons/Blog-icon.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'ニュース' },
      { id: 'publications', label: '論文・出版物' },
      { id: 'blogs', label: 'ブログ' },
    ],
    defaultOption: 'news',
  },

  filters: {
    filterByYearLabel: '年で絞り込む:',
    allYearsOption: 'すべての年',
    sortByLabel: '並び替え：',
    newestFirst: '新しい順',
    oldestFirst: '古い順',
  },

  section5: {
    title: 'この取り組みに共感したら、私たちと一緒に次の一歩をつくりませんか。',
    text: '研究者、デザイナー、エンジニア、支援者など、さまざまなメンバーが協力しながら、世界の呼吸器ヘルスの向上に取り組んでいます。',
    button: 'チームに参加する',
  },

  emptyMessage: '該当するニュース記事はありません。',
} satisfies I18nData['blogPosts']['blogPageContent'];

export const blogPosts: I18nData['blogPosts']['blogPosts'] = {
  'silent-smog-hidden-impact': {
    slug: 'silent-smog-hidden-impact',
    title: 'Silent Smog: The Hidden Impact on Your Lungs',
    description:
      'How everyday air pollution silently damages lung health and why standard AQI apps fall short.',
    date: 'April 2026',
    content: `
      <p>
        City air quality apps offer broad AQI (Air Quality Index) and PM2.5 (tiny airborne particles 2.5 micrometers or smaller)
        averages but overlook personalized lung impacts from daily smog exposure. This "silent smog" conceals airway inflammation,
        chronic coughs, and escalating disease risks that develop quietly.
      </p>

      <h2>Limitations of Standard Apps</h2>
      <p>
        AQI metrics represent city-wide snapshots, ignoring your specific encounters with traffic fumes, indoor contaminants,
        or individual vulnerabilities. Fine PM2.5 particles invade deep lung tissue, triggering oxidative stress on even
        moderate pollution days. Global smog-pollen interactions or NO2 (nitrogen dioxide) emissions intensify threats for
        asthma and COPD patients.
      </p>

      <h2>Progressive Lung Effects</h2>
      <p>
        Pollutants inflame respiratory passages, causing wheezing, excess phlegm, and steady lung capacity erosion without
        immediate alerts. Prolonged contact heightens COPD, lung cancer, and cardiovascular dangers, with symptoms lagging exposures.
        Non-smokers and youth endure disproportionate chronic bronchitis burdens from these stealthy assaults.
      </p>

      <h2>Everyday Invisible Culprits</h2>
      <ul>
        <li>Exhaust particles (NO2, black carbon) incite coughs via genetic predispositions.</li>
        <li>Haze infiltrating homes prolongs undetected irritation.</li>
        <li>Pollution reductions directly lessen cough incidence.</li>
      </ul>

      <p>
        Virufy is pioneering an AI screening tool crowdsourcing cough data worldwide to refine models for early detection and outbreak insights.
        They're building a user-friendly app with instant, anonymous feedback while prioritizing data privacy and advancing global respiratory health.
      </p>

      <h2>References</h2>
      <ul>
        <li>
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9066887/" target="_blank" rel="noopener noreferrer">
            National Center for Biotechnology Information (2022)
          </a>
        </li>
        <li>
          <a href="https://www.asthmaandlung.org.uk/living-with/air-pollution/your-lungs" target="_blank" rel="noopener noreferrer">
            Asthma + Lung UK (Your lungs and air pollution)
          </a>
        </li>
      </ul>
    `,
  },
  'screen-early-live-better': {
    slug: 'screen-early-live-better',
    title: 'Screen Early, Live Better',
    description:
      'Why catching respiratory disease early matters, and why making screening more accessible is one of the most important problems in global health right now.',
    date: 'April 2026',
    content: `
    <p>
      Respiratory disease is one of the leading causes of preventable death worldwide. Yet most people don't think about their lung health until something has already gone wrong. A persistent cough gets dismissed. Shortness of breath gets blamed on aging. By the time symptoms are impossible to ignore, significant damage is often already done.
    </p>

    <h2>Why Respiratory Disease Goes Undetected</h2>
    <p>
      The lungs are remarkably adaptive. They compensate quietly as function declines, meaning early-stage disease rarely announces itself. Conditions like COPD, asthma, and early pulmonary infections can progress for months, sometimes years, without obvious symptoms.
    </p>
    <p>
      Standard clinical screening exists, but access is uneven. In many parts of the world, a spirometry test or chest X-ray requires a doctor referral, specialist availability, and a working health system. These layers of friction mean most people never seek screening until a health crisis forces the issue.
    </p>
    <p>
      Research consistently shows that respiratory conditions identified before they become severe respond better to treatment and lifestyle intervention. The challenge is that the window when action is most useful is also the window when most people feel well enough to ignore the issue.
    </p>

    <h2>What Early Detection Actually Changes</h2>
    <p>
      The case for early screening isn't abstract. It's grounded in a consistent pattern across respiratory conditions: outcomes are meaningfully better when disease is identified before it becomes symptomatic or severe.
    </p>
    <ul>
      <li>
        <strong>COPD caught early.</strong> Lifestyle changes and management started before significant airflow obstruction can slow progression substantially, while late-stage COPD is largely irreversible.
      </li>
      <li>
        <strong>Respiratory infections identified sooner.</strong> Early intervention reduces the risk of complications like pneumonia and hospitalization, and limits community spread of contagious illness.
      </li>
      <li>
        <strong>Asthma managed proactively.</strong> People who understand their triggers and baseline function earlier tend to experience fewer acute episodes and better long-term quality of life.
      </li>
    </ul>

    <h2>Taking Control of Your Own Health</h2>
    <p>
      For most of medical history, health monitoring happened reactively. You showed up when something was wrong, a professional assessed you, and you received a verdict. The shift happening now is different: individuals can access more information about their own bodies, earlier, without waiting for a system to initiate it.
    </p>
    <p>
      This isn't about replacing clinical care. It's about closing the gap between how people actually behave (they avoid appointments, they rationalize symptoms, they wait) and the moment when actionable information would be most useful to them.
    </p>
    <p>
      The simplest version of taking control looks like this: knowing your baseline, noticing when something changes, and having a path to act on that information quickly before the change becomes a crisis.
    </p>

    <h2>The Sounds Your Body Is Already Making</h2>
    <p>
      Cough patterns, breathing rhythm, and vocal characteristics change measurably when respiratory health is compromised. Clinicians have used auscultation for over a century. What has changed is the ability to analyze these signals at scale, without specialized equipment, using the microphone already in your pocket.
    </p>
    <p>
      Research from institutions including MIT, Cambridge, and Carnegie Mellon has shown that AI models trained on cough and breathing data can detect patterns associated with specific respiratory conditions. The science is still being validated and refined, and Virufy is contributing to that process by building one of the largest crowdsourced respiratory datasets in the world.
    </p>

    <h2>How Virufy Is Working on This</h2>
    <p>
      250,000+ patients enrolled in clinical studies across 5 countries.
    </p>
    <p>
      Virufy is a nonprofit developing AI-powered respiratory screening technology. The team is currently in the data collection phase, gathering cough recordings from contributors worldwide to train and validate detection models across a diverse global population. Clinical and government approvals are required before a screening tool can be deployed.
    </p>
    <p>
      The goal is a free, accessible tool that works in low-income countries as readily as it works in well-resourced healthcare systems. Getting there requires building a dataset that reflects the full range of the people it will serve.
    </p>

    <h2>What You Can Do Now</h2>
    <p> The most important shift is attitudinal: treat your respiratory health as something worth monitoring, not just something to address when it breaks. A few practical starting points: </p>
    <ul>
      <li>
        <strong>Know your baseline.</strong> Notice how you breathe at rest, after exertion, first thing in the morning. Changes are only meaningful when you have a reference point.
      </li>
      <li>
        <strong>Don't rationalize persistent symptoms.</strong> A cough lasting more than three weeks, unexplained breathlessness, or recurring chest tightness deserves a conversation with a clinician.
      </li>
      <li>
        <strong>Contribute to early screening research.</strong> Tools like Virufy's data collection app get better when more people from more places participate. Early contributors are helping build the screening capability that future users will rely on.
      </li>
    </ul>

    <p>
      Screening early doesn't guarantee a clean result. But it gives you information while it's still useful, while there's still time to act, to adjust, to get ahead of something that would otherwise get ahead of you.
    </p>

    <h2>References</h2>
    <ul>
      <li>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9655248/" target="_blank" rel="noopener noreferrer">
          National Center for Biotechnology Information — "Severe Air Pollution Exposure and Long-Term Health Outcomes" (2022)
        </a>
      </li>
      <li>
        <a href="https://www.asthmaandlung.org.uk/living-with/air-pollution/your-lungs" target="_blank" rel="noopener noreferrer">
          Asthma + Lung UK — "Air pollution effects on your lungs"
        </a>
      </li>
      <li>
        <a href="https://www.who.int/news-room/questions-and-answers/item/who-global-air-quality-guidelines" target="_blank" rel="noopener noreferrer">
          World Health Organization — "Global Air Quality Guidelines" (2021)
        </a>
      </li>
    </ul>
  `,
  },
  'world-no-tobacco-day': {
    slug: 'world-no-tobacco-day',
    title: 'World No Tobacco Day',
    description:
      'A global health awareness initiative highlighting the dangers of tobacco use and the importance of lung health and prevention.',
    date: 'May 2026',
    content: `
      <p>
        Every year on May 31st, the global community recognizes World Health Organization’s World No Tobacco Day — a global initiative created to raise awareness about the harmful effects of tobacco use and advocate for policies that protect public health. Established in 1987, this day serves as a reminder that tobacco remains one of the leading preventable causes of death worldwide, contributing to millions of deaths each year through cancer, chronic respiratory disease, cardiovascular disease, and other serious health conditions.
      </p>

      <h2>Why World No Tobacco Day Matters</h2>
      <p>
        Tobacco use impacts people of all ages, backgrounds, and communities. Cigarette smoking, vaping, and smokeless tobacco products expose users to harmful chemicals that damage the lungs, heart, and immune system. Secondhand smoke also poses serious health risks, especially for children, older adults, and individuals with pre-existing respiratory conditions.
      </p>
      <p>
        According to global health organizations, tobacco use is strongly linked to diseases such as chronic obstructive pulmonary disease (COPD), lung cancer, emphysema, and chronic bronchitis. Over time, tobacco smoke damages lung tissue, reduces lung function, and increases inflammation in the respiratory system, making it harder for the body to breathe and fight infection.
      </p>

      <h2>The Growing Concern Around Youth Tobacco Use</h2>
      <p>
        One of today’s greatest public health concerns is the tobacco industry’s continued targeting of younger generations. Flavored tobacco and vaping products — including fruit, candy, mint, and dessert-inspired flavors — are often designed to appear more appealing to teens and young adults. Bright packaging, influencer marketing, and social media campaigns have contributed to increased experimentation among youth populations worldwide.
      </p>

      <h2>The Impact of Tobacco on Lung Health</h2>
      <p>
        The lungs are among the organs most affected by tobacco use. Harmful chemicals inhaled through smoking or vaping can scar lung tissue, narrow airways, and reduce oxygen exchange. Over time, this damage may lead to chronic coughing, shortness of breath, wheezing, and severe respiratory disease.
      </p>
      <p>
        Early detection and prevention are essential. Many lung diseases develop gradually, and symptoms are often ignored until significant damage has already occurred. Increasing access to respiratory screening and digital health innovation may help identify at-risk individuals sooner and support better long-term outcomes.
      </p>

      <h2>Resources to Help Quit Tobacco</h2>
      <p>
        Quitting tobacco can significantly improve overall health and reduce the risk of serious disease. While quitting is challenging, support and resources are available:
      </p>
      <ul>
        <li>National quitlines 1-800-QUIT-NOW</li>
        <li>          <a href="https://www.cancer.org/cancer/risk-prevention/tobacco/guide-quitting-smoking/nicotine-replacement-therapy.html" target="_blank" rel="noopener noreferrer">Nicotine replacement therapies</a></li>
        <li>
            <a href="https://nicotine-anonymous.org/" target="_blank" rel="noopener noreferrer">Nicotine Anonymous</a>
                </li>
        <li>
          <a href="https://smokefree.gov/tools-tips/quitstart" target="_blank" rel="noopener noreferrer">
            https://smokefree.gov/tools-tips/quitstart
          </a>
        </li>
        <li><a href="https://chwtraining.org/blog-10-free-apps-tobacco-cessation/" target="_blank" rel="noopener noreferrer">10 Free Apps for Tobacco Cessation</a></li>
      </ul>

      <h2>Virufy’s Commitment to Respiratory Health Innovation</h2>
      <p>
  At
  <a
    href="https://virufy.org"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800"
  >
    Virufy
  </a>
  , we believe technology can play a powerful role in improving respiratory health access and early detection. Virufy is developing AI-powered tools designed to analyze cough and respiratory acoustic sounds to help screen for potential lung disease risks in a fast, scalable, and accessible way.
</p>
      <p>
        By leveraging artificial intelligence and digital health innovation, Virufy aims to support earlier identification of respiratory conditions and improve access to preventative care — particularly in underserved communities where access to traditional screening tools may be limited.
      </p>

      <p>
        This World No Tobacco Day, we encourage individuals, families, healthcare leaders, and communities to prioritize lung health, support tobacco prevention efforts, and advocate for healthier futures for the next generation.
      </p>

      <h2>References</h2>
      <ul>
        <li><a href="https://www.who.int/campaigns/world-no-tobacco-day" target="_blank" rel="noopener noreferrer">World Health Organization – World No Tobacco Day</a></li>
        <li><a href="https://www.cdc.gov/tobacco/e-cigarettes/about.html" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention – Health Effects of Smoking</a></li>
        <li><a href="https://www.lung.org/quit-smoking/smoking-facts/health-effects" target="_blank" rel="noopener noreferrer">American Lung Association – Tobacco and Lung Health</a></li>
      </ul>
    `,
  },
  'the-next-step-in-respiratory-public-health': {
    slug: 'the-next-step-in-respiratory-public-health',
    title: 'The Next Step in Respiratory Public Health',
    description:
      'How community-centered screening initiatives are expanding what early detection looks like, and where AI fits into that work.',
    date: 'June 15th, 2026',
    content: `
    <p>
      In communities across the United Kingdom, adults aged 55 to 74 with a history of smoking are now being invited to free lung health checks through the NHS Lung Cancer Screening Programme. In the United States, the Preventive Services Task Force has expanded its lung cancer screening eligibility to reach millions more people than previous guidelines covered. Across Asia, national tuberculosis control programs have incorporated respiratory assessment as a routine part of community health visits.
    </p>

    <p>
      These are not small developments. They represent years of clinical research, public health investment, and policy work, and the communities they reach benefit from them in measurable ways. Early-stage detection rates through the NHS programme have reached levels far above the national average for cancers diagnosed outside of screening. The case for bringing respiratory screening closer to communities has been made, and governments are acting on it.
    </p>

    <p>
      The next question is how to extend that momentum further.
    </p>

    <h2>What Cough Analysis Adds to This Picture</h2>
    <p>
      Research published across institutions including MIT, Cambridge, and in peer-reviewed journals including the Journal of Medical Internet Research has demonstrated that AI models trained on cough and breathing recordings can identify patterns associated with respiratory conditions including COPD, asthma, and respiratory infections. The acoustic characteristics of a cough change measurably when airways are inflamed, narrowed, or compromised. Those changes are detectable in the audio signal itself, even when symptoms feel mild to the person producing them.
    </p>

    <p>
      The significance of this for community health is practical. A spirometry machine requires a clinical setting, trained technicians, and consistent maintenance. A chest CT requires radiology infrastructure. A cough recorded on a smartphone requires none of these things. The device is already present in the communities that national screening programs are working hardest to reach.
    </p>

    <p>
      A validated acoustic screening tool would not replace spirometry or clinical assessment. It would function as a first layer: extending the reach of existing programs into populations that fixed infrastructure cannot serve on its own, and flagging individuals who warrant follow-up before their condition reaches a stage where the options narrow.
    </p>

    <h2>Where Virufy Is in This Work</h2>
    <p>
      Virufy is a nonprofit developing AI-powered respiratory screening technology grounded in this science. The organization is currently in the data collection phase, building one of the largest crowdsourced respiratory datasets in the world by gathering cough and breathing recordings from contributors across diverse geographies, ages, and health profiles. Over 250,000 patients have been enrolled across clinical studies in five countries.
    </p>

    <p>
      The goal is a free screening tool that can sit alongside the community health infrastructure that national programs have already built, extending their reach without requiring new clinical equipment or specialist staffing. Clinical and regulatory approvals are required before any tool can be deployed, and that process is underway in parallel with the science.
    </p>

    <h2>Why the Data Has to Come from Communities</h2>
    <p>
      For acoustic screening to work reliably across the populations national programs are trying to serve, the models powering it need to be trained on data that reflects those populations. Accent, age, environmental exposure, and the specific respiratory disease profiles common in different regions all affect how a model performs. A model trained without adequate representation from the communities it will eventually serve will not perform well for them.
    </p>

    <p>
      This is why participation in data collection is itself a form of public health contribution. Research using datasets including Cambridge and Virufy has shown that AI models trained on narrow data perform significantly worse when tested across different populations and conditions, reinforcing that broad, diverse contribution is not optional. It is the foundation the science has to be built on.
    </p>

    <p>
      Contributing a recording means helping to ensure that the tools being developed will work for people who share your background, your environment, and your health context. That connection between individual participation and community-level outcomes is what makes this phase of the work matter.
    </p>

    <h2>References</h2>
    <ul>
      <li>
        <a href="https://www.nhs.uk/conditions/lung-health-checks/" target="_blank" rel="noopener noreferrer">
          NHS - Lung Health Checks
        </a>
      </li>
      <li>
        <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening" target="_blank" rel="noopener noreferrer">
          United States Preventive Services Task Force - Lung Cancer Screening Recommendation
        </a>
      </li>
      <li>
        <a href="https://www.jmir.org/2024/1/e51640" target="_blank" rel="noopener noreferrer">
          Journal of Medical Internet Research - Limitations of Cough Sound-Based COVID-19 Diagnosis AI Models (2024)
        </a>
      </li>
      <li>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8545201/" target="_blank" rel="noopener noreferrer">
          National Center for Biotechnology Information - Cough Sound Detection and Diagnosis Using Artificial Intelligence
        </a>
      </li>
    </ul>
  `,
  },
  'the-future-of-digital-solutions': {
    slug: 'the-future-of-digital-solutions',
    title: 'The Future of Digital Solutions',
    description:
      'How digital technology is making early health detection accessible to more people, and where AI-powered respiratory screening fits into that shift.',
    date: 'June 2026',
    content: `
    <p>
      Healthcare has always been defined by access. Access to doctors, to equipment, to information, and to the moment when that information is still useful enough to act on. For most of history, that access has been unevenly distributed, shaped by geography, income, and the availability of physical infrastructure. A hospital in a major city and a clinic in a rural village are not the same resource, and the gap between them has real consequences for the people on either side of it.
    </p>

    <p>
      Digital health is changing the terms of that equation. Not by replacing what hospitals do, but by extending what is possible before someone needs a hospital at all.
    </p>

    <h2>What Digital Health Actually Means</h2>
    <p>
      Digital health solutions cover a wide range of tools: wearable devices that track heart rate and sleep, apps that help people manage chronic conditions, telemedicine platforms that connect patients with clinicians remotely, and AI systems that analyze medical images or patient data to support diagnosis. What these tools share is the ability to bring health information closer to the person who needs it, at lower cost and with fewer logistical barriers than traditional clinical infrastructure requires.
    </p>

    <p>
      The shift this represents is not simply technological. It is a change in who gets to participate in their own healthcare, and when. A person who can monitor their blood glucose at home, or flag an irregular heartbeat before it becomes a crisis, is in a meaningfully different position than one who only receives that information during a clinical visit that may happen weeks or months later.
    </p>

    <p>
      The most consequential digital health tools are not necessarily the most sophisticated. They are the ones that travel furthest into the spaces conventional healthcare cannot reach.
    </p>

    <h2>Where Virufy Fits Into the Broader Digital Health Story</h2>
    <p>
      Virufy is a nonprofit developing AI-powered respiratory screening technology that sits at the intersection of everything digital health promises: accessible, low-cost, and designed from the ground up to reach the communities that need it most.
    </p>

    <p>
      The organization is currently in the data collection phase, gathering cough and breathing recordings from contributors across diverse geographies, ages, and health profiles. Over 250,000 patients have been enrolled across clinical studies in five countries. The goal is a free screening tool that performs as reliably for a patient in a rural community as it does in a well-resourced urban clinic. Clinical and regulatory approvals are required before any tool can be deployed, and that process is underway.
    </p>

    <p>
      What makes Virufy's approach relevant to the broader digital health conversation is not just the technology. It is the model. A nonprofit building a free tool, trained on crowdsourced global data, with the explicit aim of serving populations that commercial health technology rarely prioritizes, represents a different set of values about what digital health should be for.
    </p>

    <h2>What the Future of Digital Health Requires</h2>
    <p>
      The most optimistic version of digital health's future is one where the tools available to a person in a high-income country are equally available to someone in a low-income one. Where a smartphone is genuinely sufficient infrastructure for a meaningful layer of health monitoring. Where the data that trains AI systems reflects the full diversity of the people those systems will eventually serve.
    </p>

    <p>
      Getting there requires more than good technology. It requires broad participation in the research and data collection that makes the technology trustworthy. It requires regulatory frameworks that can evaluate and approve tools designed for global use. And it requires the public, not just researchers and clinicians, to treat their own health data as something worth contributing to a shared scientific effort.
    </p>

    <p>
      Contributing a cough recording to
      <a
        href="https://virufy.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Virufy
      </a>
      's dataset is one small, concrete version of that participation. Individually it is a minor action. At scale, across thousands of contributors from dozens of countries, it is the foundation on which a genuinely accessible respiratory screening tool gets built.
    </p>

    <p>
      The future of digital health is not waiting for a single breakthrough. It is being assembled, incrementally, from exactly this kind of collective effort.
    </p>

    <h2>References</h2>
    <ul>
      <li>
        <a href="https://www.who.int/health-topics/digital-health" target="_blank" rel="noopener noreferrer">
          World Health Organization - Digital Health
        </a>
      </li>
      <li>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8545201/" target="_blank" rel="noopener noreferrer">
          National Center for Biotechnology Information - Cough Sound Detection and Diagnosis Using Artificial Intelligence
        </a>
      </li>
      <li>
        <a href="https://www.media.mit.edu/publications/detecting-covid-19-from-cough-sounds/" target="_blank" rel="noopener noreferrer">
          MIT Media Lab - Detecting COVID-19 via Cough Sounds Using Artificial Intelligence (2020)
        </a>
      </li>
      <li>
        <a href="https://www.thelancet.com/journals/landig/home" target="_blank" rel="noopener noreferrer">
          The Lancet Digital Health - Digital Health Technologies and the Future of Healthcare
        </a>
      </li>
    </ul>
  `,
  },
  'bringing-respiratory-screening-to-the-communities-that-need-it-most': {
    slug: 'bringing-respiratory-screening-to-the-communities-that-need-it-most',
    title:
      'Bringing Respiratory Screening to the Communities That Need It Most',
    description:
      'How AI-powered cough analysis could change what early detection looks like for low-income communities worldwide.',
    date: 'July 2026',
    content: `
    <p>
      Respiratory disease does not distribute itself evenly. The communities carrying the highest burden of conditions like COPD, tuberculosis, and chronic respiratory infection are also, consistently, the ones with the least access to the tools that catch those conditions early. That overlap is not coincidental. It is the predictable result of a health system built around infrastructure that low-income communities have rarely had reliable access to.
    </p>

    <h2>The Access Problem in Respiratory Health</h2>

    <p>
      Diagnosing respiratory disease in a clinical setting requires equipment, trained personnel, and a functioning referral pathway. Spirometry machines need calibration and maintenance. Chest imaging requires radiology infrastructure. Specialist consultations require specialists. In low-income communities, whether in rural sub-Saharan Africa, underserved urban neighborhoods in the United States, or remote regions across South and Southeast Asia, one or more of these requirements is frequently absent.
    </p>

    <p>
      The consequence is not that respiratory disease is rarer in these communities. It goes undetected longer, progresses further before anyone intervenes, and is treated at the stage when outcomes are worst and costs are highest. A condition that is manageable when caught early becomes debilitating when caught late. That difference in timing is largely a difference in access.
    </p>

    <h2>What Changes When the Tool Is a Phone</h2>

    <p>
      Research from institutions including MIT and Cambridge has demonstrated that AI models trained on cough and breathing recordings can detect patterns associated with respiratory conditions with meaningful accuracy. The acoustic characteristics of a cough change measurably when airways are inflamed or obstructed, and those changes are present in the audio signal even when symptoms feel mild.
    </p>

    <p>
      The device required to capture that audio is a smartphone. Smartphone penetration in low-income countries has grown substantially over the past decade and continues to rise. This matters because it means the distribution network for a cough-based screening tool already exists in the communities that need it most, without requiring new clinical equipment, trained technicians, or a referral system to activate it.
    </p>

    <p>
      A community health worker conducting home visits does not need a spirometry machine if a validated screening tool on their phone can flag which patients warrant follow-up. A person in a rural area without nearby clinical access does not need to travel to a hospital for an initial assessment if that assessment can happen where they are. These are not marginal improvements. They represent a fundamentally different model of what early detection can look like for communities that have been outside the reach of conventional screening.
    </p>

    <h2>How Virufy Is Working Toward This</h2>

    <p>
      Virufy is a nonprofit developing AI-powered respiratory screening technology with the explicit goal of making it free and accessible to everyone, including the communities that commercial health technology rarely prioritizes. The organization is currently in the data collection phase, gathering cough and breathing recordings from contributors across diverse geographies, ages, and health profiles. Over 250,000 patients have been enrolled across clinical studies in five countries.
    </p>

    <p>
      Clinical and regulatory approvals are required before any screening tool can be deployed, and that process is underway. The foundation being built now, a globally representative dataset that reflects the full diversity of the people the tool will eventually serve, is what determines whether the technology works equitably when it arrives.
    </p>

    <p>
      A model trained without adequate data from low-income populations will not perform reliably for them. This is why participation in the data collection effort from contributors in these communities is not a secondary concern. It is central to whether the tool delivers on its promise.
    </p>

    <h2>What This Means for People Right Now</h2>

    <p>
      The tool is not yet available. But the work being done today is directly connected to whether low-income communities benefit from it when it is. Contributing a cough recording to Virufy's dataset is a concrete way to be part of that process, ensuring that the science being built reflects the communities that have the most to gain from it.
    </p>

    <p>
      Respiratory disease has long been a condition where your outcome depends heavily on where you were born and how much money you have. The goal of this work is to make early detection something that is true regardless of either.
    </p>

    <h2>References</h2>

    <ul>
      <li>
        World Health Organization —
        <a
          href="https://www.who.int/health-topics/chronic-respiratory-diseases"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Chronic Respiratory Diseases"
        </a>
      </li>

      <li>
        MIT Media Lab —
        <a
          href="https://www.media.mit.edu/publications/detecting-covid-19-from-cough-sounds/"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Detecting COVID-19 via Cough Sounds Using Artificial Intelligence" (2020)
        </a>
      </li>

      <li>
        National Center for Biotechnology Information —
        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8545201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Cough Sound Detection and Diagnosis Using AI"
        </a>
      </li>

      <li>
        The Lancet —
        <a
          href="https://www.thelancet.com/journals/lancet/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Health Equity and Access in Low Income Settings"
        </a>
      </li>
    </ul>
  `,
  },
};
export default blogPosts;
