import classNames from "classnames/bind";
import styles from "./Ribbon.module.scss";

const cx = classNames.bind(styles);

function Ribbon() {
  return (
    <div className={cx("ribbon")}>
      Thanh toán với lãi xuất thấp, thời hạn lên đến 24 tháng và chỉ cần trả
      trước 20% khi bạn chọn trả góp hàng tháng với MoMo.*
      <span className={cx("sub-text")}>
        <a>Tìm hiểu thêm </a>
      </span>
    </div>
  );
}

export default Ribbon;
