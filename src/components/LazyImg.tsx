type LazyImgProps = {
  src: string;
  bg: string;
};

export default function LazyImg({ src, bg }: LazyImgProps) {
  return (
    <div
      className="h-[220px] w-[320px] bg-cover"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <img src={src} alt="" loading="lazy" />
    </div>
  );
}
