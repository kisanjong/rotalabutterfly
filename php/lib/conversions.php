<?php
//Conversions functions translated from Wet's original conversions.rb file...

function to_Liters($vol,$units) {

	$vol = (float)$vol;

	if (preg_match('/gal/', $units)) {
		$vol = ($vol * 3.78541178);
	}
	elseif (preg_match('/^(milli|m)L?/', $units)) {
		 $vol = $vol / 1000;
	}
   
    return $vol;
}

function to_mg($mass,$units) {
	
	global $COMPOUNDS, $comp;
	
	$mass = (float)$mass;
	
	if (preg_match('/teaspoon|tsp/', $units)) {
		 $mass *= $COMPOUNDS[$comp]['tsp'];
	}
	elseif (preg_match('/^g(rams)?$/', $units)) {
		 $mass *= 1000;
	}
	elseif (preg_match('/^(milli|m)L/', $units)) {
		 $mass *= 10;
	}
	elseif ($units == 'pump') {
		 $mass *= 12;
	}
	elseif ($units == 'cap') {
		 $mass *= 50;
	}
	
    return $mass;

}

function unfractionify($value) {
	if (!$value) {
		return '';
	}
	
	if (!is_numeric($value)) {
		$value = str_replace(",", ".", $value);
	}
	
	//is it a fraction
	if (preg_match('/^(\d+\s*\d?)\/(\d+)$/', $value)) {
		list ($num, $den) = split("/", $value);
		
		 //is it a number like 1 1/2
		if (preg_match('/^(\d+)\s+(\d+)$/', $num)) {
			list($wholenumber, $num) = split(" ", $num);
			$wholenumber = (int)$wholenumber;
			$num = (float)$vol;
			$value = $wholenumber + ( $num / $den );
		}
		else {
			$num = (float)$num;
			$value = $num/$den;
		}
	}
	
	return (float)$value;	

}


//Added by Fabrizio on Jun 2015...

function expn($number, $exponentiation) {
	
	for ($i=1;$i<$exponentiation;$i++) {
		$number *= $number;
	}
	
	return $number;
}

function is_decimal( $val )
{
    return is_numeric( $val ) && floor( $val ) != $val;
}


?>