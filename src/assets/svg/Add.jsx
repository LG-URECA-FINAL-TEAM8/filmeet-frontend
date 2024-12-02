const SvgAdd = ({ onClick, ...props }) => (
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
    <g clipPath="url(#Add_svg__a)">
      <path fill="url(#Add_svg__b)" d="M24 0H0v24h24z" />
    </g>
    <defs>
      <clipPath id="Add_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
      <pattern id="Add_svg__b" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#Add_svg__c" transform="scale(.02)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIAklEQVR4nO1Ze1BT2Rk/u+20zrptbWfamdqdcXb8q9Ppf/toq+4QcIHt2E47diq0ZUEIkodAEkAIEBDFbHklJvLQLqALFcUgD7MICQmSAEVdWHQUXQEjWBGy5HWv22273Zmv8508DA5oQoLtzvDNfHNz7z3n+87vfM+cS8g6rdM6hZ0A4EWn0/kqwzC/ZBgmm2VZBcuyTSzLdrMse4Vl2Xssyzo8DB723t/zjOn2zFGgDJTldDpfRdlkLenRo0c/YBgmk2VZHcuyn/ktMKzMMAzK7mUYJoNl2e+HDcDi4uK3WJZVMgzz75WUf/qpDaan7sPYR7fgknEUujrMcLpJByfrP1zC+Azf4Rgci3Nw7kpyXS7XF3a7XWW1Wl8OCYTL5fouwzDj/sJnZuagq90M8kNNwEuphF3RuRDx84yQGGXwuVVUJgJFHf46Hz58+InZbF69dRiGqfMKGzKPU2WPledBSqICxKIGkBW3w3sVRihTjUCZahQqa69DRe1NUNZPgvqUhTL+xmeVNdfoGBwrLzfSuSgDZf0qWuqTL0itguHB6z4wly9f1hJCvrFaIFYUMmgaB862TIjbfRjyCtqhVDkK1U2zUNN8P6xc3TQL8qOjIC3shPjflULkNhEMDV6jQKxWK0MIeS1oEHNzcy95d+OYsg2itktA1TgV9sWvxOrGaapTrdT4rLJ58+a4oIHMz89v9ApQKzQQtUMC+4v6QVp2BY5U34SqhmmobgqnNe6Don6KypaWX6G6IndIqG4/IEmEkK+FDEQoMz7B/ZBZYoLsI8OQV3YFZIoxKFZ+DCVHr0GJ6jqUHrsBpdU33XzsBn2G73AMjsU5OBdloCzhE/JXAPL1NQCythy5DsSP1i0iW3ctWI+RQGOkqOADiNwuBn6+/rllLH6+HjjbxVR32NJv2ZEWKjSB1wZ7M7pgX85FEBT0hX3xgoI+SM2+SHUkpGmAs00MZfIz4a8jXLEWEvnnqRLkd/nnISm9E5JFF4Cb1Q37DvRAWm4v8PL0wM/vo4yLQ/be47u0XB3sy+mB1KwP6VyU8e4Tcrli7drWEYHMCGlSnXsRGV2QuL8DEnjuBayKeRoqA2Vxs7qpbMH/siAKCvuAJ9UDL7eX7njagR5qodTsbsrUWtRiOjoGx+Kc9coeKK1XdtnaVfb4+Picr2T3G7VDAsqKsz4gi4uLj4aGhjj/d0AySnqh6P0aqOjKB5VBCDUmLr3ivez9WoiJPAA73xJDw1+0eExE12Kz2ViNRvPaqoAoK8+FHUh+TSOojQKoHUxekau0+0EsKaeHEXjC4gUzOzt7Nzo6+ntBA8k7cBI420SQIroAfGnobcrBRjXUmFOeCqLWxylQ8mf36U3DCa3PzTo6OuoIIS8G7VqRO9wtChaxRMF5CgpbFV6uLqh2BS2xHIj6vwnBcKuRXpcDk51dQd1s4uZduqaFhQXn1q1bfxI0EHQtLGBY3Pamd/pA+doKXhskCdshCat0ehckZyJfgBSR1sPYxrSDqo+/7M6b7rRQXaY7p5d9X2fIhHeicqC4oMFnFaVS+d4zrRJIsGOHitUa25UUsZa2GXvTOyBJ2AFJ+9up5bBvQsbfeaqqFV1oaPKc+yBw8tyKYwoPKiAmIgusVvcx6/Dw8CVCyCshAwmWMRuFAuRY6yEaK+aBjz3HtzMzhJA3njsQtfGx/2MsXPqkmboS8uTcKNWFV+8zfO8fM8cNYgqkpVnnTcX/IIS889yBYJ3wLgoDO5DPDIZbjY/jxJS2JHs5nc4vCSG7nzsQLHb+FhmcPAsj0x2Up+fdZ7zT89d8z/D9kiymk1Agba393sxlJ4Ts+crFyNGWEk+MjNOxFotlmhDym6cCwU9gDMP8Cye0NOupgD8kN4JQZlg1EGw7QgGSX1QJsZxssNns7lRtMukJITHkWcQwjNEdVHbIldRRMLHRhbAn4QRwJV1BA0k/qFsS8MHUkRpdJgVRInscW0VFRVhHnt13MQzzM5fL9R/3ZzAGei+OQGpSOXB+kUlBvR2RA7t2lcLuPSqI39sAifzTkJzRBvtytMCT9lAWFBo8/x57gJfXA5Ky4ytWduPtk8tWdhwvFpXD229JYGpy1hcfmzZtSiCE/JAEQmNjY39yOByf+2eSu9N/h3NnDFBafAoS4+VUQTCf2oTZpQH3WjXmFDgor6Tz/vpBr28N9fX1JzzxEfhXYLlc/vrVq1cvYbpbKU3O3HsAH12doMUKLYffGVtbDEs+hmrOGuFw8Sm6KJGoDGr1oqcD0WdSS+D4cvlpny6LxXJ3w4YNfySEbCWroJeioqJiGxoajk9MTIw7HI5/BlIHluPmU73UiujzUlkFqM6UQK1ODLUDaVCnF9HshIEdw8mi4/wtYbVanREREUJPkL9AQqBv4k5s3LgxMi4uTqRWq6u1Wm3byMiI6fbt2zcsFovlwYMH8/Pz84s2m+0zh8PxBS7Abrd/7nQ6abzRejF1Hw4VnaRglnO/GE4WDWxvTHhBcLncfELIb3FjSRgJd+TbhJAthJCfEkLeJIREenZrFyHk157K+3tCSHxsbCx/amrqjr91MCNiXdC09rvdr7Wf3ntTrL87eSyBIAL7U7WWtHPnzu90dnaq0WKBuOHCwoIdA9sTEzHhtkSo9MKWLVt+rFAoDg8MDOgsFss9dBun0/nlwsKCAyv24OBgH9YJT4rF7ISBHVJMrCVh6vyRp6jFetwGeydcOO7+65468cwU+1+69TpANk+aHgAAAABJRU5ErkJggg=="
        id="Add_svg__c"
        width={50}
        height={50}
      />
    </defs>
  </svg>
);
export default SvgAdd;
