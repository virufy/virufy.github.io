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
};

export default blogPosts;
