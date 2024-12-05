const SvgImagePreview = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 150 150"
    style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
    }}
    {...props}>
    <path fill="url(#ImagePreview_svg__a)" d="M0 0h150v150H0z" />
    <defs>
      <pattern
        id="ImagePreview_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <use xlinkHref="#ImagePreview_svg__b" transform="scale(.00667)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="ImagePreview_svg__b"
        width={150}
        height={150}
      />
    </defs>
  </svg>
);
export default SvgImagePreview;
