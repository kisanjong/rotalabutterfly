<?

//Loads libraries (constants)...
$yaml = file_get_contents($path."/constants/commercial_products.yml");
$COMMERCIAL = yaml_parse($yaml);

$yaml = file_get_contents($path."/constants/compounds.yml");
$COMPOUNDS = yaml_parse($yaml);

$yaml = file_get_contents($path."/constants/dosingmethods.yml");
$METHODS = yaml_parse($yaml);


?>