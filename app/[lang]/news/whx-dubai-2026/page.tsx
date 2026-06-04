import { WHXDubai2026Image } from '@/public/images/news';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const WHXDubai2026 = () => {
  return (
    <>
      <div className="relative flex justify-center bg-white pt-24 text-[#111827]">
        <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 sm:px-12 lg:px-40">
          <div>
            <h2>
              <strong>Dubai, United Arab Emirates</strong> 2026
            </h2>
            <h3 className="font-bold">
              Advancing Pediatric Care with AI: Virufy x Emirates Health
              Services (EHS) at WHX Dubai 2026!
            </h3>
            <div>
              <a
                className="underline"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7439427074446061568/"
              >
                Link to article (LinkedIn)
              </a>
            </div>
          </div>

          <div>
            <p>
              We are thrilled to reflect on an incredible week at the WHX Dubai
              World Health Expo 2026, where Virufy, in collaboration with
              Emirates Health Services (EHS), showcased the future of AI-driven
              diagnostics.
            </p>
          </div>

          <div>
            <p>
              Our spotlight was on the &quot;AI-Assisted Pediatric Respiratory
              Health&quot; project. Our technology analyzes cough and breathing
              sounds via smartphone to detect respiratory issues like asthma
              early, non-invasively, and at scale, a vital mission to protect
              the health of children worldwide.
            </p>
          </div>

          <div>
            <h1 className="font-bold">✨ Innovation in Action:</h1>
            <p>
              Our dedicated team on the ground, Fuyuto Miyake, MD, Vijay Ullas,
              MD, and Mohammed Sohail Al Mohaideen, led the charge. Over four
              days, they:
            </p>

            <ul className="list-disc pl-6">
              <li>Engaged in high-level technical and clinical discussions.</li>
              <li>
                Received inspiring feedback that validates our vision for
                accessible screening.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">🌍 A Proud Partnership:</h1>

            <p>
              Special thanks to Emirates Health Services (EHSUAE | مؤسسة
              الإمارات للخدمات الصحية) for their visionary leadership and for
              providing such a prestigious global platform.
            </p>

            <p>
              We are honored to work alongside EHS to bridge the gap in
              healthcare through responsible AI innovation.
            </p>
          </div>

          <div>
            <p>
              Virufy remains committed to ensuring that every child, regardless
              of where they live, has access to life-saving technology.
            </p>
          </div>

          <div>
            <p>🤝 Join our mission. Support our cause.</p>
          </div>

          <div className="flex justify-center">
            <ExportedImage
              className=""
              src={WHXDubai2026Image}
              alt="Virufy x Emirates Health Services at WHX Dubai 2026"
              priority
              basePath={basePath}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WHXDubai2026;