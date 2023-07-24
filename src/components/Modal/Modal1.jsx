import { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import "./style.css";

function Modal1() {

  const [lgShow, setLgShow] = useState(false);
    return ( 
        <>
      <Button onClick={() => setLgShow(true)}> <p>Nhận 1.000.000đ–19.100.000đ điểm khi đổi.**</p></Button>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
         

        </Modal.Header>
        <Modal.Body>
        <div className='p-5'>
               <h2>Nhận 1.000.000đ–19.100.000đ điểm tín dụng khi mua iPhone tiếp theo.**</h2>
               <p>Chúng tôi sẽ giúp bạn đổi thiết bị đủ điều kiện để lấy điểm tín dụng mua iPhone mới hoặc tái chế thiết bị không đủ điều kiện miễn phí.</p>
               <h3>Dưới đây là cách thức hoạt động:</h3>
               <ol>
                   <li>
                       <span>Xem điện thoại thông minh của bạn trị giá bao nhiêu.</span>
                       <p>Trả lời một số câu hỏi để nhận được giá trị đổi cũ lấy mới ước tính của bạn. Chúng tôi sẽ ghi có vào phương thức thanh toán của bạn sau khi chúng tôi nhận được và định giá‌ thiết bị cũ của bạn.</p>
                   </li>
                   <li>
                       <span>Xem điện thoại thông minh của bạn trị giá bao nhiêu.</span>
                       <p>Bạn sẽ giữ lại thiết bị cũ của mình cho đến khi nhận được iPhone mới. Chúng tôi sẽ gửi email hướng dẫn về cách gửi thiết bị cũ của bạn hoặc hẹn hãng chuyển phát đến lấy thiết bị cũng như cách sao lưu và chuyển dữ liệu của bạn.</p>
                   </li>
                   <li>
                       <span>Gửi thiết bị cũ của bạn trong vòng 14 ngày kể từ ngày nhận được iPhone mới.</span>
                       <p>Sau khi chúng tôi nhận được thiết bị của bạn, một bộ phận chuyên trách sẽ kiểm tra và xác minh tình trạng của thiết bị. Nếu mọi thứ đáp ứng điều kiện, giao dịch đổi cũ lấy mới của bạn hoàn tất. Nếu thiết bị của bạn không giống với tình trạng mà bạn mô tả, bạn sẽ nhận được email kèm theo các bước tiếp theo.</p>
                       <p><span className='strong-text'>Lưu ý:</span>Nếu bạn đã thanh toán đầy đủ và chúng tôi xác nhận rằng giá trị đổi cũ lấy mới của bạn cao hơn giá mua iPhone mới, chúng tôi sẽ gửi số tiền còn lại qua hình thức chuyển khoản ngân hàng. Nếu bạn thanh toán bằng hình thức Trả Góp Hàng Tháng Với MoMo, chúng tôi sẽ hoàn tiền vào tài khoản của bạn.</p>
                   </li>
               </ol>
            
                   <span className='explain'>Chương trình tái chế hoạt động như thế nào?</span>
                   <p>Nếu thiết bị của bạn không đủ điều kiện để đổi lấy điểm tín dụng theo chương trình đổi cũ lấy mới, chúng tôi sẽ tái chế thiết bị miễn phí. Sau khi hoàn tất giao dịch mua, bạn sẽ nhận được email hướng dẫn về cách đóng hộp thiết bị cũ của bạn và thu xếp vận chuyển.</p>
                
                
           </div>
        
        </Modal.Body>
        <Modal.Footer>
        <div className='mx-auto'>
           <div className='avatar'></div>
           <div className='d-flex justify-content-center'>Bạn có thêm câu hỏi nào nữa không</div>
           <div  className='d-flex justify-content-center'><a href='./'>Hỏi chuyên gia Apple</a></div>
      
       </div>       
        </Modal.Footer>
      </Modal>
        </>
     );
}



export default Modal1
