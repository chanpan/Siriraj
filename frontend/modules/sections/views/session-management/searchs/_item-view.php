
<?php 
    use yii\helpers\Html;
    $link_url = "/sections/content-management/view-file?content_id={$model->content_id}&file_id={$model->id}&filet_id={$model->file_type}";
    $meta_text = appxq\sdii\utils\SDUtility::string2Array($model['meta_text']);
    
    $content = \backend\modules\sections\classes\JContent::getContentById($model->content_id);
    $breadcrumb = \backend\modules\sections\classes\JSection::getBreadcrumb($content['section_id']);
    
    $breadcrumb[] = ['label' => $content['name'], 'url' => ['/sections/section/content-management?content_id='.$content['id']]];
    //$mb = round(($meta_text['size']/1024)/1024);
    $size = \appxq\sdii\utils\SDUtility::convertToReadableSize($meta_text['size']);
    $fileType = explode('.', $model->file_name);
    $fileType = end($fileType);
    //appxq\sdii\utils\VarDumper::dump(end($fileType));
    $meta_file = "<div class='label label-default'>
                      <label>".Yii::t('section', 'Type')." : {$fileType}</label> &nbsp;&nbsp;
                      <label>".Yii::t('section', 'Size')." : {$size}</label>
                  </div>";
?>
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="box-title"><?= $model->file_name_org?></h3> 
    </div>
    <!-- /.box-header -->
    <div class="panel-body" style="">
        <?php echo janpan\jn\widgets\BreadcrumbsWidget::widget([
            'breadcrumb'=>$breadcrumb
        ]); ?>
        <?php if($model->file_type == "2"):?>
        <a href="<?= $link_url?>" target="_blank">
            <div class="media">
                <div class="media-left">
                  <?= Html::img("{$model['file_path']}/thumbnail/{$model['file_name']}", 
                            [
                                'class'=>'media-object',
                                'style'=>'width:60px'
                            ]);?>
                </div>
                <div class="media-body">
                  <h4 class="media-heading"><?= $model['file_name_org']?></h4>
                  <p><?= backend\modules\sections\classes\JFiles::lengthName($model->description, 150);?></p>  
                  <?= $meta_file?>
                </div>
                
            </div>
        </a>    
        <?php endif; ?>
        <?php if($model->file_type == "3"):?>
        <a href="<?= $link_url?>" target="_blank">
            <div class="media">
                <div class="media-left">
                    <video style='width:95px' class="media-object" controls>
                    <source src='<?php echo "{$model['file_path']}/{$model['file_name']}"; ?>' type='video/mp4'>                 
                        Your browser does not support the video tag.
                  </video>
                </div>
                <div class="media-body">
                  <h4 class="media-heading"><?= $model['file_name_org']?></h4>
                  <?= $meta_file?>
                </div>  
            </div>
        </a>    
        <?php endif; ?>
        
        <?php 
            if($model['file_type'] == '4'){
                echo "
                  <a href='{$link_url}' target='_blank'>
                        <div class='media'>
                            <div class='media-left'>
                                <audio style='width:95px' class='media-object' controls>
                                <source src='{$model['file_path']}/{$model['file_name']}' type='audio/mpeg'>                 
                                    Your browser does not support the video tag.
                                </source>    
                              </audio>
                            </div>
                            <div class='media-body'>
                              <h4 class='media-heading'>{$model['file_name_org']}</h4>
                              {$meta_file}
                            </div>  
                        </div>
                    </a>
                ";
            }else if($model['file_type'] == '5' || $model['file_type'] == '6' || $model['file_type'] == '7'){
                //echo $model['file_type'];
                echo "
                  <a href='{$link_url}' target='_blank'>
                        <div class='media'>
                            <div class='media-left'>
                                <i class='fa fa-file-o' style='font-size:20pt;'></i>
                            </div>
                            <div class='media-body'>
                              <h4 class='media-heading'>{$model['file_name_org']}</h4>
                              {$meta_file}
                            </div>  
                        </div>
                    </a>
                ";
            }
        ?>
    </div> 
</div>