<?php

use yii\helpers\Url;
use yii\helpers\Html;
    $email = \backend\modules\cores\classes\CoreOption::getParams("email", "e");
    $tel = \backend\modules\cores\classes\CoreOption::getParams("tel", "e");
    $website   = \backend\modules\cores\classes\CoreOption::getParams("website", "e");

?>

<header> 
    <div class="header-middle ptb-15">
<?= $this->render("_search", ['directoryAsset' => $directoryAsset]) ?>    
        <div class="header-bottom  header-sticky">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-xl-12 col-lg-12 col-md-12 ">
                        <nav class="d-none d-lg-block">
                            <ul class="header-bottom-list d-flex">
                                <li><a href="/"><i class="fa fa-home"></i> <?= Yii::t('appmenu', 'Home') ?></a></li>
                                <li><a href="/site/about"><?= Yii::t('appmenu', 'About Us') ?></a></li>
                                <li><a href="/site/contact"><?= Yii::t('appmenu', 'Contact Us') ?></a></li>
                                <?php if (Yii::$app->user->isGuest): ?> 
                                 <li><a href="/account/sign-in/login"><?= Yii::t('appmenu', 'Login')?></a></li>
                                 <li><a href="/account/sign-in/signup"><?= Yii::t('appmenu','Register');?></a></li>
                                <?php endif; ?>
                                 <li style="line-height: 45px;">
                                        <?php
                                        echo \lajax\languagepicker\widgets\LanguagePicker::widget([
                                            'skin' => \lajax\languagepicker\widgets\LanguagePicker::SKIN_DROPDOWN,
                                            'size' => \lajax\languagepicker\widgets\LanguagePicker::SIZE_LARGE
                                        ]);
                                        ?> 
                                </li> 
                            </ul>
                        </nav>
                        <div class="mobile-menu d-block d-lg-none">
                            <nav>
                                <ul>
                                    <li><a href="/"><i class="fa fa-home"></i> <?= Yii::t('appmenu', 'Home') ?></a></li>
                                    <li><a href="/site/about"><?= Yii::t('appmenu', 'About Us') ?></a></li>
                                    <li><a href="/site/contact"><?= Yii::t('appmenu', 'Contact Us') ?></a></li>
                                    <?php if (Yii::$app->user->isGuest): ?> 
                                        <li><a href="/account/sign-in/login"><?= Yii::t('appmenu', 'Login')?></a></li>
                                        <li><a href="/account/sign-in/signup"><?= Yii::t('appmenu','Register');?></a></li>
                                    <?php endif; ?>
                                    <li class="text-center">
                                        <?php
                                        echo \lajax\languagepicker\widgets\LanguagePicker::widget([
                                            'skin' => \lajax\languagepicker\widgets\LanguagePicker::SKIN_BUTTON,
                                            'size' => \lajax\languagepicker\widgets\LanguagePicker::SIZE_LARGE
                                        ]);
                                        ?> 
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- Row End -->
            </div>                
        </div>
<?php if($slide == '1'): ?>
        
        <div class="slider_box" >            
            <div class='container'>
                <?php 
                    $images = \backend\modules\sections\classes\JContent::getImage(); 
                ?>
                    <div class="container">
                         
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                           

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                
                                <?php foreach ($images as $k=> $image):?>
                                    <?php if($k==0): ?>
                                        <div class="item active">
                                            <img src="<?= "{$image['view_path']}/{$image['name']}"?>"  alt="<?= $image['detail']?>">
                                            <?php if($image['detail']):?>
                                                <div class="carousel-caption"> 
                                                    <p><?= $image['detail']?></p>
                                                </div>
                                            <?php endif; ?>
                                        </div> 
                                    <?php else:?>
                                        <div class="item">
                                            <img src="<?= "{$image['view_path']}/{$image['name']}"?>"  alt="<?= $image['detail']?>">
                                            <?php if($image['detail']):?>
                                                <div class="carousel-caption"> 
                                                    <p><?= $image['detail']?></p>
                                                </div>
                                            <?php endif; ?>
                                        </div> 
                                    <?php endif; ?>
                                <?php endforeach; ?> 

                            </div>

                            <!-- Left and right controls -->
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                
                
                
                
            </div>
        </div>
        <?php appxq\sdii\widgets\CSSRegister::begin();?>
        <style>
             @media only screen and (min-width:960px){
                .carousel-inner img{
                    width: 1024px;
                    height: 450px !important;
                    margin:0 auto;
                }
                .nivoSlider img {
                    width: 1024px;
                    height: 450px !important;
                }
            }
            .carousel-caption{
                background: #000000b5;border-radius: 3px;  padding:3px;
            }
            .carousel-caption p{
                color:#fff;font-size: 16pt;
            }
            @media only screen and (max-width:768px){
               .carousel-caption p{
                    color:#fff;font-size: 8pt;
                } 
            }
            
        </style>
        <?php appxq\sdii\widgets\CSSRegister::end()?>
<?php endif; ?>
</header>