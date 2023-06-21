import ExternalLink from "@/components/externalLink";

const Works = () => {
  return (
    <>
      <h2>作ったものとか</h2>
      <ul>
        <li>
          <ExternalLink href="https://github.com/cffnpwr/caffe-bruncher">
            CaffeBruncher
          </ExternalLink>
          {": "}
          TwitterとMisskeyに同時投稿するツール。TwitterにAPIを止められたので開発停止中。
        </li>
        <li>
          <ExternalLink href="https://github.com/L1n4r1A/t2h">Text to HTML</ExternalLink>
          {": "}
          お友達の
          <ExternalLink href="https://mk.shrimpia.network/@singingintherain">るなち</ExternalLink>
          のために作ったツール。
          それっぽいテキストをHTMLに変換したり、MarkdownをHTMLに変換したり、自動でルビを振ったりできる。
        </li>
        <li>
          <ExternalLink href="https://github.com/cffnpwr/swc-plugin-import-extension-resolver">
            swc-plugin-import-extension-resolver
          </ExternalLink>
          {": "}
          TypeScriptのトランスパイル時に.tsファイルのパスを.jsに変換するためのSWCプラグイン。
          これを使うことで、import文の拡張子を省略できるようになる。
        </li>
      </ul>
    </>
  );
};

export default Works;
