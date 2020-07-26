import PageContainer from "../../components/page-container";
import ImageText from "../../components/image-text";
import { convertedImgUrl } from "../../components/utils";
import "./style.styl";

const PREFIX_CLASS = "news-page";
const news = [
  {
    date: "2020-07-22",
    src: "https://www.moneydj.com/z/sjn/jpg/GetNewsRptjpg.djjpg?a=226198",
    title: "星展：Q3續看好美股/亞股，美元料小幅貶值",
    newsUrl:
      "https://fund.megabank.com.tw/ETFData/djhtm/ETNEWSContentMega.djhtm?TYPE=4&DATE=&PAGE=1&A=5FCADC9E-8EF6-428F-832D-ED94A8B1A71C",
    text:
      "星展銀行今(22)日發布第三季投資展望指出，展望第三季，除非出現更嚴重的第二波肺炎疫情，否則經濟的逐步開放將有助風險性資產的表現，星展維持相對看好美股和亞洲(不含日本)股市的觀點，並預期匯市波動度將縮小，下半年美元將會小幅貶值，美元指數可能在94-100間區間震盪...",
  },
  {
    date: "2020-07-21",
    src: "https://www.moneydj.com/z/sjn/jpg/GetNewsRptjpg.djjpg?a=111437",
    title: "台股強漲 台幣早盤升值1.41角",
    newsUrl:
      "https://fund.megabank.com.tw/ETFData/djhtm/ETNEWSContentMega.djhtm?TYPE=4&DATE=&PAGE=2&A=8AACB1CE-A43C-4AFD-9213-D1A7F2BE5208",
    text:
      "今(21)日台積電(2330)股價強攻、續創歷史新天價，帶動加權指數早盤勁揚逾200點，台幣兌美元亦隨之走升，市場見外資匯入，台幣實質交易區間重新回升至29.4字頭，台幣中午以升值1.41角至29.424元暫收...",
  },
];

export default function News() {
  return (
    <PageContainer className={PREFIX_CLASS}>
      <div className="content">
        <h1>News</h1>
        <div>
          {news.map(function (n) {
            return (
              <ImageText
                key={n.newsUrl}
                date={n.date}
                src={n.src}
                title={n.title}
                newsUrl={n.newsUrl}
                text={n.text}
              />
            );
          })}
        </div>
      </div>
      <section>
        <img src={convertedImgUrl(`/images/news.jpg`)} />
      </section>
    </PageContainer>
  );
}
