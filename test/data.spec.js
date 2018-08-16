describe('funcioness.saldo(infobip)', () => {
  it('fuciones saldo debo ver resultado', () => {
    let saldos = saldo("$3","2");
    assert.equal(saldos, 1, 'suma(3,2) es 1')
  })
describe('saldo', () => {
  it('debería saldo() ser una funcion', () => {
    assert.isFunction(saldo);
    })
  });
})
describe('obtenerDatos()', () => {
  it('deberia devolver ok si es una funcion', ()=>{
    assert.isFunction(obtenerDatos)
  })
})
describe("login()", () => {
  it("debería devolver ook si login funciona", () => {
      assert.isOk(loginfirebase)
  })
});
describe("cerrarSesion()", () => {
  it("debería devolver ook si cerrarSesion funciona", () => {
      assert.isOk(cerrarSesion)
  })
});
describe("registro()", () => {
  it("debería devolver ook si registro funciona", () => {
      assert.isOk(registrofirebase)
  })
});








