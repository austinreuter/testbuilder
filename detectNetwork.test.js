/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.



/*var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '01234567890123')).to.equal('MasterCard');
      });
    })(prefix)
  }
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
    it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6501234567890123')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6501234567890123456')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011012345678901')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011012345678901234')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '0123456789012')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '0123456789012345')).to.equal('Discover');
      });
    })(prefix)
  }
});


describe('Maestro', function() {
  var expect = chai.expect;
  for (var len = 12, i = ''; len <= 19; len++, i += '0') {
    (function(len, i) {
      it('has a prefix of 5018 and a length of ' + len, function() {
        expect(detectNetwork('501801234567' + i.toString())).to.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + len, function() {
        expect(detectNetwork('502001234567' + i.toString())).to.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + len, function() {
        expect(detectNetwork('503801234567' + i.toString())).to.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + len, function() {
        expect(detectNetwork('630401234567' + i.toString())).to.equal('Maestro');
      });
    })(len, i)
  }

});

describe('should support China UnionPay', function() {
  var expect = chai.expect;
  var prefix;
  var len;
  var i;
  for (prefix = 624; prefix <= 626; prefix++) {
    for (len = 16, i = ''; len <= 19; len ++, i += '0') {
      (function(prefix, len, i) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(prefix.toString() + '1234567890123' + i.toString())).to.equal('China UnionPay')
        })
      })(prefix, len, i)
    }
  }

  for (prefix = 6282; prefix <= 6288; prefix++) {
    for (len = 16, i = ''; len <= 19; len ++, i += '0') {
      (function(prefix, len, i) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(prefix.toString() + '123456789012' + i.toString())).to.equal('China UnionPay')
        })
      })(prefix, len, i)
    }
  }

  for (prefix = 622126; prefix <= 622925; prefix++) {
    for (len = 16, i = ''; len <= 19; len ++, i += '0') {
      (function(prefix, len, i) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(prefix.toString() + '1234567890' + i.toString())).to.equal('China UnionPay')
        })
      })(prefix, len, i)
    }
  }
})
describe('should support Switch', function() {
  var expect = chai.expect;
  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911567890123456')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936567890123456')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333567890123456')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759567890123456')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641827890123456')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331107890123456')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490356789012345600')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490556789012345600')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491156789012345600')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493656789012345600')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633356789012345600')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675956789012345600')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182789012345600')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110789012345600')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903567890123456000')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905567890123456000')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911567890123456000')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936567890123456000')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333567890123456000')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759567890123456000')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641827890123456000')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331107890123456000')).to.equal('Switch');
  });
})


