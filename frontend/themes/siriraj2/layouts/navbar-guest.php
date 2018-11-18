<li class="nav_active"><a  href="/"><i class='fa fa-home'></i> <?= Yii::t('section', 'HOME') ?></a></li>
<li class="bg-green"><a href="/account/sign-in/login"><i class="fa fa-sign-in"></i> <?= Yii::t('section', 'SIGN IN') ?></a></li>
<li class="nav-active nav-signup"><a href="/account/sign-in/signup"><i class=""></i> <?= Yii::t('section', 'SIGN UP') ?></a></li>
<li class="bg-green"><a href="/site/about"><?= Yii::t('section', 'ABOUT US') ?></a></li>
<li class=" nav-active"><a href="/site/contact"><?= Yii::t('section', 'CONTACT US') ?></a></li>
<li class="bg-green">
    <a href="/sections/cart/my-cart" class="nav-cart-popup">
        <img src="<?= \yii\helpers\Url::to('@web/images/cart-icon.png') ?>" style="width:25px;"/>
        ตะกร้าสินค้า
        <span class="my-cart">
            <?php if (!empty($cart)): ?>
                <span class="badge" id="globalCart"> 1<?= $cart ?></span>  
            <?php endif; ?>
        </span>
    </a>
</li>
<li class="clip-right bg-green"><a class="menu-height"></a></li>