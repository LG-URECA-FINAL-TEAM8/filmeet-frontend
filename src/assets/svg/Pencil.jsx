import * as React from 'react';
const SvgPencil = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 10 10"
    {...props}>
    <path fill="url(#Pencil_svg__a)" d="M0 0h10v10H0z" />
    <defs>
      <pattern id="Pencil_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#Pencil_svg__b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDklEQVR4nO2cPYtTQRSGgyhaa2GhhQgiuqUWLqI/QrQVbFII6QSTMO977LRdttVGBBG10kr8E6KVKCJYiIKwoLC6oDKui2HJ1507s/fE+z5wyyQz58m598yZSTodIYQQQgghhBAu6ff7B0heB3CP5IqZnW96TK3FzM6Q/ETy17Zr1cx2NT2+VgFgGcDaGBlb1x1J8SNDUhzKkBSHMiTFoQxJcShDUnJhZoczyfhzAbit6qsmceGXS4hK4kxIikOoTPEHgBuZb1+rTc9p4UFmKQDONT0nd1jFZmBmKSvlZragXVsAL8zsSBNSANwtN7vFlLH2NzDvmpAC4Fq5GS6oDP4Lzk5L+Whm+zttx8bI2Gkp8fPjODptB8Apkl9mBOu9mR0ttU6RjAoySkuRjAQZpaRIRoYWei4pkpFxP6OuFMnIv7mULEUy5ihta0ipXBLHTa5O20HGzMiRKa0GBWVIikMZVKb4kyEpDmVIikMZI1LifopOvMOHDHVtI5LhCCgz/ADJ8AMkww+QDD9AMvwAyfCDZDhCMhwhGY6QDEdIhiMkwxGS4QjJcIRkOEIyHCEZjpAMR0iGIyTDEd1udw8AAnhI8k1Tp0MALDcdC5eEEE6QvEnyq2Q4IoSwRPKDMsMR8b8+SP7UbcoRJJ/pmeEIAFd1vNMRIYRjqqYcYWa7AWzo4HOh4Ka8juRzAJ+1zsgMyUfD4fBQ6usHg8FBkldIPp23+oIWfZOzg+Q6ydd1pGwB4OysdYpkTCGEcHwkWFmkhBCWAHyTjATM7MK2wOXKlFvKjARIYsw3ubaUsNli0c/IEoTcn3Cvry0FwFs9M6oH7eWUB3AtKQAe6weW1Rd332eUqMlSsLmfov2Minsc82wWJUmxxAVnazGzixVW2VmqLzEFklax7SEpJSH5IKEPJSmlIPkqsTEoKYVOlcyqsCZd6/E0SnyP7ANrK2Z2co7A/4iLOwBPYiskhHA5/pdur9fb2/T4/ztIXhrpvm6MC7yZ7Wt6nK3BzE5HKTFTdOsRQgghhBBCCCGEEKLTWn4DNXnMS5L5BIkAAAAASUVORK5CYII="
        id="Pencil_svg__b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default SvgPencil;
