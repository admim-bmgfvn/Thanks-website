export default function App() {
  return (
    <main className="page">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Thanks-website</p>
          <h1>It works!</h1>
          <p className="subtitle">Trang web đã được triển khai và đang phản hồi.</p>
        </div>
      </header>

      <div className="container content">
        <section className="notice">
          <h2>Trang thông báo mặc định</h2>
          <p>
            Đây là trang thông báo mặc định. Nếu bạn vô tình truy cập vào đây,
            đừng lo — đây không phải là lỗi; mọi thứ vẫn đang hoạt động đúng
            như dự kiến. Không có gì để xem ở đây.
          </p>
        </section>

        <section>
          <h2>Về website</h2>
          <p>
            Thanks-website là lời tri ân dành cho những cơ hội tiếp cận máy
            tính, Internet và tri thức tại Việt Nam, trong đó có dự án
            <strong> Nâng cao khả năng sử dụng máy tính và truy nhập Internet công cộng tại Việt Nam</strong>,
            được hỗ trợ bởi Quỹ Bill &amp; Melinda Gates (BMGF).
          </p>
        </section>

        <section className="technical">
          <h2>Thông tin</h2>
          <ul>
            <li>Trạng thái: website đã tải thành công</li>
            <li>Ứng dụng: React và Vite</li>
            <li>Nền tảng triển khai: Azure Static Web Apps</li>
          </ul>
        </section>

        <footer>
          <p>Thanks-website · Trang thông báo đơn giản</p>
        </footer>
      </div>
    </main>
  );
}
