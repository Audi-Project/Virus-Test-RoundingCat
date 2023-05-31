import tw from 'tailwind-styled-components';

export default function ImgContainer({
  imgSize, src, alt, mbtiType
}) {
  return (
    <Continer>
      <img className={imgSize} src={src} alt={alt} />
      <span className="text-xs mt-1.5">{mbtiType}</span>
    </Continer>
  );
}

const Continer = tw.div`
    flex
    flex-col
    items-center
    justify-center
`;
