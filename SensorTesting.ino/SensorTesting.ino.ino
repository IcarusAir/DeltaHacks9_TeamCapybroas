//Constants
const int pResistor = A0; // Photoresistor at Arduino analog pin A0
const int tempAndHumidity = A1; //Temperature and Humidity
const int waterLevel = A2;
const int ledPin=9;       // Led pin at Arduino pin 9

//Variables
int value_PR;				  // Store value from photoresistor (0-1023)
int value_TNH;
int value_WL;

void setup(){
 pinMode(pResistor, INPUT);        //Set pResistor - A0 pin as an input (optional)
 pinMode(tempAndHumidity, INPUT);  //Set tempAndHumidity - A1 pin as an input (optional)
 pinMode(waterLevel, INPUT);       //Set waterLevel - A2 pin as an input (optional)
}

void loop(){
  //Photoresistor
  value_PR = analogRead(pResistor);

  //Temperature and Humidity
  value_TNH = analogRead(tempAndHumidity);

  //Water Level
  value_WL = analogRead(waterLevel);

  //Output sensor data at time X
  Serial.println("-------------------------------------------------------------");
  Serial.println("Value of pResistor: " + value_PR);
  Serial.println("Value of tempAndHumidity: " + value_TNH);
  Serial.println("Value of waterLevel: " + value_WL);

  delay(500); //Decent delay
}
