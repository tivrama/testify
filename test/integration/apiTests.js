
describe('API integration', function(){
  var server, setupStub, JSONresponse;

  it('todo.setup receives an array of todos when todo.init is called', function () {
    
    // Fake JSON response
    JSONresponse = { name: 'testsssssss1',  done: true, todos: [1,2,3,4,5,6,77]};

    // Object which makes a fake GET request
    var object = {
      method: function(json) {
        // Creates a fake server
        var server = sinon.fakeServer.create();

        // Forces our fake server to respond with the following
        server.respondWith('GET', 'http://localhost:3000/todos', [
          200,
          {'Content-Type': 'application/json'},
          JSON.stringify(json)
        ]);
        
        // Creates a stub for todo.setup
        setupStub = sinon.stub(todo, "setup");

        //Invoke todo.init with false
        todo.init(false);

        // Makes our fake server respond
        server.respond();

        // Check if res.todos is an array
        sinon.assert.calledWith(setupStub, sinon.match.array);
       
        // Restores setup stub
        setupStub.restore();

      }
    };
  });
});
