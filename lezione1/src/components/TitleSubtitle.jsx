export const TitleSubtitle = ({
  children,
  subTitle,
  showSubTitle,
  isSubTitleShort,
}) => {
  const subTitleWithCheck = isSubTitleShort
    ? subTitle.substr(0, 10) + "..."
    : subTitle;

  return (
    <div>
      <h1>{children}</h1>
      {showSubTitle && <p>{subTitleWithCheck}</p>}
    </div>
  );
};
