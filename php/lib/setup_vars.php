<?
$cleanURL = str_replace($domain, "", $_SERVER['REQUEST_URI']);
$GLOBcleanQUERY = preg_replace("/^.+\?/", "", $cleanURL);

?>