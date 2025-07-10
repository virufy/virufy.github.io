import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  FukuokaTeam,
  FumihikoProfile,
  AmilProfile,
  MoekaProfile,
} from '@/public/images/fukuoka/index';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Text from '../components/Text';
import Title from '../components/Title';

const FukuokaPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    fukuoka: { teamMembers, ...content },
  } = usei18n(lang);

  // Map team members to their images
  const getImageForMember = (id: string) => {
    switch (id) {
      case 'fumihiko':
        return FumihikoProfile;
      case 'amil':
        return AmilProfile;
      case 'moeka':
        return MoekaProfile;
      default:
        return FumihikoProfile; // Fallback to prevent null
    }
  };

  return (
    <div className="min-h-screen bg-white pt-1 text-gray-900">
      {/* Main Header */}
      <div className="mt-24 py-10 text-center">
        <Title
          H="h1"
          Text={content.title}
          TitleClassProps="text-3xl font-bold text-gray-900"
        />
        <Text
          Style=""
          Text={content.subtitle}
          TextClassProps="text-lg text-gray-700 mt-2"
        />
      </div>

      {/* About Section */}
      <div className="px-6 text-center lg:px-40">
        <ExportedImage
          className="mx-auto w-full max-w-3xl rounded-md"
          src={FukuokaTeam}
          alt="Fukuoka Team"
          priority
          basePath={basePath}
        />
        <Text
          Style=""
          Text={content.aboutSection.mainText}
          TextClassProps="mt-6 text-lg text-gray-900"
        />

        {/* Our Strengths Section */}
        <Text
          Style=""
          Text={content.aboutSection.strengthsText}
          TextClassProps="mt-4 text-lg text-gray-900"
        />

        {/* Establishment Info */}
        <Text
          Style=""
          Text={content.aboutSection.establishmentInfo.date}
          TextClassProps="mt-4 text-lg font-semibold text-gray-900"
        />
        <Text
          Style=""
          Text={content.aboutSection.establishmentInfo.description}
          TextClassProps="text-lg text-gray-900"
        />

        {/* Extended Info */}
        {content.aboutSection.extendedInfo.map((info, index) => (
          <Text
            key={index}
            Style=""
            Text={info}
            TextClassProps="mt-4 text-lg text-gray-900"
          />
        ))}
      </div>

      {/* Project Overview */}
      <div className="mt-10 px-6 lg:px-40">
        {content.projectOverview.map((paragraph, index) => (
          <Text
            key={index}
            Style=""
            Text={paragraph}
            TextClassProps="mt-4 text-lg text-gray-900"
          />
        ))}

        {/* Project Objectives */}
        {content.projectObjectives.map((objective, index) => (
          <Text
            key={index}
            Style=""
            Text={objective}
            TextClassProps="mt-4 text-lg text-gray-900"
          />
        ))}

        {/* Call for Facilities */}
        <Text
          Style=""
          Text={content.callForFacilities}
          TextClassProps="mt-4 text-lg text-gray-900"
        />
      </div>

      {/* Team Members Section */}
      <div className="mt-10 px-6 text-center lg:px-40">
        <Title
          H="h2"
          Text="チーム紹介"
          TitleClassProps="text-2xl font-bold text-gray-900"
        />
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <ExportedImage
                className="h-48 w-48 rounded-lg border border-gray-300 object-cover shadow-lg"
                src={getImageForMember(member.id)}
                alt={member.name}
                priority
                basePath={basePath}
              />
              <Text
                Style=""
                Text={member.name}
                TextClassProps="mt-4 font-bold text-lg text-gray-900"
              />
              <Text
                Style=""
                Text={member.role}
                TextClassProps="text-gray-600 whitespace-pre-line"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-16 mt-10 px-6 text-center lg:px-40">
        <Title
          H="h2"
          Text="お問い合わせ"
          TitleClassProps="text-2xl font-bold text-gray-900"
        />
        <div className="mt-2">
          <Text
            Style=""
            Text="Eメール: "
            TextClassProps="inline text-lg text-gray-900"
          />
          <a
            href={`mailto:${content.contactInfo.email}`}
            className="text-lg text-blue-600 hover:text-blue-800"
          >
            {content.contactInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FukuokaPage;
