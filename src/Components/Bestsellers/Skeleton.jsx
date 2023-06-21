import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={263}
    height={400}
    viewBox="0 0 263 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="81" y="52" rx="0" ry="0" width="140" height="190" />
    <rect x="33" y="296" rx="0" ry="0" width="97" height="9" />
    <rect x="33" y="322" rx="0" ry="0" width="71" height="4" />
    <rect x="34" y="344" rx="0" ry="0" width="71" height="9" />
  </ContentLoader>
);

export default Skeleton;
