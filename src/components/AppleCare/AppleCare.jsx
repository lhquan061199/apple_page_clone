import classNames from "classnames/bind";
import styles from "./AppleCare.module.scss";
const cx = classNames.bind(styles);

function AppleCare({ showAppleCare, finalCost, device }) {
  return (
    <div className={cx("wrapper", { showAppleCare: showAppleCare })}>
      <div className="col-4">
        <p className={cx("title")}>{device.name} mới của bạn</p>
        <p className={cx("title")}>theo cách bạn muốn.</p>
        <img src={device.option.selected_color.media.pos_1} alt="" />
      </div>
      <div className="col-4">
        <p>
          {device.name} {device.option.selected_storage.capacity}{" "}
          {device.option.selected_color.type}
        </p>
        <p>
          Tổng cộng {finalCost} hoặc {parseFloat(finalCost) / 24}/tháng cho 24
          tháng*
        </p>
        <p>
          Ở mức lãi suất 1.67%, sau khi thanh toán lần đầu 20% là xxxxxxxxxđ
        </p>
        <p>Bao gồm thuế GTGT khoảng xxxxxxxxxđ.*</p>
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default AppleCare;
