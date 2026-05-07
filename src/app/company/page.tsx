import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の会社概要です。所在地、代表者、創業年、事業内容、水道局指定番号を掲載しています。",
};

const rowStyle: React.CSSProperties = {
  borderBottom: "1px solid #d5dde6",
};

const headStyle: React.CSSProperties = {
  width: "220px",
  padding: "14px 10px",
  color: "#173a60",
  fontWeight: 700,
  verticalAlign: "top",
};

const bodyStyle: React.CSSProperties = {
  padding: "14px 10px",
  color: "#1f2937",
};

export default function CompanyPage() {
  return (
    <main style={{ padding: "96px 16px 56px", background: "#f5f8fb", minHeight: "100vh" }}>
      <div style={{ width: "min(960px, 94%)", margin: "0 auto" }}>
        <h1 style={{ color: "#0f2740", fontSize: "clamp(1.7rem, 5vw, 2.3rem)", marginBottom: "8px" }}>
          会社概要
        </h1>
        <p style={{ color: "#475569", marginBottom: "24px" }}>
          水道・排水設備を通じて、地域の暮らしとインフラを支えるために、誠実な施工を積み重ねています。
        </p>

        <section
          style={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #d5dde6",
            padding: "12px 16px",
            boxShadow: "0 10px 28px rgba(15, 39, 64, 0.06)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr style={rowStyle}>
                <th style={headStyle}>会社名</th>
                <td style={bodyStyle}>株式会社アルファ管工</td>
              </tr>
              <tr style={rowStyle}>
                <th style={headStyle}>代表者</th>
                <td style={bodyStyle}>山口 豊樹</td>
              </tr>
              <tr style={rowStyle}>
                <th style={headStyle}>所在地</th>
                <td style={bodyStyle}>滋賀県大津市坂本6丁目8-8</td>
              </tr>
              <tr style={rowStyle}>
                <th style={headStyle}>電話</th>
                <td style={bodyStyle}>
                  <a href="tel:0775793507">077-579-3507</a>
                </td>
              </tr>
              <tr style={rowStyle}>
                <th style={headStyle}>E-mail</th>
                <td style={bodyStyle}>
                  <a href="mailto:honsha@alpha-kanko.co.jp">honsha@alpha-kanko.co.jp</a>
                </td>
              </tr>
              <tr style={rowStyle}>
                <th style={headStyle}>創業</th>
                <td style={bodyStyle}>平成3年</td>
              </tr>
              <tr style={rowStyle}>
                <th style={headStyle}>事業内容</th>
                <td style={bodyStyle}>
                  一般住宅の水道、排水等の配管工事及び水まわりのリフォーム工事（給排水設備工事）
                </td>
              </tr>
              <tr>
                <th style={headStyle}>水道局指定番号</th>
                <td style={bodyStyle}>
                  <div>大津市指定給水装置工事事業者（第192号）</div>
                  <div>大津市指定排水設備工事事業者（第192号）</div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
