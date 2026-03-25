import React from 'react';

export default function DataEfficientCoughAI() {
  return (
    <>
      <div className="relative flex justify-center bg-gradient-to-b from-black to-[#4064AD] pt-24 text-white">
        <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 sm:px-12 lg:px-40">
          {/* Header */}
          <div>
            <h2 className="uppercase">Whitepaper</h2>
            <h3>
              Data-Efficient Cough Analysis Through Active Learning and
              Segmentation
            </h3>
            <p className="mt-2 text-sm opacity-80">
              Virufy’s Approach to Robust, Trustworthy, and Actionable Cough
              Analysis
            </p>
          </div>

          {/* Executive Summary */}
          <div>
            <h4 className="font-bold">Executive Summary</h4>

            <p>
              Virufy’s approach to cough-based disease screening is
              intentionally conservative, transparent, and clinically grounded,
              with an explicit emphasis on the efficient and responsible use of
              clinical audio data. Rather than relying on opaque architectures
              or increasing model complexity, we employ well-established signal
              representations, compact convolutional neural networks, and
              structured active learning workflows designed to maximize
              informational yield from large, heterogeneous datasets.
            </p>

            <p>
              Active learning is used to prioritize samples that are most
              informative for model improvement, including those near decision
              boundaries and high-confidence predictions selected for auditing.
              By allocating annotation and modeling capacity toward these
              targeted examples—rather than treating all data as equally
              informative—the training process emphasizes clinically relevant
              variability and failure modes. This strategy supports
              generalization across datasets, facilitates early identification
              of systematic errors, and promotes stability under evolving data
              distributions, including variability in recording conditions and
              population characteristics.
            </p>
          </div>

          {/* Segmentation */}
          <div>
            <h4 className="font-bold">
              Cough Segmentation as a First-Class Problem
            </h4>

            <p>
              Accurate cough segmentation is a prerequisite for reliable
              downstream disease classification. Errors at the segmentation
              stage propagate through subsequent modeling steps, leading to
              instability in classification performance irrespective of model
              complexity. Accordingly, cough segmentation is treated as a
              primary modeling objective rather than a preprocessing step.
            </p>

            <p>
              Cough events are identified using a sliding convolutional neural
              network applied to log-power spectrogram representations. This
              architecture preserves salient time–frequency characteristics of
              cough acoustics while maintaining robustness to variability in
              recording conditions. Even in the absence of task-specific
              inductive bias, this combination provides strong baseline
              performance across respiratory sound detection tasks.
            </p>

            <p>
              The distinguishing aspect of this approach lies not in
              architectural novelty, but in the training and validation
              strategy. Model development emphasizes disciplined data selection,
              targeted annotation, and systematic evaluation to ensure that
              learned representations reflect clinically relevant acoustic
              structure rather than dataset-specific artifacts.
            </p>
          </div>

          {/* Active Learning */}
          <div>
            <h4 className="font-bold">
              Active Learning for Clinical Robustness
            </h4>

            <p>
              Clinical audio datasets exhibit substantial heterogeneity arising
              from differences in recording devices, acoustic environments,
              patient behavior, and disease presentation. Many of these sources
              of variability are difficult to characterize a priori, and uniform
              random sampling is insufficient to reliably expose models to
              clinically relevant edge cases.
            </p>

            <p>
              The model is used to identify subsets of data expected to provide
              the greatest informational value, including:
            </p>

            <ul className="list-disc space-y-1 pl-6">
              <li>
                Samples near decision boundaries, which are most informative for
                refining model discrimination.
              </li>
              <li>
                High-confidence predictions selected for auditing, enabling
                detection of silent failure modes and verification of model
                certainty.
              </li>
              <li>
                Dataset-specific artifacts, which may introduce bias or spurious
                correlations if left unexamined.
              </li>
            </ul>

            <p>
              These targeted samples are prioritized for annotation and review
              to ensure that training emphasizes clinically relevant variability
              and failure-prone cases.
            </p>

            <p>
              By iteratively incorporating feedback from these selected
              examples, the segmentation model is trained on cases that are both
              clinically informative and prone to failure. This process supports
              verification of confident predictions, reduces the risk of silent
              errors, and promotes consistent performance across diverse
              clinical cough datasets.
            </p>
          </div>

          {/* Feature Learning */}
          <div>
            <h4 className="font-bold">Disease-Relevant Feature Learning</h4>

            <p>
              Once cough events are reliably segmented, a second sliding
              convolutional neural network is applied directly to the extracted
              cough segments. This model is trained to learn acoustic features
              associated with disease-relevant cough physiology rather than
              incidental or context-dependent correlates.
            </p>

            <p>
              High segmentation fidelity ensures that the classifier operates on
              well-isolated cough events, reducing sensitivity to background
              noise and recording artifacts. As a result, learned
              representations consistently reflect physiologically meaningful
              cough acoustics, supporting stable classification performance
              across datasets with varying recording conditions and population
              characteristics.
            </p>
          </div>

          {/* Performance */}
          <div>
            <h4 className="font-bold">Internal Performance Highlights</h4>

            <p>
              While dataset sizes remain intentionally modest and clinically
              curated, internal evaluation demonstrates stable performance under
              five-fold cross-validation. Performance metrics are summarized
              below:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-white/20 text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-2">Dataset</th>
                    <th className="p-2">Accuracy/Performance</th>
                    <th className="p-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-2">Small India COPD Cohort</td>
                    <td className="p-2">96%</td>
                    <td className="p-2">
                      Corresponds to a single incorrect patient classification
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Small Smoker Cough Cohort</td>
                    <td className="p-2">~82.5%</td>
                    <td className="p-2">peak classification performance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              These results reflect not only model capacity, but the combined
              effects of disciplined data curation, high-fidelity cough
              segmentation, and active learning-driven validation. Together,
              these factors contribute to stable performance despite limited
              dataset size and heterogeneous recording conditions.
            </p>
          </div>

          {/* Why This Matters */}
          <div>
            <h4 className="font-bold">Why This Matters</h4>

            <p>
              Our development philosophy emphasizes trustworthiness and clinical
              reliability over architectural novelty. By combining interpretable
              model designs with structured active learning and systematic
              clinical validation, we construct systems that expose failure
              modes early, support incremental improvement, and maintain stable
              performance across heterogeneous datasets.
            </p>

            <p>
              In clinical artificial intelligence, robustness is not a direct
              consequence of model complexity. Instead, it emerges from careful
              problem formulation, targeted data selection, and continuous
              verification throughout model development. This approach underpins
              the observed reliability of our models in clinically relevant
              settings.
            </p>
          </div>

          {/* References */}
          <div>
            <h4 className="font-bold">References</h4>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Q. Zhou, J. Yan, Y. Zhang, and Y. Wang, “Cough recognition based
                on mel-spectrogram and convolutional neural network,” Frontiers
                in Robotics and AI, vol. 8, 2021.
              </li>
              <li>
                T. Keles, A. Erdem, and M. C. Yildiz, “Spectrogram-based deep
                learning approach for anomaly detection from cough sounds,”
                International Journal of Information Technology and Computer
                Science, vol. 3, pp. 1–12, 2025.
              </li>
              <li>
                B. Settles, “Active learning literature survey,” University of
                Wisconsin–Madison, Computer Sciences Technical Report 1648,
                2010.
              </li>
              <li>
                A. Kendall and Y. Gal, “What uncertainties do we need in
                Bayesian deep learning for computer vision?” in Advances in
                Neural Information Processing Systems (NeurIPS), 2017.
              </li>
              <li>
                S. Lapuschkin, W. Samek, K.-R. Müller, and G. Montavon,
                “Unmasking clever Hans predictors and assessing what machines
                really learn,” Nature Communications, vol. 10, 2019.
              </li>
              <li>
                N. Rasmussen, R. Rizk, L. Wang, and K. C. Santosh, “Ecologically
                valid benchmarking and adaptive attention: Scalable marine
                bioacoustic monitoring,” arXiv preprint arXiv:2509.04682, 2025.
              </li>
              <li>
                N. Rasmussen, R. Rizk, L. Wang, and K. C. Santosh,
                “Channel-selected stratified nested cross-validation for
                clinically relevant EEG-based Parkinson’s disease detection,”
                arXiv preprint arXiv:2601.05276, 2026.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
