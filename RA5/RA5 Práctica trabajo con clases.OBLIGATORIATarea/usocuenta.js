let cuenta1 = new CuentaBancaria("Ana López", "ES123456789", 1000, true);
let cuenta2 = new CuentaBancaria("Carlos Pérez", "ES987654321", 500, true);
let cuenta3 = new CuentaBancaria("Laura Gómez", "ES456123789", 200, false);

cuenta1.mostrarInfo();
cuenta2.mostrarInfo();
cuenta3.mostrarInfo();

// Pruebas de retirada
cuenta1.retirar(200); 
  cuenta2.retirar(600);   