<?

//Loads libraries (constants)...
$yaml = file_get_contents($mainpath."/constants/commercial_products.yml");
$COMMERCIAL = yaml_parse($yaml);

$yaml = file_get_contents($mainpath."/constants/compounds.yml");
$COMPOUNDS = yaml_parse($yaml);

$yaml = file_get_contents($mainpath."/constants/dosingmethods.yml");
$METHODS = yaml_parse($yaml);


?>