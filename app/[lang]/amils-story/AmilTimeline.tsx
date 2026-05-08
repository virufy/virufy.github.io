import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import WhiteCircleIcon from '@/public/icons/icon-amil-circle-white.png';
import { type Card } from '@/app/i18n/types/amilsStory';

// Animated Timeline
// https://www.npmjs.com/package/react-vertical-timeline-component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const AmilTimeline = ({ cards }: { cards: Card[] }) => {
  const timelineIconStyle = {
    background: 'linear-gradient(to bottom, #0E72C9, #2A9D8F)',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <VerticalTimeline
      lineColor={'linear-gradient(to bottom, #0E72C9, #2A9D8F)'}
    >
      {cards.map((card: Card, index) => (
        <VerticalTimelineElement
          key={index}
          date={card.date}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={timelineIconStyle}
          icon={
            <ExportedImage
              src={WhiteCircleIcon}
              alt="icon"
              width={12}
              height={12}
              basePath={basePath}
            />
          }
        >
          <ExportedImage
            className="h-64 rounded-t-[20px] object-cover object-top"
            src={card.image}
            alt={`Milestone image for ${card.title}`}
            basePath={basePath}
          />
          <h3 className="mx-5 mt-5 text-lg font-bold">{card.title}</h3>
          <p className="!m-5 !mx-5 !font-normal">{card.text}</p>
        </VerticalTimelineElement>
      ))}
      <style>{`
        .vertical-timeline {
          padding: 0 !important;
          width: 100% !important;
        }
        .vertical-timeline-element {
          padding: 0 !important;
        }
        .vertical-timeline-element-content {
          border-radius: 20px !important;
          padding: 0 !important;
        }
        .vertical-timeline-element-date {
          color: #2A9D8F;
          font-weight: 900 !important;
        }
        @media only screen and (min-width: 1170px) {
          .vertical-timeline--two-columns
          .vertical-timeline-element:nth-child(odd)
          .vertical-timeline-element-content
          .vertical-timeline-element-date {
            left: 106.5% !important;
            top: 60px !important;
          }
          .vertical-timeline--two-columns
          .vertical-timeline-element:nth-child(even)
          .vertical-timeline-element-content
          .vertical-timeline-element-date {
            right: 106.5% !important;
            top: 60px !important;
          }
        }
        .vertical-timeline--two-columns
        .vertical-timeline-element
        .vertical-timeline-element-content
        .vertical-timeline-element-date {
          left: -72px;
          top: 35px;
          position: absolute;
          width: fit-content;
          margin-top: 16px;
          padding: 6px 16px;
          background-color: white;
          opacity: 1;
          border-radius: 10px;
          box-shadow: 0 0 0 1px rgba(200, 200, 200, 0.4),
            0 0 12px rgba(200, 200, 200, 0.25);
        }
      `}</style>
    </VerticalTimeline>
  );
};

export default AmilTimeline;
