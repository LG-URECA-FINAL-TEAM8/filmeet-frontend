const SvgDelete = ({ onClick, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    width= "1.5rem"
    height= "1.5rem"
    onClick={onClick}
    style=
    {{ 
      cursor: 'pointer', 
      ...props.style 
    }}
    {...props}
  >
    <path
      fill="#FF4B4B"
      d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zm-9 3h2v6H9zm4 0h2v6h-2zM9 4v2h6V4z"
    />
  </svg>
);

export default SvgDelete;
