<?php require('header.php')?>
    <main>
        <h2 class="text-align">ダミーフォーム</h2>

        <form class="form-container" action="dummy_submit_form.php" method="post">
  <label>氏名<input type="text" id="name" name="name" required></label>
  <label>メールアドレス<input type="email" id="email" name="email" required></label>
  <label>電話番号<input type="tel" id="phone" name="phone" pattern="[0-9]{10,11}" required></label>
  <label>郵便番号<input type="text" id="zipcode" name="zipcode" pattern="[0-9]{3}-[0-9]{4}" required></label>
  <label>住所<input type="text" id="address" name="address" required></label>
  <label>お問い合わせ内容<textarea id="inquiry" name="inquiry" rows="4" required></textarea></label>
  <label>志望動機<textarea type="text" id="motivation" name="motivation"></textarea></label>
  <label>自己PR<textarea id="self_pr" name="self_pr" rows="4"></textarea></label>
  <label>添付ファイル:<input type="file" id="attachment" name="attachment"></label>
  <input type="submit" value="送信">
</form>
    </main>
    <?php require('footer.php')?>