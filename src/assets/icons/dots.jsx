const Dots = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.125 11.9766C4.125 12.1489 4.15895 12.3196 4.22491 12.4788C4.29087 12.6381 4.38755 12.7828 4.50942 12.9046C4.6313 13.0265 4.77599 13.1232 4.93523 13.1892C5.09447 13.2551 5.26514 13.2891 5.4375 13.2891C5.60986 13.2891 5.78053 13.2551 5.93977 13.1892C6.09901 13.1232 6.2437 13.0265 6.36558 12.9046C6.48745 12.7828 6.58413 12.6381 6.65009 12.4788C6.71605 12.3196 6.75 12.1489 6.75 11.9766C6.75 11.8042 6.71605 11.6335 6.65009 11.4743C6.58413 11.3151 6.48745 11.1704 6.36558 11.0485C6.2437 10.9266 6.09901 10.8299 5.93977 10.764C5.78053 10.698 5.60986 10.6641 5.4375 10.6641C5.26514 10.6641 5.09447 10.698 4.93523 10.764C4.77599 10.8299 4.6313 10.9266 4.50942 11.0485C4.38755 11.1704 4.29087 11.3151 4.22491 11.4743C4.15895 11.6335 4.125 11.8042 4.125 11.9766ZM10.6875 11.9766C10.6875 12.3247 10.8258 12.6585 11.0719 12.9046C11.3181 13.1508 11.6519 13.2891 12 13.2891C12.3481 13.2891 12.6819 13.1508 12.9281 12.9046C13.1742 12.6585 13.3125 12.3247 13.3125 11.9766C13.3125 11.6285 13.1742 11.2946 12.9281 11.0485C12.6819 10.8023 12.3481 10.6641 12 10.6641C11.6519 10.6641 11.3181 10.8023 11.0719 11.0485C10.8258 11.2946 10.6875 11.6285 10.6875 11.9766ZM17.25 11.9766C17.25 12.3247 17.3883 12.6585 17.6344 12.9046C17.8806 13.1508 18.2144 13.2891 18.5625 13.2891C18.9106 13.2891 19.2444 13.1508 19.4906 12.9046C19.7367 12.6585 19.875 12.3247 19.875 11.9766C19.875 11.6285 19.7367 11.2946 19.4906 11.0485C19.2444 10.8023 18.9106 10.6641 18.5625 10.6641C18.2144 10.6641 17.8806 10.8023 17.6344 11.0485C17.3883 11.2946 17.25 11.6285 17.25 11.9766Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Dots;
