<?php
namespace backend\modules\cores\classes;
use yii\db\Exception;
use Yii;
class CoreOption {
    public static function findModel($option_name){
        $model = \common\models\Options::find()->where(['option_name'=>$option_name])->one();
        if($model){
            return $model;
        }
    }
    
    /**
     * 
     * @param type $option_name string 
     * @return type array options
     */
    public static function getParams($option_name){
        try{
            $model = self::findModel($option_name);
//            \appxq\sdii\utils\VarDumper::dump($model);
            if($model){
                return $model;
            }
        } catch (Exception $ex) {

        }
    }
    /**
     * 
     * @param type $option_name string 
     * @param type $option_value array
     */
    public static function update($option_name, $option_value){
        try{
            $model = self::findModel($option_name);
            $model->option_value = $option_value;
            $model->save();
        } catch (Exception $ex) {

        }
    }
}
