const SvgLock = ({onClick, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    width= "1.5rem"
    height= "1.5rem"
    onClick={onClick}
    style=
    {{ 
      cursor: 'pointer',
      ...props.style
    }}
    {...props}>
    <path
      fill="#424242"
      d="M12 2C9.25 2 7 4.25 7 7v2h2V7c0-1.65 1.35-3 3-3s3 1.35 3 3v2h2V7c0-2.75-2.25-5-5-5"
    />
    <path
      fill="#FB8C00"
      d="M18 22H6c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2"
    />
    <path fill="#C76E00" d="M12 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
);
export default SvgLock;
