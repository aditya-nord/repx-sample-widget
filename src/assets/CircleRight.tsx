import * as React from "react";
import { SVGProps } from "react";
const SvgCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <circle cx={19.918} cy={19.625} r={15.182} fill="#61626A" />
    <path
      fill="#61626A"
      fillRule="evenodd"
      d="M.94 19.342c0 10.325 8.376 18.695 18.708 18.695 10.332 0 18.707-8.37 18.707-18.695C38.355 9.017 29.98.647 19.648.647S.941 9.017.941 19.342Zm24.01 7.44h3.63c.763 0 1.14 0 1.37-.147.248-.161.4-.427.418-.721.013-.271-.175-.602-.552-1.263L20.852 8.86c-.382-.671-.575-1.006-.818-1.13a.925.925 0 0 0-.837 0c-.243.124-.436.459-.818 1.13l-1.843 3.214-.009.017c-.412.719-.62 1.084-.712 1.467a2.725 2.725 0 0 0 0 1.276c.092.386.299.753.717 1.484l4.709 8.318.012.021c.414.726.625 1.093.916 1.37.317.304.698.524 1.117.648.381.106.808.106 1.663.106Zm-9.17 0H10.58c-.768 0-1.154 0-1.384-.152a.92.92 0 0 1-.418-.725c-.013-.262.171-.58.532-1.203l.038-.065 2.606-4.455.03-.05c.365-.619.55-.931.788-1.052a.915.915 0 0 1 .831 0c.24.124.432.45.814 1.107l2.596 4.455.01.015c.38.656.57.983.556 1.252a.93.93 0 0 1-.418.726c-.226.147-.612.147-1.38.147Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleRight;
