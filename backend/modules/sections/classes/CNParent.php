<?php
namespace backend\modules\sections\classes;
class CNParent {
    public static $globalTree = [];
    public static function getSectionTree($sectionId){
        ini_set('memory_limit', '-1'); 
        //$section = \common\models\Sections::find()->where('parent_id=0 AND id <> 0 AND rstat <> 3')->asArray()->all();
          
//        foreach ($section as $section) {
//            self::buildTree($section['id'], 0);
//        }
        //\appxq\sdii\utils\VarDumper::dump($section);
        self::buildSectionTree($sectionId, 1);
        return self::$globalTree;

    }
    public static function buildSectionTree($section, $level)
    {
        $rootNode = \common\models\Sections::find()->where('id=:id', [':id'=>$section])->asArray()->one();
        $childNodes = \common\models\Sections::find()->where('parent_id = :parent_id AND id <> :id AND rstat not in(0,3) ',[':parent_id'=>$rootNode['id'], ':id'=>$rootNode['id']])->asArray()->all();
        if(count($childNodes) < 1) {
            return 0;
        } else {
            $childLvl = $level + 1; 
            //self::$globalTree['parent'] = $rootNode;
            foreach ($childNodes as $childNode) {
                $id = $childNode['id'];
                $childLevel = isset(self::$globalTree[$id])? max(self::$globalTree[$id]['level'], $level): $level;
                $depth = ['level' => $childLevel];
                self::$globalTree[] = array_merge($childNode, $depth);
                self::buildSectionTree($id, $childLvl);
            }
            
        }
    }
    public static function deleteSection($sectionID){
        $dataSectionTree = CNParent::getSectionTree($sectionID);
        foreach($dataSectionTree as $k =>$v){
            $section = \common\models\Sections::findOne($v['id']);
            $section->rstat = '3';
            if($section->save()){
                $contents = \common\models\Contents::find()->where(['section_id'=>$v['id']])->all();
                foreach($contents as $c){
                    $c->rstat = '3';
                    $files = \common\models\Files::find()->where(['content_id'=>$c['id']])->all();
                    foreach($files as $f){
                        $f->rstat = '3';
                        $f->save();
                    }
                }
            }
        } 
    }
}