import tw from 'tailwind-styled-components';

export default function ImgContainer({
  src, alt, mbtiType
}) {
  return (
    <Continer>
      <img src={src} alt={alt} />
      <span className="text-xs text-[#8059E6]">{mbtiType}</span>
    </Continer>
  );
}

const Continer = tw.div`
    flex
    flex-col
    items-center
    justify-center
`;
