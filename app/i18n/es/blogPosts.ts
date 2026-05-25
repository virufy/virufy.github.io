import { type Post } from '@/app/i18n/types/BlogPosts';

const blogPosts: Record<string, Post> = {
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
};

export default blogPosts;
