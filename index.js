function getRandomText() {

  var phs = '';
  var wds = '';
  var wd = '';
  var words = arguments[0];
  var phrases = arguments[1] || 1;
  var syllables = arguments[2] || 4;
  var prefix = arguments[3] || '';
  var suffix = arguments[4] || '';

  // Possible characters
  var characters = {
    t: ['gü'],
    s: ['h'],
    d: ['rr', 'cs', 'bs', 'ñ'],
    w: ['i', 'e'],
    v: ['a', 'e', 'i', 'o', 'u'],
    x: ['á', 'é', 'í', 'ó', 'ú'],
    c: ['b', 'd', 'f', 'g', 'j', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z']
  };

  // Possible combinations
  var algorithms = [
    { algorithm: 'cv', coefficient: 0.85 },
    { algorithm: 'cw', coefficient: 0.85 },
    { algorithm: 'sv', coefficient: 0.85 },
    { algorithm: 'dv', coefficient: 0.85 },
    { algorithm: 'tw', coefficient: 0.85 }
  ];

  var incompatibleAsFirstFragment = ['d', 't', 's'];

  function rand(max, min = 0) {
    return Math.floor(Math.random() * max) + min;
  }

  function fragment() {
    var p = algorithms[rand(algorithms.length)];
    var t = p.algorithm.split('');
    var o = '';

    for (var i = 0; i < t.length; i++) {
      var h = t[i];

      if (incompatibleAsFirstFragment.includes(h) && wd === '') {
        h = 'c';
      }

      o += characters[h][rand(characters[h].length)];
    }

    return o;
  }

  function word() {
    for (var e = 0; e < syllables; e++) {
      wd += fragment().trim();
    }

    if (wd === '') {
      return word();
    }

    return wd;
  }

  function phrase() {
    for (var a = 0; a < words; a++) {
      wds += (a === 0) ? '' : ' ';
      wds += word();
      wd = '';
    }
    return prefix + wds.charAt(0).toUpperCase() + wds.slice(1) + suffix;
  }

  for (var b = 0; b < phrases; b++) {
    phs += phrase();
    wds = '';
  }

  return phs;
}

// Words - Phrases - Max syllables - Prefix - Suffix
document.write('<ol>' + getRandomText(5, 15, 5, '<li>', '.</li>') + '</ol>');
