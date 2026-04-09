interface TriangleProps extends React.ComponentProps<'svg'> {
  variant: 'top' | 'bottom';
  side: 'left' | 'right';
}

export default function Triangle({variant, side, ...props}: TriangleProps) {
  if (variant === 'top') {
    if (side === 'left') {
      return (
        <svg className="fill-[url(#gradient)] h-[10rem] lg:h-[20rem]" viewBox="0 0 100 64" preserveAspectRatio="none" {...props}>
          <path d="M0 0 L100 0 L0 64 Z"></path>
        </svg>
      );
    }
    return (
      <svg className="fill-[url(#gradient)] h-[10rem] lg:h-[20rem]" viewBox="0 0 100 64" preserveAspectRatio="none" {...props}>
        <path d="M0 0 L100 0 L100 64 Z"></path>
      </svg>
    );
  }
  if (side === 'left') {
    return (
      <svg className="fill-[url(#gradient)] h-[10rem] lg:h-[20rem]" viewBox="0 0 100 64" preserveAspectRatio="none">
        <path d="M100 0 L100 64 L0 64 Z"></path>
      </svg>
    );
  }
  return (
    <svg className="fill-[url(#gradient)] h-[10rem] lg:h-[20rem]" viewBox="0 0 100 64" preserveAspectRatio="none">
      <path d="M0 0 L100 64 L0 64 Z"></path>
    </svg>
  );
}