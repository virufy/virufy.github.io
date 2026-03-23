import React from 'react';

export default function VirufyPage() {
  return (
    <div className="relative flex justify-center bg-gradient-to-b from-black to-[#4064AD] pt-24 text-white">
      <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 sm:px-12 lg:px-40">
        {/* Header */}
        <h1 className="mb-4 text-4xl font-bold">
          Why We Build Clinically Grounded Cough AI
        </h1>
        <p className="white-600 mb-10 text-lg">
          Virufy’s Approach to Robust, Trustworthy, and Actionable Cough
          Analysis
        </p>

        {/* Executive Summary */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Executive Summary</h2>
          <p className="leading-relaxed text-white">
            Virufy’s approach to cough-based disease screening is intentionally
            conservative, transparent, and clinically grounded. Rather than
            relying on opaque architectures or excessive model complexity, we
            focus on well-understood signal representations, simple yet powerful
            convolutional models, and disciplined active learning workflows.
            This philosophy enables us to build systems that generalize across
            clinical datasets, identify failure modes early, and remain stable
            as data evolves.
          </p>
        </section>

        {/* Segmentation */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Cough Segmentation as a First-Class Problem
          </h2>
          <p className="mb-4 leading-relaxed text-white">
            Accurate cough segmentation is foundational. If cough events are
            poorly identified, downstream disease classification becomes
            unstable regardless of model sophistication. For this reason, we
            treat segmentation as a core modeling task, not a preprocessing
            afterthought.
          </p>
          <p className="leading-relaxed text-white">
            Our cough segmenter uses a sliding convolutional neural network
            operating on log-power spectrograms. This straightforward
            architecture preserves the key acoustic structure of coughs and
            remains robust to recording variability. Even without task-specific
            guidance, this combination demonstrates strong baseline performance
            across respiratory sound detection tasks.
          </p>
        </section>

        {/* Active Learning */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Active Learning for Clinical Robustness
          </h2>
          <p className="mb-4 leading-relaxed text-white">
            Clinical audio datasets are inherently heterogeneous. Recording
            devices, environments, patient behavior, and disease presentation
            all vary in ways that are difficult to enumerate in advance. Random
            sampling alone is insufficient to expose a model to the edge cases
            that matter most.
          </p>

          <ul className="list-disc space-y-2 pl-6 text-white">
            <li>Challenging samples near decision boundaries</li>
            <li>High-confidence predictions for auditing</li>
            <li>Dataset-specific artifacts that may bias learning</li>
          </ul>

          <p className="mt-4 leading-relaxed text-white">
            By iteratively annotating these targeted samples, we ensure the
            segmenter learns from the most clinically relevant and failure-prone
            examples.
          </p>
        </section>

        {/* Feature Learning */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Disease-Relevant Feature Learning
          </h2>
          <p className="leading-relaxed text-white">
            Once cough events are accurately segmented, a second sliding CNN is
            applied directly to the cough segments. This model is trained to
            learn disease-relevant acoustic features rather than superficial
            correlates. Because segmentation quality is high, the classifier
            operates on well-isolated cough events, improving stability and
            reducing sensitivity to noise.
          </p>
        </section>

        {/* Performance Table */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Internal Performance Highlights
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Dataset</th>
                  <th className="p-3 text-left">Accuracy</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">COPD dataset</td>
                  <td className="p-3">96%</td>
                  <td className="p-3">
                    Corresponds to a single incorrect patient classification
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Smoker cough dataset</td>
                  <td className="p-3">~82.5%</td>
                  <td className="p-3">Peak classification performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Why This Matters</h2>
          <p className="leading-relaxed text-white">
            Our philosophy prioritizes trustworthiness over spectacle. By
            combining simple, interpretable architectures with rigorous active
            learning and clinical validation, we build systems that fail loudly,
            improve deliberately, and generalize responsibly.
          </p>
          <p>
            In clinical AI, robustness is not achieved by complexity alone. It
            is earned through careful problem framing, targeted data selection,
            and continuous verification.
          </p>
        </section>

        {/* References */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">References</h2>
          <ol className="list-decimal space-y-2 pl-6 text-white">
            <li>
              Q. Zhou, J. Yan, Y. Zhang, and Y. Wang, “Cough recognition based
              on mel-spectrogram and convolutional neural network,” Frontiers in
              Robotics and AI, vol. 8, 2021.
            </li>
            <li>
              T. Keles, A. Erdem, and M. C. Yildiz, “Spectrogram-based deep
              learning approach for anomaly detection from cough sounds,”
              International Journal of Information Technology and Computer
              Science, vol. 3, pp. 1–12, 2025.
            </li>
            <li>
              B. Settles, “Active learning literature survey,” University of
              Wisconsin–Madison, Computer Sciences Technical Report 1648, 2010.
            </li>
            <li>
              A. Kendall and Y. Gal, “What uncertainties do we need in Bayesian
              deep learning for computer vision?” in Advances in Neural
              Information Processing Systems (NeurIPS), 2017.
            </li>
            <li>
              S. Lapuschkin, W. Samek, K.-R. Müller, and G. Montavon, “Unmasking
              clever Hans predictors and assessing what machines really learn,”
              Nature Communications, vol. 10, 2019.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
