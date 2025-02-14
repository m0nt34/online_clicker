const ArrowUp = ({ num = 1 }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon
        points="50,6 92,60 72,60 72,82 28,82 28,60 8,60"
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
      {num == 1 ? null : num <= 3 ? (
        <line x1="28" y1="89" x2="72" y2="89" strokeWidth={3} />
      ) : (
        <>
          <line x1="28" y1="89" x2="72" y2="89" strokeWidth={3} />
          <line x1="28" y1="96" x2="72" y2="96" strokeWidth={3} />
        </>
      )}

      <text
        x="50"
        y="50"
        fontSize="22"
        fill="white"
        fontFamily="Arial"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {num.toString()}
      </text>
    </svg>
  );
};

export default ArrowUp;
