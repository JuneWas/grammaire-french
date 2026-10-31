# Grammaire Française

日本語で構造から学ぶフランス語文法サイト。React / TypeScript / Vite / Tailwind CSS / React Router を使用します。

## 開発

Node.js 24 と npm を使用します。

```sh
npm ci
npm run dev
```

表示された開発サーバーのアドレスをブラウザで開きます。

```sh
npm test          # 文法データの整合性
npm run build     # TypeScript検証と本番ビルド
npm run preview   # dist の動作確認
```

## 構成

- `src/main.tsx`: 共通レイアウト、ホーム、辞典、詳細、コース、理解度チェック
- `src/data/lessons.ts`: UIに依存しない型付き文法データ（説明・比較・例文・問題）
- `src/hooks/useProgress.ts`: localStorageへの進捗保存
- `src/style.css`: Tailwind CSSとレスポンシブスタイル
- `.github/workflows/deploy.yml`: mainへのpush時にGitHub Pagesへ公開

9単元（冠詞・性数一致・現在形・否定・過去時制・目的語代名詞・関係代名詞・条件法・接続法）、計27問を収録。全3問正解で単元を学習済みにします。最近閲覧した単元も記録します。進捗はブラウザ・オリジンごとに保存され、端末間同期はありません。ストレージ使用不可の場合は画面内の状態のみ保持します。

音声はブラウザ標準のSpeechSynthesisを使用します。フランス語音声の有無と品質は端末に依存します。

## GitHub Pages

リポジトリの Settings → Pages → Source を **GitHub Actions** に設定し、mainにpushするかワークフローを手動実行します。`dist`が公開されます。相対baseとHashRouterによりサブディレクトリ配信および詳細画面の再読み込みに対応します。この作業自体では公開しません。

## 今後

各レベルのコンテンツ拡充・出典と参考文献・原著読解演習・会話履歴を持つAI質問パネルを追加予定。現在はバックエンドもAI API接続もありません。将来のAPIキーはブラウザへ埋め込まず、サーバー側で管理してください。
