
<body>
  <h1>AnteKnowledge-アンテナレッジ-　フロントエンド</h1>
  
  <blockquote>
    <strong>注意:</strong> リポジトリ内のコードをご利用いただく際に発生したトラブル等については、
    一切責任を負いかねますのでご了承ください。
  </blockquote>
  
  <h2>目次</h2>
  <ol>
    <li><a href="#introduction">はじめに</a></li>
    <li><a href="#apps">アプリ概要</a></li>
    <li><a href="#technologies">使用技術まとめ</a></li>
    <li><a href="#improvements">今後の改善点</a></li>
  </ol>

  <h2 id="introduction">はじめに</h2>
  <p>
    ・本リポジトリはokamu714(GitHubName)が作成した、電子記事販売やブログを投稿するWebアプリケーションのフロントエンド側のコードです。<br/>
    ・バックエンドに関してはこちらのURLから御覧ください。：　https://github.com/okamu714/AnteknowledgeBackEnd<br/>
  </p>

  <h2 id="apps">アプリ概要</h2>

  <h3>AnteKnowledge-アンテナレッジ-</h3>
  <ul>
    <li><strong>概要:</strong> 電子記事販売やブログの投稿を行えるWebアプリケーションです。</li><br/>
    <li><strong>コンセプト:</strong></li><br/>
    <img width="738" alt="スクリーンショット 2024-12-16 10 24 40" src="https://github.com/user-attachments/assets/02abce4d-aa00-43da-9339-ada55d8a077e" />
    <li><strong>機能:</strong>
      <ul>
        <li>stripe checkoutを用いた決済機能</li>
        <li>microCMSを用いた電子記事、ブログ投稿機能</li>
        <li>AWS RDSを用いたユーザーデータ(メールアドレスや購入履歴)保存機能</li>
        <li>AWS Amplifyを用いたユーザー認証機能:以下のデモ用メールアドレスとパスワードをご利用ください。
          <ul>
            <li>メールアドレス:tdemo073@gmail.com</li>
            <li>パスワード:Demo</li>
          </ul>
        </li>
      </ul>
    </li><br/>
    <li><strong>サイトURL:</strong>https://authcomp.d1awsv4v0mkqab.amplifyapp.com/
<!--       <a href="https://youtu.be/SGeeLyyds3M"> デモを見る(YouTubeへのリンクです)</a> -->
      <br/>
    </li><br/>
    <li><strong>挑戦したこと　/ 工夫点:</strong><br/>
      <ul>
        <li>[挑戦したこと]初めてMVCモデルを利用したWebアプリケーションの作成に挑戦</li>
        <li>[挑戦したこと]AWSやmicroCMS、stripeなどクラウドサービスや外部APIの利用に挑戦</li>
        <li>[工夫点]細かいアニメーションを入れたり、視覚的にユーザーを楽しませる仕掛けをいれるようにした点</li>
        <li>[工夫点]ユーザが不正に商品にアクセスした場合に警告が出るように対策をした点</li>
      </ul>
    </li><br/>
  </ul><br/>

  <h2 id="technologies">技術スタックまとめ</h2>

![アンテナレッジ技術スタック](https://github.com/user-attachments/assets/31eb7e4a-2ea6-4b12-a082-8958a0599121)


  <h2 id="improvements">今後の改善点</h2>
  <ul>
    <li>コンテンツ拡充</li>
    <li>ユーザ情報取得の高速化</li>
    <li>サイトデザインのブラッシュアップ</li>
  </ul><br/>

  <h2 id="improvements">さいごに</h2>
  最後までご覧いただきありがとうございました！<br/>
  
</body>
</html>
