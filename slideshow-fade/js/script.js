$(function () {
  // 画像の枚数
  let count = $("#slide li").length;

  // 現在表示されている画像（最初は1番目の画像）
  let current = 1;

  // 次に表示する画像
  let next = 2;

  // フェードイン／アウトのインターバル（何秒ごとか）
  let interval = 3000;

  // フェードイン／アウトの切り替えスピード
  let duration = 500;

  // タイマー用の変数
  let timer;

  // 1枚目の写真以外は非表示
  $("#slide li:not(:first-child)").hide();

  // 3000ミリ秒ごとにslideTimer関数を実行
  timer = setInterval(slideTimer, interval);

  // スライドショーを実行する関数
  function slideTimer() {
    // 現在の画像をフェードアウト
    $("#slide li:nth-child(" + current + ")").fadeOut(duration);

    // 次の画像をフェードイン
    $("#slide li:nth-child(" + next + ")").fadeIn(duration);

    // 変数currentの新しい値：変数nextの元の値
    current = next;

    // 変数nextの新しい値：変数nextの元の値＋1
    next = ++next;

    // 変数nextの値が画像の枚数を超えたら1に戻す
    if (next > count) {
      next = 1;
    }

    // targetクラスを削除
    $("#button a").removeClass("target");

    // 現在のボタンにtargetクラスを追加
    $("#button li:nth-child(" + current + ") a").addClass("target");
  }

  // ボタンをクリック
  $("#button a").click(function() {
    // テキスト内容（数値）を変数nextに代入
    next = $(this).html();

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();

    return false;
  });

});