var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){
    
    it('should have all the necessary methods', function(){
      todo.App.prototype.should.have.property('render');
    });

    it('expect the render to be a function', function(){
      expect(todo.App.prototype.render).to.be.a('function');
    });

    it('assert render to a function', function(){
      assert.typeOf(todo.App.prototype.render, 'function');
    });

    it('function should not be a number', function(){
      todo.App.prototype.should.not.be.a('number');
    });

    it('should not equal a function', function(){
      expect(todo.App.prototype.add).to.not.equal('function');
    });

    it('should have property add', function(){
      todo.App.prototype.should.have.property('add');
    });

    it('expect property to have length above 1', function(){
      expect(Object.keys(todo.App.prototype)).to.have.length.above(1);
    });

    it('should be a number', function(){
      todo.util.getUniqueId().should.be.a('number');
    });

  });
});

describe('the todo.util methods', function() {
});
