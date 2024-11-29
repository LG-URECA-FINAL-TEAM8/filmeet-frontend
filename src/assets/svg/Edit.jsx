const SvgEdit = ({ onClick, ...props }) => (
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
    <g clipPath="url(#Edit_svg__a)">
      <path
        fill="#4E7FFF"
        d="M2 16.892h1.414l9.314-9.313-1.414-1.414L2 15.478zm16 2H0V14.65L13.435 1.215a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.414L6.243 16.892H18zM12.728 4.75l1.414 1.415 1.414-1.415-1.414-1.414z"
      />
    </g>
    <defs>
      <clipPath id="Edit_svg__a">
        <path fill="#fff" d="M0 0h18v19H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEdit;