<?php
// 都报出来: error_reporting(11);
// 不要报NOTICE: error_reporting(3);
// 任何错误都不报: error_reporting(0);
// 报所有错误: error_reporting(E_ALL);
// 除了NOTICE,其他都报: error_reporting(E_ALL & ~E_NOTICE);