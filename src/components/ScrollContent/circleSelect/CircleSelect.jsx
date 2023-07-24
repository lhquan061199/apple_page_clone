import classNames from "classnames/bind";
import styles from "./CircleSelect.module.scss";
const cx = classNames.bind(styles);

function CircleSelect({ type, active = false, onClick = () => {} }) {
  return (
    <div className={cx("container", { active: active })} onClick={onClick}>
      <div className={cx("inner", `${type}`)}></div>
    </div>
  );
}

export default CircleSelect;
