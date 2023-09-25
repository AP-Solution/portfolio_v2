export function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} arrow-prev`}
      onClick={onClick}
    />
  );
}

export function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} arrow-next`}
      onClick={onClick}
    />
  );
}