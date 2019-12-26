<?php
// 1.邮箱验证
$email='1515212@qq';
$preg_email='/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+[-.])+([a-z]{2,5})$/ims';
if(preg_match($preg_email,$email)){
    echo 1;
}else{
    echo 0;
}

// 2.验证手机号
$phone='13651121610';
$preg_phone='/^1[34578]\d{9}$/ims';

// 3.验证固定号码
$call='02312345678';
$preg_call='/^(0\d{2,3})?(\d{7,8})$/ims';

// 4.验证只包含中英文的名字
$name='dfdd';
$preg_name='/^[\x{4e00}-\x{9fa5}]{2,10}$|^[a-zA-Z\s]*[a-zA-Z\s]{2,20}$/isu';

// 5.验证身份证号码
$IDCard='';
$preg_card='/^\d{15}$)|(^\d{17}([0-9]|X)$/isu';

// 6.验证银行卡号
$bankcard='';
$preg_bankcard='/^(\d{15}|\d{16}|\d{19})$/isu';

// 7.验证QQ号码
$QQ='';
$preg_QQ='/^\d{5,12}$/isu';

// 8.验证微信号
$wechat='cdxcfvsd515d5___1';
$preg_wechat='/^[_a-zA-Z0-9]{5,19}+$/isu';

// 9.验证特殊符号(如需要验证其他字符，自行转义 "\X" 添加)
$spacial='^%**Y*(';
$preg_spacial="/\/|\~|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\+|\{|\}|\:|\<|\>|\?|\[|\]|\,|\/|\;|\\' | \`|\-|\=|\\\|\|/isu";