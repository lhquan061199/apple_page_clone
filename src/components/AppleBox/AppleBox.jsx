import classNames from "classnames/bind";
import styles from "./AppleBox.module.scss";
const cx = classNames.bind(styles);

function AppleBox({ device, devices }) {
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("box")}>
          <div className={cx("box-header")}>Trong hộp có gì</div>
          <div className={cx("box-img")}>
            <div className={cx("pos-1")}>
              <img src={device.option.selected_color.media.pos_2} alt="" />
              <p>iPhone 14 Pro</p>
            </div>
            <div className={cx("pos-2")}>
              <img src={device.option.selected_color.media.pos_3} alt="" />
              <p>Cáp USB-C sang Lightning</p>
            </div>
          </div>
          <div className={cx("target")}>
            <div className={cx("target-content")}>
              <p>Các mục tiêu về môi trường của chúng tôi.</p>
              <p>
                Là một phần trong nỗ lực của chúng tôi nhằm đạt được trạng thái
                trung hòa carbon vào năm 2030, iPhone 14 Pro và iPhone 14 Pro
                Max không đi kèm bộ tiếp hợp nguồn hoặc EarPods. Trong hộp có
                cáp chuyển đổi từ USB-C sang Lightning hỗ trợ sạc nhanh và tương
                thích với bộ tiếp hợp nguồn USB‑C cũng như cổng máy tính.
              </p>
              <p>
                Chúng tôi khuyến khích bạn sử dụng lại cáp chuyển từ USB‑A sang
                Lightning, bộ tiếp hợp nguồn và tai nghe hiện tại của bạn tương
                thích với các phiên bản iPhone này. Nhưng nếu cần bất kỳ bộ tiếp
                hợp nguồn hoặc tai nghe mới nào của Apple, bạn đều có thể mua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppleBox;
