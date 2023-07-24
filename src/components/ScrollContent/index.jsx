import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

import Modal1 from "../Modal/Modal1";
import SwiperCom from "./swiper";
import ButtonSelect from "./ButtonSelect/ButtonSelect";
import CircleSelect from "./circleSelect/CircleSelect";

import classNames from "classnames/bind";
import styles from "./ScrollContent.module.scss";
const cx = classNames.bind(styles);

function ScrollContent({
  devices,
  device,
  handleClick,
  handleColorSelected,
  handleStorageSelected,
  finalCost,
}) {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <div className={cx("left-content")}>
            <span className={cx("sub-text")}>Mới</span>
            <h1 className={cx("header-title")}>Mua iPhone 14 Pro</h1>
            <span className={cx("header-receipt")}>
              Tổng cộng {finalCost}đ hoặc
              {parseFloat(finalCost) / 24}
              đ/tháng cho 24 tháng
            </span>
            <div className={cx("hearder-pay")}>
              Trả góp theo tháng với lãi suất 1.67%, sau khi thanh toán lần đầu
              20%.
            </div>
          </div>

          <div className={cx("right-content")}>
            <Modal1></Modal1>
          </div>
        </div>

        <div className={cx("select-content")}>
          <div className={cx("left-select-content")}>
            <SwiperCom
              imgPreview={device.option.selected_color.previewImg}
            ></SwiperCom>
          </div>
          {/* <div className="col-3 h-100 mt-5"> */}
          <div className={cx("right-select-content")}>
            <div className="fs-4 mb-3">
              <span className="fw-bold">Phiên bản.</span>Mẫu nào phù hợp nhất
              với bạn?
            </div>
            {devices.map((deviceItem) => (
              <ButtonSelect
                key={deviceItem.model}
                type={deviceItem.name}
                price={deviceItem.originalCost}
                active={deviceItem.model === device.model}
                onClick={() => {
                  handleClick(deviceItem);
                }}
              ></ButtonSelect>
            ))}
            <div className="p-3 fs-6">
              Trả góp theo tháng với lãi suất 1.67%, sau khi thanh toán lần đầu
              20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.
            </div>
            <Modal1></Modal1>
            <div className="fs-4 mb-3 mt-5">
              <span className="fw-bold">Màu.</span>Chọn màu bạn yêu thích
            </div>
            <div>
              <p>Màu - {device.option.selected_color.subType} </p>
              <div className="d-flex justify-content-between">
                {device.option.color.map((color, index) => (
                  <CircleSelect
                    key={index}
                    type={color.type}
                    additionalFee={color.additionalFee}
                    previewImg={color.previewImg}
                    media={color.media}
                    active={device.option.selected_color.type === color.type}
                    onClick={() =>
                      handleColorSelected(color, color.additionalFee)
                    }
                  ></CircleSelect>
                ))}
              </div>
            </div>
            <div className="fs-4 mb-3 mt-5">
              <span className="fw-bold">Dung lượng lưu trữ.</span>Bạn cần bao
              nhiêu dung lượng
            </div>

            {device.option.storage.map((storage, index) => (
              <ButtonSelect
                price={device.originalCost}
                key={index}
                type={storage.capacity}
                additionalFee={storage.additionalFee}
                addedColorFee={device.option.added_colorFee}
                active={
                  device.option.selected_storage.capacity === storage.capacity
                }
                onClick={() => {
                  handleStorageSelected(storage);
                }}
              ></ButtonSelect>
            ))}

            <div className="p-3 fs-6">
              Trả góp theo tháng với lãi suất 1.67%, sau khi thanh toán lần đầu
              20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.
            </div>
            <Modal1></Modal1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollContent;
