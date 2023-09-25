const chai = require("chai"); // 1
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js"); // 2

describe("#shouldBuyCar()", function () {
  // 3

  it(" should return true when the car is pink", function () {
    // 4
    const car = {
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  // 3
  it("should return false when there are no details about the car", function () {
    // 4
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  // 3
  it("should return false if it's a hatchback", function () {
    // 4
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

it(" should return false when the car is a hatchback and pink", function () {
  // 4
  const car = {
    color: "pink",
    type: "hatchback",
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
});

describe("#shouldBuyCar()", function () {
  // 3

  it(" should return true when the car has 6 litres/100km and is under or equal to $5,000", function () {
    // 4
    const car = {
      
      litresPer100km: 6,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});


describe("#shouldBuyCar()", function () {
  // 3

  it(" should return true when the car has 11 litres/100km and is under or equal to $5,000", function () {
    // 4
    const car = {
      
      litresPer100km: 11,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});


describe("#shouldBuyCar()", function () {
  // 3

  it(" should return false when the car has 6 litres/100km and is over $5,000", function () {
    // 4
    const car = {
     
      litresPer100km: 6,
      price: 6000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});


describe("#shouldBuyCar()", function () {
  // 3

  it("should return false when the car has 11 litres/100km and is over $5,000", function () {
    // 4
    const car = {
      litresPer100km: 11,
      price: 6000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  // 3

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function () {
    // 4
    const car = {
      litresPer100km: 5,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  // 3

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function () {
    // 4
    const car = {
      litresPer100km: 12,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  // 3

  it("should return undefined when there is no car", function () {
    // 4
    const car = undefined;
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });
});