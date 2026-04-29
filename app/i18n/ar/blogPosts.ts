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
      'Why catching respiratory disease early matters and why accessible screening is one of the most urgent problems in global health.',
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
      Standard clinical screening exists, but access is uneven. In many parts of the world, a spirometry test or chest X-ray requires a doctor referral, specialist availability, and a functioning health system. These layers of friction mean most people never seek screening until a health crisis forces the issue.
    </p>
    <p>
      Research consistently shows that respiratory conditions identified before they become severe respond better to treatment and lifestyle intervention. The challenge is that the window when action is most useful is also the window when most people feel well enough to ignore the issue.
    </p>

    <h2>What Early Detection Actually Changes</h2>
    <p>
      The case for early screening isn't abstract. Outcomes are meaningfully better when disease is identified before it becomes symptomatic or severe.
    </p>
    <ul>
      <li>
        <strong>COPD caught early.</strong> Lifestyle changes and early management can slow progression substantially, while late-stage COPD is largely irreversible.
      </li>
      <li>
        <strong>Respiratory infections identified sooner.</strong> Early intervention reduces complications like pneumonia, lowers hospitalization risk, and helps limit community spread.
      </li>
      <li>
        <strong>Asthma managed proactively.</strong> Understanding triggers and baseline function earlier leads to fewer acute episodes and better long-term quality of life.
      </li>
    </ul>

    <h2>Taking Control of Your Own Health</h2>
    <p>
      For most of medical history, health monitoring happened reactively. You showed up when something was wrong, a professional assessed you, and you received a diagnosis. The shift happening now is different: individuals can access more information about their own bodies earlier, without waiting for a system to initiate it.
    </p>
    <p>
      This isn't about replacing clinical care. It's about closing the gap between how people actually behave and the moment when actionable information would be most useful.
    </p>
    <p>
      The simplest version of taking control looks like this: know your baseline, notice when something changes, and act on that information before it becomes a crisis.
    </p>

    <h2>The Sounds Your Body Is Already Making</h2>
    <p>
      Cough patterns, breathing rhythm, and vocal characteristics change measurably when respiratory health is compromised. Clinicians have used these signals for over a century. What has changed is the ability to analyze them at scale using the microphone already in your pocket.
    </p>
    <p>
      Research from institutions including MIT, Cambridge, and Carnegie Mellon has shown that AI models trained on cough and breathing data can detect patterns associated with specific respiratory conditions. The science is still being validated, and Virufy is contributing by building one of the largest crowdsourced respiratory datasets in the world.
    </p>

    <h2>How Virufy Is Working on This</h2>
    <p>
      250,000+ patients have been enrolled in clinical studies across five countries. Virufy is a nonprofit developing AI-powered respiratory screening technology, currently focused on collecting cough recordings from contributors worldwide to train and validate detection models across diverse populations.
    </p>
    <p>
      The goal is a free, accessible tool that works in low-income settings as effectively as in well-resourced healthcare systems. Achieving that requires building a dataset that reflects the full range of people it will serve.
    </p>

    <h2>What You Can Do Now</h2>
    <ul>
      <li>
        <strong>Know your baseline.</strong> Pay attention to how you breathe at rest, after exertion, and at different times of day.
      </li>
      <li>
        <strong>Don't ignore persistent symptoms.</strong> A cough lasting more than three weeks, unexplained breathlessness, or recurring chest tightness should be evaluated by a clinician.
      </li>
      <li>
        <strong>Contribute to research.</strong> Participating in tools like Virufy's data collection app helps improve early screening for future users worldwide.
      </li>
    </ul>

    <p>
      Screening early doesn't guarantee a clean result. But it gives you information while it's still useful—while there's still time to act, adjust, and stay ahead of potential disease progression.
    </p>

    <h2>References</h2>
    <ul>
      <li>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9655248/" target="_blank" rel="noopener noreferrer">
          National Center for Biotechnology Information — Severe Air Pollution Exposure and Long-Term Health Outcomes (2022)
        </a>
      </li>
      <li>
        <a href="https://www.asthmaandlung.org.uk/living-with/air-pollution/your-lungs" target="_blank" rel="noopener noreferrer">
          Asthma + Lung UK — Air pollution effects on your lungs
        </a>
      </li>
      <li>
        <a href="https://www.who.int/news-room/questions-and-answers/item/who-global-air-quality-guidelines" target="_blank" rel="noopener noreferrer">
          World Health Organization — Global Air Quality Guidelines (2021)
        </a>
      </li>
    </ul>
  `,
  },
};

export default blogPosts;
