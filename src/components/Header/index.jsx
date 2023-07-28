import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Navbar from "../Navbar";

import {
  faAppleAlt,
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Header({ finalCost }) {
  return (
    <>
      <div className={cx("hide-header", "active")}>
        <div className={cx("top-hide-header")}>
          <div>iPhone 14 Pro</div>
          <div className={cx("sum-pay")}>
            Tổng cộng {finalCost} hoặc {parseFloat(finalCost) / 24}/tháng cho 24
            tháng*
          </div>
        </div>
        <div className={cx("hide-header-line")}></div>
        <div className={cx("bottom-hide-header")}>
          <div>
            Giao đến: <a>Hà Nội</a>
          </div>
          <div>Th 3 25/07/2023 (Miễn phí)</div>
        </div>
        <div className={cx("hide-header-line")}></div>
      </div>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <a href="./">
              <FontAwesomeIcon
                className={cx("logo-color")}
                icon={faAppleAlt}
              ></FontAwesomeIcon>
            </a>
          </div>

          <Navbar></Navbar>

          <div className={cx("logo")}>
            <FontAwesomeIcon
              className={cx("logo-color")}
              icon={faMagnifyingGlass}
            ></FontAwesomeIcon>
          </div>
          <div className={cx("logo")}>
            <FontAwesomeIcon
              className={cx("logo-color")}
              icon={faShoppingBag}
            ></FontAwesomeIcon>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
