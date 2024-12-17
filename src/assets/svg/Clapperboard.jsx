import * as React from 'react';
const SvgClapperboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 50 50"
    {...props}>
    <path fill="url(#Clapperboard_svg__a)" d="M0 0h50v50H0z" />
    <defs>
      <pattern
        id="Clapperboard_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <use xlinkHref="#Clapperboard_svg__b" transform="scale(.02)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVR4nO3ZW6gVZRQH8F9lGd6g8EDpOSKlkfggiBgY5EOgpoQgQhTVQ2CahJcHCS8PQQg+6JuhPggiiHhBkDITpSAsAiuiIEGE8kqiHlETs9CJiXUOwzR7t89pe2YOzR/Wyzdr5vuv9V9rfd9mMzjwDFbhC1zDQYw0CPAgZmADTiIpsDUqimGYj+24lCN9FcdzaydUCKPxJvbiZo7oL9iGl/Fw+D+Hz+L5PXSWSX4S3sNXuNugbE5gYpNvfBx+bw8gbw/hBWzEqQbEi+yPUKQo6yvC59D9Jj8cC7ADl3MEr2N/kPm2hYBuYxOmYy2+yTxLv912PBlSH4rNs2TSEtqMF/FI5p0H8EoflUrwWyRjdrvIT8ZqfN2k3nvsZ7wRozWPtJkX40KT9y9Gqc3Fo+2o95kh9emCzbpbyOYPmJf55pgIIm3gvJI/Yn2UVaref8IILMROXCmo9wNRUuMwBG/hTAsBfRnT6V5m7c8YryvxlDZgLJbgE/zegEh64j7b4P2hWF5wsBXZDezD63i8HeSnYF1Blv5tRH6IJwq+NyrUyR90qZ3HFsyJoNuCkXEZy4+8j7Ao7ju3WpgiH8RhtxRHcCfn8334TGtHvRfh3cyRvyvmf3oOyDXk1lCg1RGZ1vsxLMN4A4B3MpvfiYZOa3ZCge/EmN+NyKfNvwev4TEDjOcbkEoDejp8UlKvYnfBiD0bfTIrd9gNOHYFoU+jhDpjWvXM/M+jTLLkv8P7mHq/6r0/+DXIdWXWugqm09Hop/S8qCS6g2xnk0CqbsfFj5okyqkr7HAFyCV9tL+vAvmrdpLpkY6cgh2xXhX/pCcQMeerQKqjj/7/CCS7kNpPBdeOZpuU4S8mZ8NABmMQSVEgg9V6UTaROpBaEeWXUVL3iPIzntSKKD/LSa2I8jOb1IoEys5orUgkoRdlZ7RWpFZENa0XZROpA6kVUX4ZJf+LHjlXATJJPy39j6YXL8VC2aT6E8ScvwAnYZZsqyKAtQAAAABJRU5ErkJggg=="
        id="Clapperboard_svg__b"
        width={50}
        height={50}
      />
    </defs>
  </svg>
);
export default SvgClapperboard;
