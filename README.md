# touchTest
https://masan-k.github.io/Touch-panel-verification/

## やりたいこと
スマホで背景画像のみ縮小・拡大し、背景画像以外は拡大縮小させない。

## 検証内容
### １：スワイプ（単体)
■画像を表示。（縦表示で横が収まりきらない状態にする）
■スワイプで画像を移動させる（スクロールバーでの移動ではなく、指くっついているイメージ）
（補足）
　・タッチイベントはtouchstartとtouchendを利用
2022/03/06 15:36 ok

### ２：ピンチアウト・ピンチイン（単体）
２つ目のキャンバスを使う
□画像を表示
□ピンチアウト・ピンチインで画像を縮小・拡大（参考サイトあり）


### ３：複数オブジェクトの管理
変にDOMを配置するよりも全てキャンバス上で完結させたほうが処理が楽そう。
ボタンは四角型の「NEXT」にする（判定処理が面倒）
□マーカーを表示
□ボタンを表示

###  ０：今回のメインの検証とは別に気になったこと
・
・Canvasを画面いっぱいに表示させる方法
・なぜ「touchStart」と「touchMove」でタッチした座標のとり方が違うのか？


