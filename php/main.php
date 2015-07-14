<?php

include_once "config.php";
include_once $path."/php/lib/load_constants.php";
include_once $path."/php/lib/conversions.php";
//Gets input...
//Converts input to object...
$params = new stdClass();
foreach($_POST as $key => $value)
{
	$params->{$key} = $value;
}
// create response object
$json = array();
$json['success'] = false;
///////////////////////
$results = array();
# the Stuff while trying to limit what's global
$tank_vol_calc = unfractionify($params->{"tank_vol"});
$tank_units = $params->{"tank_units"};
$source = $params->{"source"};
$round_to = $params->{"round_to"};
$urea = "";
$pump = "";
$tank_vol_orig  = $tank_vol_calc;
$tank_vol = to_Liters($tank_vol_calc,$tank_units);
$cons = array();
if ($source == "diy") {
	$concentrations = $COMPOUNDS;
	$comp = $params->{"compound"};
	$dose_method = $params->{"method"};
	$dose_units = $params->{"dose_units"};
	$dose_amount = unfractionify($params->{"dose_amount"});
	$target_amount = unfractionify($params->{"target_amount"});
	$calc_for = $params->{"calc_for"};
}
else {
	$concentrations = $COMMERCIAL;
	$comp = $params->{"premix"};
	$dose_method = $params->{"method"};
	$dose_units = $params->{"premix_dose_units"};
	$dose_amount = unfractionify($params->{"premix_dose_amount"});
	$target_amount = unfractionify($params->{"premix_target_amount"});
	$calc_for = $params->{"calc_for"};
	
	
	
}
# we'll populate everything from the constants hash [ cons ]
$pop=$concentrations[$comp];
foreach($pop as $junk => $value) {
	
	if (!$junk) {
		$junk = "N";//This is because of a bug with YAML parser!
	}
	
	if ($junk == 'tsp') {
		$tsp_con = (float)$value;//Float...
	}
	elseif ($junk == 'sol') {
		$solubility = $value;
	}
	elseif ($junk == 'target') {
		$element = $value;
	}
	elseif ($junk == 'urea') {
		$urea = 'yes';
	}
	elseif ($junk == 'pump') {
		$pump = $value;
	}
	else {	
		$cons[$junk] = (float)$value;//Float...
	}
}
$dose_freq = 3;
$pwc = 50;
$pwc_freq = "every week";
# calculations on the onClick optional menu
if ($calc_for == 'dump') {
	$dose_amount = unfractionify($dose_amount);
}
elseif ($calc_for == 'target') {
	$target_amount = unfractionify($target_amount);
	$dose_amount = 0;
}
else {
    # some warnings dependent on method
	if ($calc_for == 'ei') {
		$target_amount = $METHODS[$element]["EI"]["method"];
		$dose_freq = 3;
		$pwc = 50;
		$pwc_freq = "every week";
	}
	elseif ($calc_for == "pps") {
		$target_amount = $METHODS[$element]["PPS"]["method"];
		$dose_freq = 7;
		$pwc = 20;
		$pwc_freq = "every month";
	}
	elseif ($calc_for == "pmdd") {
		$target_amount = $METHODS[$element]["PMDD"]["method"];
		$dose_freq = 7;
		$pwc = 50;
		$pwc_freq = "every two weeks";
	}
	elseif ($calc_for == "wet") {
		$target_amount = $METHODS[$element]["Wet"]["method"];
	}
	elseif ($calc_for == "ei_low") {
		$target_amount = $METHODS[$element]["EI_low"]["method"];
		$dose_freq = 1;
		$pwc = 50;
		$pwc_freq = "every two weeks";
	}
	elseif ($calc_for =="ei_daily") {
		$target_amount = $METHODS[$element]["EI_daily"]["method"];
		$dose_freq = 7;
		$pwc = 50;
		$pwc_freq = "every week";
	}
	$dose_amount = 0;
}
if ($dose_method == 'solution' && $source == 'diy') {
	$sol_vol = unfractionify((float)$params->{"sol_volume"});//Float...
	$sol_dose = unfractionify((float)$params->{"sol_dose"});//Float...
	$dose_calc = $dose_amount * $sol_dose / $sol_vol;
	
	
}
else {
	$sol_vol = 0;
	$sol_dose = 0;
	$dose_calc = $dose_amount;
}
if ($dose_units == 'tsp') {
	$sol_check = $dose_amount * $concentrations[$comp]['tsp'];
}
elseif ($dose_units == 'g') {
	$sol_check = $dose_amount * 1000;
}
else {
	$sol_check = 0;
}
if (preg_match('/RootMedic/', $comp) && preg_match('/pump/', $dose_units)) {
	$dose_calc = $dose_calc * 5;
}
else {
	$dose_calc = to_mg($dose_calc,$dose_units);
}
if ($calc_for == 'dump') {
	foreach ($cons as $conc => $value) {
		$value = (float)$value;
    	$results[$conc] = $dose_calc * $value / $tank_vol;
		$results[$conc] = round($results[$conc], $round_to);
	}
	
	
	$target_amount = $results[$element];
	$mydose = $dose_amount;
	$dose_units = translate_units($dose_units);
}
elseif (preg_match('/target|ei|pps|pmdd|wet|daily|low/', $calc_for)) {
	
	
	$cons_element = (float)$cons[$element];//Float...
	$mydose = $target_amount * $tank_vol / $cons_element;
	$mydose = round($mydose, $round_to);
	
	
	
	if ($dose_method == 'solution') {
		$dose_amount = $mydose * $sol_vol / $sol_dose;
		$sol_check = $dose_amount;
		
		
	}
	else {
		$dose_amount = $mydose;
		
	}
	
	
	
	foreach ($cons as $conc => $values) {
		$values = (float)$values;
		$results[$conc] = $mydose * $values / $tank_vol;
		$results[$conc] = round($results[$conc], $round_to);
	}
	
	
		
	
	# use grams when the output is over 1000 milligrams, liters when >1000 mL, etc
	if ((int)$dose_amount > 1000 && preg_match('/diy/', $source)) {
		$dose_amount = $dose_amount / 1000;
		$dose_amount = ((float)round((float)$dose_amount * expn(10,3))) / expn(10,3);
		$dose_units = "grams";
		
	}
	elseif ((int)$dose_amount > 10000 && preg_match('/premix/', $source)) {
		$dose_amount = $dose_amount / 10000;
		$dose_amount = ((float)round((float)$dose_amount * expn(10,3))) / expn(10,3);
		$dose_units = "Liter";
	}
	elseif ((int)$dose_amount < 10) {
		
		$dose_amount = ((float)round((float)$dose_amount * expn(10,2))) / expn(10,2);
		if (preg_match('/diy/', $source)) {
			$dose_units = "milligrams";
		}
		else {
			$dose_amount = $dose_amount / 10;
			$dose_units = "milliliter";
		}
	}
	else {
	
		
		$dose_amount = round($dose_amount);//FF to round!
		$dose_amount = (int)$dose_amount;
		
		
	  	if (preg_match('/diy/', $source)) {
			$dose_units = "milligrams";
		}
		else {
			$dose_amount = $dose_amount / 10;
			$dose_units = "milliliter";	
		}
	}
	
}
#check solubility
if ($concentrations[$comp]['sol'] && ($sol_vol > 1)) {
  $sol_ref = $concentrations[$comp]['sol'] * 0.8;
  $sol_check = $sol_check / $sol_vol;
  if ( $sol_ref <  $sol_check ) {
	$sol_error = $concentrations[$comp]['sol'];
  }
}
#K3PO4 is tricky
if (preg_match('/K3PO4/', $comp)) {
  $toxic = 'k3po4';
}
#copper toxicity
$cu_toxicity = 0.072;
if ($concentrations[$comp]['Cu']) {
  if((float)$results['Cu'] > $cu_toxicity) {
    $toxic = ( (float)$results['Cu'] - $cu_toxicity ) / $cu_toxicity;
    $less_dose = $dose_amount - ( $dose_amount * $cu_toxicity / (float)$results['Cu']);
    if (preg_match('/\./', $dose_amount)) {
		$less_dose = round($less_dose, 3);
	}
    else {
		$less_dose = (int)$less_dose;
    }
    $percent_toxic = (int)($toxic * 100);
  
	$toxic = 'cu,'.$percent_toxic.",".$comp.",".number_format($less_dose, $round_to).",".$dose_units;
  }
}
if ($urea == "yes") {
  $toxic = 'urea';
}
# EDDHA tints the water red
if (preg_match('/EDDHA/', $comp)) {
  if ((float)$results['Fe'] > 0.002) {
  	$toxic = 'eddha';
  }
}
//Outputs results...
$json['success'] = true;
if (is_decimal($dose_amount)) {
	$json['dose_amount'] = number_format($dose_amount, $round_to);
}
else {
	$json['dose_amount'] = $dose_amount;
}
$json['dose_units'] = $dose_units;
foreach ($results as $key => $value) {
	if (is_decimal($value)) {
		$json[$key] = number_format($value, $round_to);
	}
	else {
		$json[$key] = $value;
	}
}
//$json['debug'] = $debug;
if ($sol_error) {
	$json['sol_error'] = $sol_error;
}
if ($toxic) {
	$json['toxic'] = $toxic;
}
//Target method...
$json['target_ppm'] =  $target_amount;
//Target element...
$json['target_element'] = $concentrations[$comp]['target'];
// encode array $json to JSON string
header('Content-Type: application/json');
echo json_encode($json);
die($encoded);
?>