import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Compare.module.scss";
const cx = classNames.bind(styles);

const ip14Pro = require("../../assets/images/products/14pro.jpg");
const ip14 = require("../../assets/images/products/14.jpg");
const ip13 = require("../../assets/images/products/13.jpg");
const ipSe = require("../../assets/images/products/SE.jpg");
const color14p = require("../../assets/images/products/imgcolor/colorip14p.png");
const color14 = require("../../assets/images/products/imgcolor/colorip14.png");
const color13 = require("../../assets/images/products/imgcolor/colorip13.png");
const colorse = require("../../assets/images/products/imgcolor/coloripse.png");

const iconFeatureScreen = require("../../assets/images/products/feature/dynamic.jpg");
const iconSoS = require("../../assets/images/products/feature/sos.png");
const iconCamera = require("../../assets/images/products/feature/camera14pro.png");
const iconAction = require("../../assets/images/products/feature/action.png");
const iconPin = require("../../assets/images/products/feature/pin.png");
const iconChip14P = require("../../assets/images/products/feature/camera14pro.png");
const iconFaceID = require("../../assets/images/products/feature/faceid14p-14-13.png");
const iconTouchID = require("../../assets/images/products/feature/touchID.png");
const iconNetwork = require("../../assets/images/products/feature/network.png");

const dataDevices = [
  {
    imgDevice: ip14Pro,
    name: "iPhone 14 Pro",
    title: "Một iPhone cực đỉnh.",
    price: "Từ 27.999.000đ",
    path: "/iphone-14pro",
    colors: color14p,
    new: true,
    screen: {
      size: "6.7 hoặc 6.1",
      type: [
        "Màn hình Super Retina",
        "XDR Công nghệ ProMotion",
        "Màn hình Luôn Bật",
      ],
    },
    feature: [
      {
        img: iconFeatureScreen,
        intro: ["Dynamic Island", "Một cách mới để tương tác với iPhone"],
      },
      {
        img: iconSoS,
        intro: ["SOS Khẩn Cấp", "Phát Hiện Va Chạm"],
      },
      {
        img: iconCamera,
        intro: [
          "Hệ thống camera Pro",
          "Chính 48MP | Ultra Wide",
          "Telephoto",
          "Photonic Engine cho màu sắc và chi tiết ấn tượng",
          "Camera trước TrueDepth có khả năng tự động lấy nét",
        ],
      },
      {
        img: iconAction,
        intro: ["Chế độ Hành Động giúp quay video cầm tay không bị rung nhòe"],
      },
      {
        img: iconPin,
        intro: ["Thời gian xem", "video lên đến 29 giờ"],
      },
      {
        img: iconChip14P,
        intro: ["Chip A16 Bionic"],
      },
      {
        img: iconFaceID,
        intro: ["Face ID"],
      },
      {
        img: iconNetwork,
        intro: ["Mạng di động 5G siêu nhanh"],
      },
    ],
  },
  {
    imgDevice: ip14,
    name: "iPhone 14",
    title: "Siêu mạnh mẽ trên mọi mặt.",
    price: "Từ 22.499.000đ",
    path: "/iphone-14",
    colors: color14,
    new: true,
    screen: {
      size: "6.7 hoặc 6.1",
      type: ["Màn hình Super Retina"],
    },
    feature: [
      {
        intro: ["-"],
      },
      {
        img: iconSoS,
        intro: ["SOS Khẩn Cấp", "Phát Hiện Va Chạm"],
      },
      {
        img: iconCamera,
        intro: [
          "Hệ thống camera kép tiên tiến",
          "Chính 12MP | Ultra Wide",
          "—",
          "Photonic Engine cho màu sắc và chi tiết ấn tượng",
          "Camera trước TrueDepth có khả năng tự động lấy nét",
        ],
      },
      {
        img: iconAction,
        intro: ["Chế độ Hành Động giúp quay video cầm tay không bị rung nhòe"],
      },
      {
        img: iconPin,
        intro: ["Thời gian xem", "video lên đến 29 giờ"],
      },
      {
        img: iconChip14P,
        intro: ["Chip A15 Bionic", "với CPU 5 lõi"],
      },
      {
        img: iconFaceID,
        intro: ["Face ID"],
      },
      {
        img: iconNetwork,
        intro: ["Mạng di động 5G siêu nhanh"],
      },
    ],
  },
  {
    imgDevice: ip13,
    name: "iPhone 13",
    title: "Luôn tuyệt vời như thế.",
    price: "Từ 16.849.000đ",
    path: "/iphone-13",
    colors: color13,
    new: true,
    screen: {
      size: "6.1″ hoặc 5.4″",
      type: ["Màn hình Super Retina"],
    },
    feature: [
      {
        intro: ["-"],
      },
      {
        img: iconSoS,
        intro: ["SOS Khẩn Cấp", "-"],
      },
      {
        img: iconCamera,
        intro: [
          "Hệ thống camera kép",
          "Chính 12MP | Ultra Wide",
          "Telephoto",
          "Photonic Engine cho màu sắc và chi tiết ấn tượng",
          "Camera trước TrueDepth có khả năng tự động lấy nét",
        ],
      },
      {
        intro: ["-"],
      },
      {
        img: iconPin,
        intro: ["Thời gian xem", "Thời gian xem video lên đến 19 giờ"],
      },
      {
        img: iconChip14P,
        intro: ["Chip A15 Bionic", "với GPU 4 lõi"],
      },
      {
        img: iconFaceID,
        intro: ["Face ID"],
      },
      {
        img: iconNetwork,
        intro: ["Mạng di động 5G siêu nhanh"],
      },
    ],
  },
  {
    imgDevice: ip13,
    name: "iPhone SE",
    title: "Thực sự mạnh mẽ, Thực sự giá trị",
    price: "Từ 11.999.000đ",
    path: "/iphone-SE",
    colors: color13,
    new: true,
    screen: {
      size: "4.7",
      type: ["Màn hình Retina HD"],
    },
    feature: [
      {
        intro: ["-"],
      },
      {
        img: iconSoS,
        intro: ["SOS Khẩn Cấp", "-"],
      },
      {
        img: iconCamera,
        intro: [
          "Camera tiên tiến",
          "Chính 12MP",
          "Telephoto",
          "Photonic Engine cho màu sắc và chi tiết ấn tượng",
          "Camera trước TrueDepth có khả năng tự động lấy nét",
        ],
      },
      {
        intro: ["-"],
      },
      {
        img: iconPin,
        intro: ["Thời gian xem", "video lên đến 15 giờ"],
      },
      {
        img: iconChip14P,
        intro: ["Chip A15 Bionic", "với GPU 4 lõi"],
      },
      {
        img: iconTouchID,
        intro: ["Touch ID"],
      },
      {
        img: iconNetwork,
        intro: ["Mạng di động 5G"],
      },
    ],
  },
];

function Compare() {
  return (
    <>
      <div className={cx("header")}>
        <h2>iPhone nào phù hợp với bạn?</h2>
      </div>
      <div className={cx("wrapper")}>
        {dataDevices.map((device, index) => (
          <div key={index} className={cx("type")}>
            <Link to={device.path}>
              <div className="text-center">
                <div className={cx("img-device")}>
                  <img src={device.imgDevice} alt="" />
                </div>
                <div className={cx("colors")}>
                  <img src={device.colors} alt="" />
                </div>
                <div className={cx("name")}>{device.name}</div>
                <div className={cx("title")}>{device.title}</div>
                <div className={cx("price")}>{device.price}</div>
              </div>
            </Link>
            <div className={cx("line")}></div>
            <div className={cx("screen", "feature")}>
              <div className={cx("size")}>{device.screen.size}</div>
              <div className={cx("type-intro")}>
                {device.screen.type.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div className={cx("features")}>
              {device.feature.map((item, index) => (
                <div key={index} className={cx("feature")}>
                  <div className={cx("size")}>
                    {item.img ? (
                      <img src={item.img}></img>
                    ) : (
                      <div className={cx("none")}></div>
                    )}
                  </div>
                  <div className={cx("type-intro")}>
                    {item.intro.map((item, index) => (
                      <div className={cx("intro")} key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Compare;
