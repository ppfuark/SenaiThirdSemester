class Vehicle{
  String model;
  String brand;
  String? color;
  

  Vehicle({
    required this.model,
    required this.brand,
    this.color
  });
}
class Car extends Vehicle{
  Car({
    required model,
    required brand,
    color
  }) : super(model: model, brand: brand, color: color);
}


void main(){
  Car car1 = Car(model: "Aff juro", brand: "labubu");
  Car car2 = Car(model: "juro veir", brand: "morango do amor", color: "azul");

    print("${car2.color}");
  }
