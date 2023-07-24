import Accordion from "react-bootstrap/Accordion";
import classNames from "classnames/bind";
import styles from "./Question.module.scss";
const cx = classNames.bind(styles);

function Question() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p className={cx("question")}>Câu hỏi thường gặp</p>
            </Accordion.Header>
            <Accordion.Body>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Tại sao tôi nên mua iPhone không có SIM trên apple.com?
                </Accordion.Header>
                <Accordion.Body>
                  Một iPhone chưa kết nối được mua từ apple.com sẽ được mở khóa.
                  Điều này có nghĩa là bạn sẽ không bị ràng buộc với một nhà
                  cung cấp mạng hoặc một hợp đồng dịch vụ nhiều năm nào. Bạn có
                  thể chọn mạng và giá cước phù hợp với mình. Sau khi được kích
                  hoạt, iPhone mới của bạn vẫn được mở khóa, có nghĩa là bạn có
                  thể sử dụng thiết bị này với bất kỳ nhà mạng nào cung cấp dịch
                  vụ cho iPhone.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Việc chuyển dữ liệu và thiết lập iPhone mới có dễ không?
                </Accordion.Header>
                <Accordion.Body>
                  Các phiên bản iPhone hiện được bán trên apple.com có thể kết
                  nối với mạng tương thích trên thế giới, bao gồm mạng 5G và 4G
                  LTE. Hãy kiểm tra với nhà cung cấp mạng gia đình của bạn về
                  phí chuyển vùng quốc tế, hoặc mua SIM nano tương thích ở nơi
                  bạn sinh sống.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  iPhone của tôi có hoạt động trên toàn thế giới không?
                </Accordion.Header>
                <Accordion.Body>
                  Các phiên bản iPhone hiện được bán trên apple.com có thể kết
                  nối với mạng tương thích trên thế giới, bao gồm mạng 5G và 4G
                  LTE. Hãy kiểm tra với nhà cung cấp mạng gia đình của bạn về
                  phí chuyển vùng quốc tế, hoặc mua SIM nano tương thích ở nơi
                  bạn sinh sống.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Tôi có thể chọn phương thức giao hàng nào và khi nào tôi sẽ
                  nhận được hàng?
                </Accordion.Header>
                <Accordion.Body>
                  Thời gian giao hàng ước tính tùy thuộc vào tình trạng sẵn có
                  của sản phẩm và phương thức giao hàng bạn chọn. Bạn sẽ được
                  biết ngày giao hàng chính xác sau khi đặt hàng. Phương thức
                  giao hàng tiêu chuẩn được miễn phí cho tất cả đơn hàng trực
                  tuyến. Đơn hàng đặt qua apple.com chỉ có thể được vận chuyển
                  trong quốc gia hoặc khu vực mua. Truy cập cửa hàng trực tuyến
                  của địa điểm mà bạn muốn sản phẩm được giao đến.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Những nhà mạng nào cung cấp dịch vụ 5G?
                </Accordion.Header>
                <Accordion.Body>
                  iPhone 14, iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Pro Max,
                  iPhone 13, iPhone 13 mini, iPhone 12 và iPhone SE hỗ trợ 5G.
                  Để truy cập mạng 5G, bạn cần kích hoạt iPhone của mình với nhà
                  mạng có cung cấp dịch vụ 5G. Một số nhà cung cấp cũng có thể
                  yêu cầu gói dịch vụ 5G hoặc SIM mới. Vui lòng liên hệ với nhà
                  cung cấp của bạn để biết thêm chi tiết. Tìm hiểu thêm về các
                  nhà mạng ở quốc gia của bạn tại đây.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Question;
