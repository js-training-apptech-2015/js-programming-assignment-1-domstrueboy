describe("solution1", function(){
  // A < B; C > 0;
  it("A = 2, B = 3, C = 4: результат = 1", function() {
    assert.equal(solution1(2, 3, 4), 1);
  });

  it("A = 20.5, B = 65, C = 4.1: результат = 11", function() {
    assert.equal(solution1(20.5, 65, 4.1), 11);
  });

  it("A = 70, B = 65, C = 4.1: результат = null", function() {
    assert.equal(solution1(70, 65, 4.1), null);
  });

  it("A = 20.5, B = 65, C = -11: результат = null", function() {
    assert.equal(solution1(20.5, 65, -11), null);
  });

  it("A = 20.5, B = '65.5blabla', C = 4.1: результат = 11", function() {
    assert.equal(solution1(20.5, "65.5blabla", 4.1), 11);
  });

  it("A = 70, B = '65.7abc', C = -4.1: результат = null", function() {
    assert.equal(solution1(70, '65.7abc', -4.1), null);
  });

  it("A = 0, B = '0', C = 0: результат = null", function() {
    assert.equal(solution1(0, '0', 0), null);
  });

});
