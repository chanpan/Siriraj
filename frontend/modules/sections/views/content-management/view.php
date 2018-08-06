<?php

use yii\bootstrap\Html;
use kartik\tabs\TabsX;

$this->title = Yii::t('section', $title);
if ($breadcrumb) {
    foreach ($breadcrumb as $b) {
        $this->params['breadcrumbs'][] = $b;
    }
}
$modal = "modal-contents";
?>
<?php foreach ($file_type as $key => $f): ?>
    <?php if ($key > 0): ?>
        <div class="row">
            <div class="col-md-12">
                <div class="box box-primary">
                     
                    <div class="box-body">
                        <div id="files_<?= $f['id'] ?>" data-id='<?= $f['id'] ?>'></div>
                    </div>                     
                    <div class="box-footer read-all">
                        <div class="text-center">
                          <?=  Html::a('<< View All >>',"/sections/content-management/view-file?content_id={$_GET['content_id']}&file_id=&filet_id={$f['id']}" , [
                                'id'=>"btn-{$f['id']}",
                                'data-action'=>'view-file',
                                'class'=>'content-popup btnCall',
                                'data-id'=>$f['id'],
                                 
                            ]);?>
                             
                        </div>
                    </div>
                     
                </div>
            </div> 
        </div>
        <?php \richardfan\widget\JSRegister::begin(); ?>
        <script>
             
             
            load_data = function () {
                let url = '/sections/content-management/view-data-content'
                let content_id = "<?= Yii::$app->request->get('content_id') ?>";
                let select_id = "files_<?= $f['id'] ?>";

                let params = {content_id: content_id, type_id: "<?= $f['id'] ?>"};
                $.get(url, params, function (data) {
                    $('#' + select_id).html(data);
                });
                return false;

            }
            load_content_data = function () {
                let url = '/sections/content-management/get-count-data'
                let content_id = "<?= Yii::$app->request->get('content_id') ?>";
                let select_id = "label_<?= $f['id'] ?>";

                let params = {content_id: content_id, type_id: "<?= $f['id'] ?>"};
                $.get(url, params, function (data) {
                    $('#' + select_id).html(data);
                });
                return false;

            }
            load_content_data();
            load_data();            
            
        </script>
        <?php \richardfan\widget\JSRegister::end(); ?>
    <?php endif; ?>
<?php endforeach; ?> 

<?php \appxq\sdii\widgets\CSSRegister::begin(); ?>
<style>
    .box.box-primary {
        border: none;
        box-shadow: 0px 0px 1px #cacaca;
    }
</style>
<?php \appxq\sdii\widgets\CSSRegister::end(); ?>