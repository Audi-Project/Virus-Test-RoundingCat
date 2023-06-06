import tw from 'tailwind-styled-components';
import progressVirus from '../../assets/progressBar/progressVirus.svg';
import pill from '../../assets/progressBar/pill.svg';

export default function ProgressBar({ progress, width }) {
  return (
    <div>
      <ProgressBarBack>
        <img
          className="absolute bottom-[-16px] z-[1]"
          src={progressVirus}
          alt="progressVirus"
          style={{ left: `${progress}px`, transition: 'all 0.8s' }}
        />
        <img className="absolute right-[-16px] bottom-[-8px]" src={pill} alt="progressPill" />
        <Bar style={{ width: `${width}px` }} />
      </ProgressBarBack>
    </div>
  );
}

const ProgressBarBack = tw.div`
    bg-[#929292]
    w-[334.06px]
    h-[16px]
    rounded-[3px]
    border
    border-black
    relative
    my-10
    mx-auto
`;

const Bar = tw.div`
    h-[16px]
    bg-[#7000FF]
    border
    border-black
    duration-1000
`;
