<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace janpan\jn\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class EzfAsset extends AssetBundle {

    public $sourcePath='@janpan/jn/assets';
    
    public $css = [
	//'css/condition.css',
	//'css/dad/jquery.dad.css',
	'css/ezform.css?9911234',
	//'css/jloading.css',
        'css/waitMe.min.css',
	//'css/fontawesome-iconpicker.min.css',
    ];
    public $js = [
	//'js/jscondition.js',
	//'js/dad/jquery.dad.js',
	'js/dad/jquery.nicescroll.min.js',
	//'js/jloading.js',
        'js/waitMe.min.js',
	//'js/fontawesome-iconpicker.min.js',
        'js/ezform-custom.js?91919',
    ];
    public $depends = [
	'yii\web\YiiAsset',
	'janpan\jn\assets\EzfTopAsset'
    ];

}
