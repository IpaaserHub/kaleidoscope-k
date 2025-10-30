# 株式会社 Kaleidoscope&K 公式ウェブサイト

華やかでシンプル、洗練されたデザインのコーポレートサイトです。

## 🌟 特徴

- **モノトーンカラー**: 白・黒・グレーの洗練された配色
- **エレガントなタイポグラフィ**: 手書き風フォントとセリフ体の組み合わせ
- **レスポンシブデザイン**: PC、タブレット、スマートフォン対応
- **スムーズなアニメーション**: フェードイン、パララックス効果など
- **インタラクティブUI**: ホバーエフェクト、スムーススクロール

## 📁 ファイル構成

```
kaleidoscope-k-website/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScript（アニメーション・インタラクション）
└── README.md           # このファイル
```

## 🎨 使用フォント

- **Great Vibes** - エレガントな手書き風（会社名）
- **Allura** - 流れるようなスクリプト体（キャッチコピー）
- **Noto Serif JP** - 美しい明朝体（日本語本文）
- **Cormorant Garamond** - 上品なセリフ体（英語テキスト）

## 🚀 Vercelデプロイ方法

### 1. GitHubリポジトリを作成

```bash
git init
git add .
git commit -m "Initial commit: Kaleidoscope&K website"
git branch -M main
git remote add origin https://github.com/yourusername/kaleidoscope-k-website.git
git push -u origin main
```

### 2. Vercelでデプロイ

1. [Vercel](https://vercel.com)にアクセス
2. "New Project"をクリック
3. GitHubリポジトリをインポート
4. "Deploy"をクリック

デプロイ完了！数秒で公開URLが発行されます。

## 📱 セクション構成

1. **Hero** - ファーストビュー（会社名、キャッチコピー）
2. **About** - 会社概要と実績（100+プロデュース実績）
3. **Services** - 3つの事業
   - TOTALブランディング
   - 外見ブランディング
   - 美容事業
4. **Profile** - 代表取締役 中村和美のプロフィール
5. **Contact** - お問い合わせフォーム
6. **Footer** - フッター情報

## 🛠️ カスタマイズ方法

### 色の変更

`styles.css`の`:root`セクションで色を変更できます：

```css
:root {
    --color-primary: #1a1a1a;
    --color-secondary: #2a2a2a;
    --color-text: #333;
    /* ... */
}
```

### フォントの変更

`index.html`の`<head>`セクションでGoogle Fontsのリンクを変更し、
`styles.css`の変数を更新してください。

### セクションの追加・削除

`index.html`でセクションを追加・削除し、
必要に応じて`styles.css`にスタイルを追加してください。

## 📧 お問い合わせフォーム（Googleフォーム）

お問い合わせはGoogleフォームを使用します。

### Googleフォームの設定方法

1. **Googleフォームを作成**
   - [Google Forms](https://forms.google.com/)にアクセス
   - 新しいフォームを作成
   - 以下の項目を追加：
     - お名前（必須）
     - メールアドレス（必須）
     - お問い合わせ種別（選択式）
     - お問い合わせ内容（長文）

2. **フォームURLを取得**
   - フォーム編集画面で「送信」をクリック
   - リンクアイコンを選択
   - URLをコピー

3. **index.htmlを更新**
   - `index.html`の203行目を探す
   - `YOUR_GOOGLE_FORM_URL_HERE`を実際のGoogleフォームURLに置き換える

```html
<a href="https://forms.gle/あなたのフォームID" target="_blank" rel="noopener noreferrer" class="btn-google-form">
```

4. **完了！**
   - ボタンをクリックするとGoogleフォームが開きます
   - 回答は自動的にGoogleスプレッドシートに集約されます

## 📄 ライセンス

Copyright 2024 株式会社 Kaleidoscope&K. All rights reserved.

## 🎯 今後の拡張案

- [ ] ブログセクション追加
- [ ] お客様の声（testimonials）
- [ ] ポートフォリオギャラリー
- [ ] 多言語対応（英語版）
- [ ] CMSとの統合（Contentful, Strapi等）
- [ ] お問い合わせフォームのバックエンド実装
- [ ] アナリティクス設定（Google Analytics等）

---

**株式会社 Kaleidoscope&K**
「あなたらしさ」を輝かせ、選ばれる存在へ導く TOTALブランディング
