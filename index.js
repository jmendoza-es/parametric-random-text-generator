function getRandomText() {
	
  var phs = '';
  var wds = '';
  var wd = '';
  var words = arguments[0];
  var phrases = (arguments[1]) ? arguments[1] : 1;
  var syllables = (arguments[2]) ? arguments[2] : 4;
  var prefix = (arguments[3]) ? arguments[3] : '';
  var suffix = (arguments[4]) ? arguments[4] : '';
  
  // Possible characters
  this.t = ['gü'];
  this.s = ['h'];
  this.d = ['rr','cs','bs','ñ'];
  this.w = ['i','e'];
  this.v = ['a','e','i','o','u'];
  this.x = ['á','é','í','ó','ú'];
  this.c = ['b','d','f','g','j','l','m','n','p','r','s','t','v','z'];

	// Possible combinations
  let m =  [
    {
      algorythm: 'cv',
      coeficient: 0.85
    },          
    {
      algorythm: 'cw',
      coeficient: 0.85
    },      
    {
      algorythm: 'sv',
      coeficient: 0.85
    },
    {
      algorythm: 'dv',
      coeficient: 0.85
    },
    {
      algorythm: 'tw',
      coeficient: 0.85
    }
  ];
  
  var incompatibleAsFirstFragment = ['d','t','s'];
    
  function rand(max, min = 0) {
  	return Math.floor(Math.random() * max) + min;
  }
  
  function fragment() {

		var i;
    var p = m[rand(m.length)];
    var t = p;
    t = t.algorythm.split('');
    var o = '';
    
    for( i = 0 ; i < t.length; i++ ) {  
      let h = t[i];   
      
      if(incompatibleAsFirstFragment.includes(h) && window.e == 0) {
       	h = 'c';
      } else {
       	h = t[i];
      }
      
      let fr = this[h][rand(this[h].length)];
      o += this[h][rand(this[h].length)];
      
    }

    return o;
  }
  
	function word() {
    for( e = 0 ; e < rand(syllables) ; e++ ) {
      wd += fragment().trim();
    }
		
		if(wd.charAt(0) == '') {
    	return word();
    };
    
    return wd;
  }
  
  function phrase() {
    for( a = 0 ; a < words ; a++ ) {  
    	wds += (!a) ? '' : ' ';  
			wds += word();
      wd = '';
    } 
    return prefix + wds.charAt(0).toUpperCase() + wds.slice(1) + suffix;

  }
  
  for( b = 0 ; b < phrases ; b++ ) {
    phs += phrase();
    wds = '';
  }
  
  return phs;

}

// Words - Phrases - Max syllables - Prefix - Suffix
document.write('<ol>' + getRandomText(5, 15, 5, '<li>', '.</li>') + '</ol>'); 



