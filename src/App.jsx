import { useState } from "react";

const cards = [
  {
    number: "01",
    title: "Tri thức",
    text: "Công nghệ mở thêm những con đường để học hỏi, kết nối và chia sẻ."
  },
  {
    number: "02",
    title: "Cơ hội",
    text: "Một điểm truy cập Internet có thể trở thành điểm khởi đầu của một hành trình rất dài."
  },
  {
    number: "03",
    title: "Lòng biết ơn",
    text: "Những cơ hội từng nhận được xứng đáng được ghi nhớ và tiếp tục lan tỏa."
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="hero">
        <nav className="nav container">
          <a className="brand" href="#top">Thanks<span>.</span></a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Mở menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#story" onClick={() => setMenuOpen(false)}>Câu chuyện</a>
            <a href="#values" onClick={() => setMenuOpen(false)}>Giá trị</a>
            <a href="#status" onClick={() => setMenuOpen(false)}>Trạng thái</a>
          </div>
        </nav>

        <div className="hero-content container" id="top">
          <p className="eyebrow">A SMALL WEBSITE OF GRATITUDE</p>
          <h1>
            Cảm ơn những người đã mở ra{" "}
            <span>cơ hội.</span>
          </h1>
          <p className="hero-copy">
            Một không gian nhỏ để ghi nhớ giá trị của máy tính,
            Internet và tri thức đã đến với cộng đồng tại Việt Nam.
          </p>
          <a className="cta" href="#story">Đọc câu chuyện <b>↓</b></a>
        </div>

        <div className="hero-mark" aria-hidden="true">+</div>
      </header>

      <main>
        <section className="section container" id="story">
          <div className="section-label">01 / Lời tri ân</div>
          <div className="story-grid">
            <h2>Một lời cảm ơn được <em>giữ lại.</em></h2>
            <div className="story-copy">
              <p>
                Tên miền này được tạo ra cho các mục đích kỹ thuật,
                nhưng đồng thời mang một ý nghĩa cá nhân: một lời tri ân
                đến dự án <strong>BMGF-VN</strong>.
              </p>
              <p>
                Dự án “Nâng cao khả năng sử dụng máy tính và truy nhập
                Internet công cộng tại Việt Nam” được khởi xướng và tài trợ
                bởi <strong>Quỹ Bill &amp; Melinda Gates (BMGF)</strong>.
              </p>
              <p>
                Với những người từng được tiếp cận công nghệ thông qua
                những cơ hội như vậy, giá trị không chỉ nằm ở thiết bị,
                mà ở những cánh cửa mà thiết bị đó giúp mở ra.
              </p>
            </div>
          </div>
        </section>

        <section className="quote">
          <div className="container">
            <p className="quote-label">A MEMORY WORTH KEEPING</p>
            <blockquote>
              “Một cơ hội nhỏ hôm nay có thể trở thành
              một hành trình rất dài ngày mai.”
            </blockquote>
          </div>
        </section>

        <section className="section container" id="values">
          <div className="section-label">02 / Những giá trị</div>
          <div className="cards">
            {cards.map((card) => (
              <article className="card" key={card.number}>
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="status">
          <div className="section-label">03 / Trạng thái</div>
          <div className="status">
            <div className="status-indicator" />
            <div>
              <h2>Website đang hoạt động.</h2>
              <p>
                Ứng dụng được xây dựng bằng React và Vite, sau đó Azure Static
                Web Apps build thành các file tĩnh trong thư mục <code>build/</code>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>Thanks-website</span>
          <span>React · Azure Static Web Apps · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
