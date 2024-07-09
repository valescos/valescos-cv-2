type LazyImgProps = {
  src: string;
  bg: string;
};

export default function LazyImg({ src, bg }: LazyImgProps) {
  return (
    <div
      className="max-h-[210px] max-w-[280px] bg-cover"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <img src={src} alt="" loading="lazy" />
    </div>
  );
}
