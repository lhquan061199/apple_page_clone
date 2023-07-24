import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function ButtonSelect({
  type,
  price,
  additionalFee = 0,
  addedColorFee = 0,
  screen = false,
  active = false,
  onClick = () => {},
}) {
  let sumPrice = (price + additionalFee + addedColorFee).toLocaleString();
  return (
    <div className={cx("wrapper", { active: active })} onClick={onClick}>
      <div className={cx("left")}>
        <div>
          <div className={cx("type")}>{type}</div>
          {screen ? (
            <span className={cx("screen")}>{`Màn hình ${screen} inch`}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={cx("right")}>
        {`Từ ${sumPrice}đ hoặc ${parseInt(
          (price + additionalFee + addedColorFee) / 24
        ).toLocaleString()}đ/tháng trong 24 tháng`}
      </div>
    </div>
  );
}

export default ButtonSelect;
