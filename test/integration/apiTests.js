
describe('API integration', function(){
  var server, setupStub, JSONresponse;

  it('todo.setup receives an array of todos when todo.init is called', function () {
    var object = {
      method: function(json) {
        console.log('json', json);
        // Creates a fake server
        var server = sinon.fakeServer.create();

        // Forces our fake server to respond with the following
        server.respondWith('GET', 'http://localhost:3000/todos', [
          200,
          {'Content-Type': 'application/json'},
          // JSON.stringify([{ name: 'SINON TESTTTT',  done: true}])
          JSON.stringify(json)
        ]);

        //Invoke todo.init with false
        todo.init(false);

        // STUB: then check todo.app.items -> check if an []
        // Creates a stub for todo.setup
        setupStub = sinon.stub(todo, 'setup');

        // Makes our fake server respond
        server.respond();
        // Restores setup stub
        setupStub.restore();
        
      }
    };

    // Creates a before spy
    // var spy1 = sinon.spy(object, 'method');
    // spy1('hello');
    // assert(spy1.withArgs([{ name: 'testsssssss1',  done: true}]));
    // spy1.assert.calledWith([{ name: 'testsssssss1',  done: true}])
    // Creates an after spy
    var spy2 = sinon.spy(object, 'method');
    sinon.assert.calledWith(spy2, [{ name: 'testsssssss2',  done: true}])
    // assert(spy2.withArgs([{ name: 'testsssssss2',  done: true}]));
    // assert(stub.calledBefore(spyInit));
    // assert(stub.calledBefore(spySetup));




    //spy.calledBefore 
    //create setupStub to ensure to.setup doesn't create a new app
    
    

    // spy.calledBefore(spy);

    // spy.calledAfter(spy);

    // Restore the spy back to its original state
    // spy.restore();

  });
});
