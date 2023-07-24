import classNames from "classnames/bind";
import styles from "./AppleTrade.module.scss";
import { useState } from "react";

import Modal1 from "../Modal/Modal1";
const cx = classNames.bind(styles);

function AppleTrade({ onClick, showAppleCare }) {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);

  const handleClick = () => {
    setClick(true);
    setClick1(false);
  };

  const handleClick1 = () => {
    setClick1(true);
    setClick(false);
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("trade-in")}>
          {/* <div className="col-8"> */}
          <div className={cx("trade-in-left")}>
            <div className="fs-4 mb-3">
              <span className="fw-bold">Apple Trade In.</span>Nhận
              1.000.000đ–19.100.000đ điểm tín dụng để sử dụng khi mua iPhone
              mới.**
            </div>
            <div className={cx("buttons")}>
              <div
                className={cx("btn", { active: click })}
                onClick={handleClick}
              >
                <div className={cx("inner-btn")}>
                  <p>Chọn iPhone</p>
                  <p>
                    Trả lời một số câu hỏi để nhận được giá trị ước tính của bạn
                  </p>
                </div>
              </div>
              <div
                className={cx("btn", { active: click1 })}
                onClick={handleClick1}
              >
                <p>Không đổi cũ lấy mới</p>
              </div>
            </div>
            <div className={cx("btn-1", { active: click })}>
              <div className={cx("btn-1-left")}>
                <div>Bạn sử dụng phiên bản nào?</div>
                <div>dsfsfsfsfsfsfsfsfsfsfs</div>
              </div>
              <div className={cx("btn-1-right")}>
                <p>
                  Trên iPhone hãy vào mục Cài đặt Tên của bạn. Cuộn xuống để xem
                  phiên bản
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-4"> */}
          <div className={cx("trade-in-right")}>
            <Modal1></Modal1>
          </div>
        </div>
        <div className={cx("btn-2", { active: click1 })}>
          <div className="fs-4 mb-3 mt-5">
            <span className="fw-bold">Gói bảo hành AppleCare++.</span>Bảo vệ
            iPhone mới của bạn
          </div>

          <div className={cx("apple-care")}>
            <div className={cx("apple-care-left")}>
              <div className={cx("apple-care-add")}>
                <p>AppleCare+</p>
                <p>5.299.000đ hoặc 216.000đ/tháng cho 24 tháng*</p>
                <p>
                  Ở mức lãi suất 1.67% sau khi thanh toán lần đầu 20% là
                  1.060.000đ
                </p>
                <div className={cx("line")}></div>
                <ul>
                  <li>
                    Nay đã có dịch vụ sửa chữa không hạn chế cho trường hợp hư
                    hỏng do sự cố bất ngờ
                  </li>
                  <li>
                    Dịch vụ sửa chữa được Apple chứng nhận sử dụng linh kiện
                    Apple chính hãng
                  </li>
                  <li>
                    Dịch Vụ Thay Thế Cấp Tốc - Chúng tôi sẽ gừi bạn một thiết bị
                    thay thế để bạn không phải chờ sửa chữa
                  </li>
                  <li>Ưu tiên tiếp cận các chuyên gia Apple</li>
                </ul>
              </div>

              <div
                className={cx("apple-care-not", {
                  showAppleCare: showAppleCare,
                })}
                onClick={onClick}
              >
                <p>Không có bảo hành AppleCare+</p>
              </div>
            </div>
            <div className={cx("apple-care-right")}>
              <Modal1></Modal1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppleTrade;
