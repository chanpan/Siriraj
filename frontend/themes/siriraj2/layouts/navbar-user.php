<?php 
    use yii\helpers\Url;
?>
<li class="nav_active"><a href="<?= Url::to(['/']);?>"><i class='fa fa-home'></i> <?= Yii::t('section', 'HOME') ?></a></li>
<li class="bg-green"><a href="<?= Url::to(['/account/default/settings']);?>"><i class="fa fa-user"></i> <?= Yii::t('appmenu', 'MY PROFILE') ?></a></li> 
<li class="nav-active"><a href="<?= Url::to(['/site/about']);?>"><?= Yii::t('section', 'ABOUT US') ?></a></li>
<li class="bg-green"><a href="<?= Url::to(['/site/contact']);?>"><?= Yii::t('section', 'CONTACT US') ?></a></li>
<li class="nav-active">
    <a href="<?= Url::to(['/sections/cart/my-cart']);?>" >
        <img src="<?= \yii\helpers\Url::to('@web/images/cart-icon.png') ?>" style="width:25px;"/>
        ตะกร้าขอข้อมูล
        <span class="my-cart">
            <?php if (!empty($cart)): ?>
                <span class="badge" id="globalCart"><?= $cart ?></span>  
            <?php endif; ?>
        </span>
    </a>
</li>
<li class="dropdown bg-green">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?= Yii::t('section', 'MORE...') ?> <span class="caret"></span></a>
    <ul class="dropdown-menu ">
        <li><a href="<?= Url::to(['/sections/order/my-order']);?>"><?= Yii::t('appmenu', 'REQUEST INFORMATION') ?></a></li>
        <li><a href="<?= Url::to(['/account/sign-in/logout'])?>" data-method="post" tabindex="-1"><i class="fa fa-unlock-alt"></i>  <?= Yii::t('appmenu', 'LOGOUT') ?></a></li>
    </ul>
</li>
<li class="clip-right bg-green"><a class="menu-height"></a></li>
