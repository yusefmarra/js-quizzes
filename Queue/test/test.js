var expect = chai.expect;
// var should = chai.should();

var q = new Queue();


describe('Queue', function() {
  it('Should queue some value, and return the value', function() {
    q.queue(5);
    expect(q.deQueue()).to.equal(5);
  });

  it('Should be FIFO', function() {
    q.queue(5);
    q.queue(6);
    q.queue(7);
    expect(q.deQueue()).to.equal(5);
    expect(q.deQueue()).to.equal(6);
    expect(q.deQueue()).to.equal(7);
  });

  it('Should behave the same when alternating queue and deQueue', function() {
    q.queue(11);
    q.queue(40);
    q.queue(3);
    q.queue(97);
    expect(q.deQueue()).to.equal(11);
    q.queue(11);
    expect(q.deQueue()).to.equal(40);
    expect(q.deQueue()).to.equal(3);
    expect(q.deQueue()).to.equal(97);
    q.queue('FINAL VALUE');
    expect(q.deQueue()).to.equal(11);
    expect(q.deQueue()).to.equal('FINAL VALUE');
  });
});
