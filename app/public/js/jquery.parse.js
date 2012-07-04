if(typeof jQuery === 'function' && typeof jQuery.parse === 'undefined' ) jQuery.parse = function($_){
	var i,$R = {};
	$_	= arguments.length === 0 ? location.search : new String($_);
	if( (i = $_.indexOf('?')) != -1 ) $_ = $_.substring(i+1);
	if( (i = $_.indexOf('#')) != -1 ) $_ = $_.substring(0,i);
	jQuery.each( $_.split('&') ,function(){
		var $_  = this.split('=');
		if( typeof $_[0] === 'undefined ' || $_[0] === '') return;
		var $k	= decodeURIComponent($_[0]);
		var $v	= $_.length === 1 ? true : decodeURIComponent($_[1]);
		if( $k.match(/(.+)\[\]$/) ){
			$k = RegExp.$1;
			if( !jQuery.isArray($R[$k]) ) $R[$k] = [];
			$R[$k].push($v);
		}else{
			$R[ $k ] = $v;
		}
	});
	return $R;
};