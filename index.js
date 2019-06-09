// グローバルに展開
phina.globalize();

// 定数
const ASSETS = {
    image: {
        rikka:"./image/guruguru.png",
    },
    spritesheet: {
        "guruguru_ss":{
            // フレーム情報
            "frame": {
              "width": 500, // 1フレームの画像サイズ（横）
              "height": 525, // 1フレームの画像サイズ（縦）
              "cols": 2, // フレーム数（横）
              "rows": 3, // フレーム数（縦）
            },
            // アニメーション情報
            "animations": {
              "guruguru": { // アニメーション名
                "frames": [0, 1, 2, 3, 4], // フレーム番号範囲
                "next": "guruguru", // 次のアニメーション
                "frequency": 2, // アニメーション間隔
              },
            }
          }
      }
};
const SCREEN_WIDTH  = 640; // 画面横サイズ
const SCREEN_HEIGHT = 960; // 画面縦サイズ

phina.define("MainScene", {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();

    Label({
        text:"夢ならたくさん見ておいたよ",
        fontSize:40,
        fill:"white",
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(2));

    const sprite = Sprite("rikka", 300, 300).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
    const anim = FrameAnimation("guruguru_ss").attachTo(sprite);
    // アニメーションを指定
    anim.gotoAndPlay("guruguru");
  },
});

// メイン処理
phina.main(function(){
    // アプリケーション生成
    const app = GameApp({ 
        startLabel: 'main',
        assets: ASSETS,
        backgroundColor: "#610B0B",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    });
    // アプリケーション実行
    app.run();
  });