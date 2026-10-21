export default function App() {
  return (
    <main className="page">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Thanks-website</p>
          <h1>Khu vực dịch vụ hệ thống</h1>
          <p className="subtitle">
            Tên miền này phục vụ các thành phần kỹ thuật và dịch vụ nền của hệ thống.
          </p>
        </div>
      </header>

      <div className="container content">
        <section className="notice">
          <h2>Không có nội dung công khai tại đây</h2>
          <p>
            Tên miền này có thể được sử dụng cho backend, các dịch vụ nền,
            hệ thống email và những dịch vụ kỹ thuật khác. Đây không phải là
            trang dành cho người dùng truy cập trực tiếp.
          </p>
          <p>
            Nếu bạn vô tình mở địa chỉ này, không cần thực hiện thao tác nào:
            không có gì để xem ở đây cả.
          </p>
        </section>

        <section>
          <h2>Lời cảm ơn</h2>
          <p>
            Thanks-website xin gửi lời cảm ơn đến dự án
            <strong> Nâng cao khả năng sử dụng máy tính và truy nhập Internet công cộng tại Việt Nam</strong>,
            được hỗ trợ bởi Quỹ Bill &amp; Melinda Gates (BMGF). Dự án đã góp
            phần mở rộng cơ hội tiếp cận máy tính, Internet và tri thức cho
            cộng đồng tại Việt Nam.
          </p>
        </section>

        <section className="technical">
          <h2>Vai trò của tên miền</h2>
          <ul>
            <li>Hỗ trợ backend và các dịch vụ xử lý phía máy chủ.</li>
            <li>Phục vụ các tác vụ nền và thành phần kỹ thuật liên quan.</li>
            <li>Có thể được cấu hình cho dịch vụ email và các dịch vụ hệ thống khác.</li>
            <li>Không cung cấp nội dung công khai để duyệt trực tiếp.</li>
          </ul>
        </section>

        <footer>
          <p>Thanks-website · Hạ tầng dịch vụ và các thành phần nền</p>
        </footer>
      </div>
    </main>
  );
}
