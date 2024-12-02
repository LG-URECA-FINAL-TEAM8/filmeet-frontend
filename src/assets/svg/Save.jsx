const SvgSave = ({ onClick, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 23 23"
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
    <g clipPath="url(#Save_svg__a)">
      <path fill="url(#Save_svg__b)" d="M24 0H0v24h24z" />
    </g>
    <defs>
      <clipPath id="Save_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
      <pattern id="Save_svg__b" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#Save_svg__c" transform="scale(.02)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVR4nO2Z30taYRzGvV9/R7BVruW52E100WVXEbupdtFu2m72NwzWkH5oNznf2MVAEHfRVLJBIZnlTmFFiRjKeyYMxwaGh6PH/JGp32EjIYuZeN7jWfs+8Lk+58PzPrwcjk6HwWAw9yKclS4YrIK3hn4+SHve+cVGRi3bstkVKLXK0tqeZPkSFBt5YQ+Hrp5pINSmt4UetC9C6BZHBKihn+Xh4ZuNG0ySTXD7eMV4+Sl8+bw6Vhp4tBTp0pzIxKvXMDY1XWfZ4fy7CFFAhoXIk8Fh6B54Wsf8wdZchLQpoykR0oaM5kRITUaw3w8RQrdQhMNGeO0drb7Z3Vs3Mv7ep+g9Mu1gLNJvPrpVZGjOC85NZW51l4+HkY9RtiIcofDYdAC9xgD0Gneu8YwEwPj5K5hcd4EH82oQFtf2rzHvOYTn9kgTCUVEtAJFEeh8CwI2chncCNHw0ZrxJ6FcqYLaKVeq8NafVE7EE8tAp+KJZVCkaSMpKQMn8e9MSEkZ9RpJihIcx74xISlK6omULsqQKxSZULoo40ZabiQtn0H8xy8mpOUz3EjLjRSK5yCmZSYUiue4kZYbyeby8PM0xYRsLo8b+X8bUTMeJUXc0c6JuKMKikyuJGBdkMEbz6rKuiDDxEoCv9lv/AzVCpyVLvx5OwwGg9H94/kNIrZaHggL3AoAAAAASUVORK5CYII="
        id="Save_svg__c"
        width={50}
        height={50}
      />
    </defs>
  </svg>
);
export default SvgSave;
