interface Airplane {
  model: string;
  passengerCapacity: number;
  rangeInKm: number;
  isJet: boolean;
}
const fleet: Airplane[] = [
  {
    model: "Airbus A350-900",
    passengerCapacity: 325,
    rangeInKm: 15000,
    isJet: true,
  },
  {
    model: "ATR 72-600",
    passengerCapacity: 72,
    rangeInKm: 1500,
    isJet: false,
  },
];

fleet.forEach((plane) => {
  console.log("Modell:", plane.model);
  console.log("Passagierkapazität:", plane.passengerCapacity);
  console.log("Reichweite:", plane.rangeInKm, "km");
  console.log("Triebwerk:", plane.isJet ? "Jet" : "Propeller");
});

const models = fleet.map((plane) => plane.model);
console.log("Flugzeugmodelle:", models);

const jets = fleet.filter((plane) => plane.isJet);
console.log("Flugzeuge mit Jet-Triebwerk:", jets);
