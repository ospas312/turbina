function InstagramIcon ({
  className = "",
  width="100%",
  height="100%",
  fill="#fff"
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 332 332"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.729 300.171c.564.07 1.146.185 1.719.264h215.104c1.401-.229 2.802-.432 4.186-.731 10.98-2.335 19.951-11.492 22.102-22.534.22-1.207.396-2.406.59-3.604V58.434c-.185-1.172-.353-2.362-.573-3.534-2.362-12.047-12.302-21.397-24.499-23.071-.511-.062-.996-.176-1.498-.264H58.139c-1.295.238-2.609.414-3.886.705-11.915 2.714-20.727 12.302-22.428 24.375-.07.502-.176 1.005-.255 1.507v215.712c.247 1.357.44 2.741.749 4.098 2.635 11.651 12.575 20.684 24.41 22.209zM224.123 64.348c0-6.089 4.829-10.945 10.892-10.954 8.469-.009 16.938 0 25.406 0 6.072.009 10.892 4.847 10.892 10.936v25.468c0 5.702-4.635 10.584-10.328 10.725-4.433.106-8.865.018-13.289.018v.053c-4.08 0-8.169.009-12.249.009-5.023-.026-9.13-2.776-10.654-7.253a12.308 12.308 0 01-.643-3.754c-.062-8.416-.036-16.832-.027-25.248zm-58.127 47.164c30.509-.018 55.114 25.186 54.452 55.677-.643 29.584-25.265 53.906-55.704 53.254-29.258-.626-53.659-24.781-53.228-55.272.415-29.679 24.658-53.676 54.48-53.659zM60.651 141.307v-.723h25.6c-6.662 22.789-4.847 44.75 6.512 65.662 7.632 14.038 18.559 24.922 32.474 32.721 27.539 15.457 61.705 13.906 87.649-3.772 10.002-6.812 18.189-15.387 24.49-25.715s10.178-21.503 11.597-33.514c1.419-12.011.308-23.794-3.313-35.373h25.662v.828c0 39.727.009 79.48 0 119.215 0 5.772-4.926 10.681-10.707 10.681-63.097.009-126.186.009-189.284 0-5.728 0-10.681-4.926-10.681-10.646-.008-39.787.001-79.575.001-119.364z"
        fill={fill}
      />
    </svg>
  )
}

export default InstagramIcon;
