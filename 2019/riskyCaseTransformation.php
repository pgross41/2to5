; cerner_2^5_2019

// Transform a string to upper case (accurate if string only contains lower case letters!)
function riskyToUpperCase($str){
	return join(array_map(function($char){
		return chr(ord($char) - 32);
	}, str_split($str)));
}

// Transform a string to lower case (accurate if string only contains upper case letters!)
function riskytoLowerCase($str){
	return join(array_map(function($char){
		return chr(ord($char) + 32);
	}, str_split($str)));
}
