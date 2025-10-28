import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function ImageWithFallback({ src, fallbackSrc = "https://picsum.photos/800/600?blur=2", alt, ...rest }: Props) {
  const [err, setErr] = React.useState(false);
  return (
    <img
      src={err ? fallbackSrc : (src as string)}
      onError={() => setErr(true)}
      alt={alt}
      {...rest}
    />
  );
}
