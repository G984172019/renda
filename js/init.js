// APIキーの設定
const APPLICATION_KEY = "25109abf9bb96a6a929a3ae3d3a6de74320adf03dd33655e46e31d7eeb365c59";
const CLIENT_KEY = "c24f859e28e7281e30d0a72d679bddfcdd6c59004a47edc8d28b9df413b09a63";

// タイマー設定
let countTimer = 13;
// タップ回数カウンター
let counter = 0;
// タイマーエレメント
const countDown = document.getElementById('countDown');
// タップ可否設定（フラグ）
let tapFlag = false;
// スコア表示エレメント
const score = document.getElementById("score");
// メイン画面エレメント
const main = document.getElementById("main");
const startButton = document.getElementById("startButton");
// ランキング表示関連エレメント
const rankButton = document.getElementById("rankButton");
const ranking = document.getElementById("ranking");
