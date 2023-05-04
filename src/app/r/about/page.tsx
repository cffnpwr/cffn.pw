import ExternalLink from "@/components/externalLink";

const About = () => {
  return (
    <>
      <h2>お前誰</h2>
      <p>かふぇいんぱわぁと申します。 なんかいろいろやってます。</p>

      <h2>できること</h2>
      <div className="m-4">
        <h3>インフラまわり</h3>
        <ul>
          <li>Docker 2021〜</li>
          <li>Kubernetes 2022〜</li>
        </ul>

        <h3>プログラミング</h3>
        <ul>
          <li>C++ 2014〜</li>
          <li>HTML 2015〜</li>
          <li>CSS 2015〜</li>
          <li>JavaScript 2015〜</li>
          <li>PHP 2015〜</li>
          <li>Java 2016〜</li>
          <li>Python 2017〜</li>
          <li>TypeScript 2021〜</li>
          <li>React 2021〜</li>
          <li>Next.js 2021〜</li>
          <li>Github Actions 2022〜</li>
          <li>Rust 2022〜</li>
          <li>ARM Assembly 2022〜</li>
        </ul>
      </div>

      <h2>SNSとか</h2>
      <ul>
        <li>
          <ExternalLink href="https://submarin.online/@cffnpwr">
            Misskey(Submarin.online)
          </ExternalLink>
          {": "}
          いつもいます
        </li>
        <li>
          <ExternalLink href="https://mk.shrimpia.network/@cffnpwr">
            Misskey(シュリンピア帝国)
          </ExternalLink>
          {": "}
          いつもいます
        </li>
        <li>
          <ExternalLink href="https://github.com/cffnpwr">Github</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://twitter.com/cffnpwr">Twitter</ExternalLink>
          {": "}
          ほとんど見ません
        </li>
      </ul>

      <h2>寄付</h2>
      <p>寄付されると喜びます</p>
      <ul>
        <li>
          <ExternalLink href="https://www.amazon.jp/hz/wishlist/ls/252U4ZZHZ5E98">
            干し芋のリスト
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://kyash.me/payments/sTq4FTMxETTuBaWKS4t3aBa1IWCE">
            Kyash
          </ExternalLink>
        </li>
      </ul>
    </>
  );
};

export default About;
