import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const footerShopping = [
  {
    title: "Cửa hàng",
    path: "/",
  },
  {
    title: "Mac",
    path: "/",
  },
  {
    title: "Ipad",
    path: "/",
  },
  {
    title: "Iphone",
    path: "/",
  },
  {
    title: "Watch",
    path: "/",
  },
  {
    title: "AirPods",
    path: "/",
  },
  {
    title: "TV & Nhà",
    path: "/",
  },
  {
    title: "AirTag",
    path: "/",
  },
  {
    title: "Phụ Kiện",
    path: "/",
  },
];

const footerWallet = [
  {
    title: "Ví",
    path: "/",
  },
];

const footerAccount = [
  {
    title: "Quản Lý ID Apple của Bạn",
    path: "/",
  },
  {
    title: "Tài Khoản Apple Store",
    path: "/",
  },
  {
    title: "iCloud.com",
    path: "/",
  },
];

const footerIntertainment = [
  {
    title: "Apple One",
    path: "/",
  },
  {
    title: "Apple TV+",
    path: "/",
  },
  {
    title: "Apple Music",
    path: "/",
  },
  {
    title: "Apple Arcade",
    path: "/",
  },
  {
    title: "Apple Podcasts",
    path: "/",
  },
  {
    title: "Apple Books",
    path: "/",
  },
];

const footerStore = [
  {
    title: "Ứng Dụng Apple Store",
    path: "/",
  },
  {
    title: "Tài Chính",
    path: "/",
  },
  {
    title: "Apple Trade In",
    path: "/",
  },
  {
    title: "Tình Trạng Đơn Hàng",
    path: "/",
  },
  {
    title: "Hỗ Trợ Mua Hàng",
    path: "/",
  },
];

const footerForBusiness = [
  {
    title: "Apple và Doanh Nghiệp",
    path: "/",
  },
  {
    title: "Mua Sắm Cho Doanh Nghiệp",
    path: "/",
  },
];

const footerForEducation = [
  {
    title: "Apple và Giáo Dục",
    path: "/",
  },
  {
    title: "Mua Hàng Cho Bậc Đại Học",
    path: "/",
  },
];

const footerForHealth = [
  {
    title: "Apple trong Chăm Sóc Sức Khỏe",
    path: "/",
  },
  {
    title: "Sức khỏe trên Apple Watch",
    path: "/",
  },
];

const footerValueOfApple = [
  {
    title: "Trợ Năng",
    path: "/",
  },
  {
    title: "Môi Trường",
    path: "/",
  },
  {
    title: "Quyền Riêng Tư",
    path: "/",
  },
  {
    title: "Trách Nhiệm Nhà Cung Cấp",
    path: "/",
  },
];

const footerAboutApple = [
  {
    title: "Newsroom",
    path: "/",
  },
  {
    title: "Lãnh Đạo Của Apple",
    path: "/",
  },
  {
    title: "Nhà Đầu Tư",
    path: "/",
  },
  {
    title: "Đạo Đức & Quy Tắc",
    path: "/",
  },
  {
    title: "Sự Kiện",
    path: "/",
  },
  {
    title: "Liên Hệ Apple",
    path: "/",
  },
];

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("inner")}>
        <p>
          Giá hiển thị đã bao gồm tất cả các khoản thuế. Giao hàng miễn phí cho
          tất cả đơn hàng.
        </p>
        <p>
          * Chương trình Trả Góp Hàng Tháng Với MoMo do đối tác tín dụng cung
          cấp qua ứng dụng MoMo của Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến
          (“MoMo”) chứ không phải Apple. Chỉ cư dân Việt Nam đủ điều kiện mới có
          thể mua sản phẩm đủ điều kiện qua chương trình này. Tất cả sản phẩm
          được mua qua hình thức Trả Góp Hàng Tháng Với MoMo đều cần có tài
          khoản ví điện tử MoMo và phải được đối tác tín dụng của MoMo phê
          duyệt. Nếu bạn có câu hỏi về điều kiện tín dụng của mình, vui lòng
          liên hệ với MoMo để nhận câu trả lời từ đối tác tín dụng của MoMo.
          Ngoài ra, vui lòng tham khảo ứng dụng MoMo hoặc đối tác tín dụng của
          MoMo để biết điều kiện, phí và phụ phí.
        </p>
        <p>
          Apple có toàn quyền quyết định sản phẩm nào đủ điều kiện hưởng ưu đãi
          trả góp vào bất cứ lúc nào. Mọi thay đổi về việc lựa chọn sản phẩm, kỳ
          hạn trả góp và lãi suất đều sẽ làm thay đổi ưu đãi trả góp hàng tháng.
          Lãi suất quy định là lãi suất tính theo phần trăm hàng tháng. Áp dụng
          số tiền mua tối thiểu 3.000.000đ cho sản phẩm đủ điều kiện và cần phải
          thanh toán trước 20% cho mọi sản phẩm bạn mua
        </p>
        <p>
          Đơn hàng phải được đặt trên Apple Store Trực Tuyến www.apple.com/vn.
        </p>
        <p>
          Sản phẩm được mua từ Apple Store Trực Tuyến Dành cho Doanh Nghiệp và
          Apple Store Trực Tuyến Dành Cho Ngành Giáo Dục không đủ điều kiện
          hưởng ưu đãi trả góp hàng tháng của MoMo.
        </p>

        <div className={cx("line")}></div>
        <div className={cx("detail-menu")}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faAppleAlt}></FontAwesomeIcon>
              <i className={cx("arrow", "right")}></i>
            </li>
            <li>
              iPhone
              <i className={cx("arrow", "right")}></i>
            </li>
            <li>
              iPhone 14 Pro
              <i className={cx("arrow", "right")}></i>
            </li>
            <li>Mua iPhone 14 Pro và iPhone 14 Pro Max</li>
          </ul>
        </div>
        <div className={cx("about-apple")}>
          <div className={cx("col-2")}>
            <div className={cx("menu")}>
              <h4>Mua sắm và tìm hiểu</h4>
              {footerShopping.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
            <div className={cx("menu")}>
              <h4>ví Apple</h4>
              {footerWallet.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
          {/*  */}

          <div className={cx("col-2")}>
            <div className={cx("menu")}>
              <h4>Tài Khoản</h4>
              {footerAccount.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
            <div className={cx("menu")}>
              <h4>Giải trí</h4>
              {footerIntertainment.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("col-2")}>
            <div className={cx("menu")}>
              <h4>Apple Store</h4>
              {footerStore.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("col-2")}>
            <div className={cx("menu")}>
              <h4>Dành cho daonh nghiệp</h4>
              {footerForBusiness.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
            <div className={cx("menu")}>
              <h4>Dành cho giáo dục</h4>
              {footerForEducation.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
            <div className={cx("menu")}>
              <h4>Dành cho Chăm sóc sức khỏe</h4>
              {footerForHealth.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("col-2")}>
            <div className={cx("menu")}>
              <h4>Giá Trị Cốt Lõi của Apple</h4>
              {footerValueOfApple.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
            <div className={cx("menu")}>
              <h4>Về Apple</h4>
              {footerAboutApple.map((item, index) => (
                <div key={index}>
                  <a href={item.path}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          Xem thêm cách để mua hàng: <a>Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc
          gọi 1800-1192.
        </div>
        <div className={cx("line")}></div>
        <div className={cx("footer-inc")}>
          <div>Bản quyền @ 2023 Apple Inc. Bảo lưu mọi quyền.</div>
          <div>Việt Nam</div>
        </div>

        <div className={cx("coppyright")}>
          <ul>
            <li>Chính sách quyền riêng tư</li>
            <li>Điều khoản sử dụng</li>
            <li>Bán Hàng và Hoàn Tiền</li>
            <li>Pháp Lý</li>
            <li>Sơ Đồ Trang Web</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
