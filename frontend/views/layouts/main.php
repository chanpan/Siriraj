<?php

use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use frontend\models\NavItem;
use lo\modules\noty\Wrapper;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
janpan\jn\assets\JScrollbarAssets::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body  >
<?php $this->beginBody() ?>

<div class="wrap">
    <?php NavBar::begin([
        'brandLabel' => Html::img('/images/logo.png',['class'=>'rounded', 'style'=>'width:36px;']),
        'renderInnerContainer' => false,
        'options' => [
            'class' => 'navbar navbar-dark bg-primary navbar-expand-md fixed-top' 
        ]
        
    ]);
    $menuItems = [
        ['label' => Yii::t('frontend', 'Articles'), 'url' => ['/article/index']],
        [
            'label' => Yii::t('frontend', 'Users'),
            'url' => ['/account/default/users'],
            'visible' => !Yii::$app->user->isGuest,
        ],
        ['label' => Yii::t('frontend', 'Contact'), 'url' => ['/site/contact']],
    ];
    if (Yii::$app->user->isGuest) {
        $menuItems[] = ['label' => Yii::t('frontend', 'Login'), 'url' => ['/account/sign-in/login']];
    } else {
        $menuItems[] = [
            'label' => Yii::$app->user->identity->username,
            'url' => '#',
            'items' => [
                ['label' => Yii::t('frontend', 'Settings'), 'url' => ['/account/default/settings']],
                [
                    'label' => Yii::t('frontend', 'Backend'),
                    'url' => env('BACKEND_URL'),
                    'linkOptions' => ['target' => '_blank'],
                    'visible' => Yii::$app->user->can('administrator'),
                ],
                [
                    'label' => Yii::t('frontend', 'Logout'),
                    'url' => ['/account/sign-in/logout'],
                    'linkOptions' => ['data-method' => 'post'],
                ],
            ],
        ];
    }
    echo Nav::widget([        
        'options' => ['class' => 'nav navbar-nav ml-auto'],
        'items' => ArrayHelper::merge(NavItem::getMenuItems(), $menuItems),
    ]);
    NavBar::end() ?>
    <div>
        <?=         Breadcrumbs::widget([
                    'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
    </div>
    <div class="container-fluid" id="container">       
        <?= Wrapper::widget() ?>
        <?= $content ?>
    </div>
</div>

<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                &copy; หน่วยงานของฉัน <?= date('Y') ?>
            </div>
            <div class="col-6 text-right">
                
            </div>
        </div>

    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
