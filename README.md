# Smart-Charging-and-CNG-Booking-System-for-Sustainable-Transportation

➢ Project Overview:
The project addresses the  problem by introducing an affordable electric vehicle charging 
model. The Project will be implemented using cost-efficient and readily available components 
for the prototype. The system utilizes a codebase comprising Python, Embedded Javascript 
(EJS). Embedded JS contribute to the user interface (front-end), while Python facilitates the 
connection between Hardware Components. Node.js is used as runtime environment that 
allows to run Javascript code outside web browser and MongoDB is used to store data and is a 
popular Database system which is flexible and scalable. The integrated approach ensures an 
efficient and cost-effective electric vehicle charging solution. The main aim of the proposed 
system is to avoid customer spending time in queue. It is done by maintaining a virtual queue 
for each pump. Each pump will have queue of customized slots each of 5 to 10 minutes which 
user can view whichever user want can book it but before booking user must do login. In the 
we have a page Pump Queue were user can view the queue of each pump and accordingly make 
a appointment with pumps having lesser queue.

✅ Hardware requirements: 
•	NodeMCU
•	LCD display
•	Relay  

✅ Software requirements: 
•	IoT cloud(ThingSpeak)
•	Python
•	Embedded Javascript
•	Node.js
•	MongoDB

✅ Programming languages: 
•	Python
•	Javascript

✅ Integrated Development Environment’s (IDE’s):
• Visual Studio Code:
• Arduino IDE:

IMPLEMENTATION
•	Web Application Implementation:
1. Frontend Development:
   	- Use HTML, CSS, and Embedded JS for the user interface.
- Design user-friendly pages for registration, login, selecting options, making payments, booking slots, viewing progress/status, etc.
- Implement interactive features such as maps for route navigation and displaying nearby stations.
2. Backend Development:
  	 - Utilize Node.js and JavaScript for backend logic.
   	- Set up RESTful APIs for communication between frontend and backend.
  	 - Implement user authentication and authorization for secure access.
 - Integrate MongoDB for storing user credentials, transaction details, and other necessary data.
3. Payment Gateway Integration:
 	 - Integrate a payment gateway (e.g., Stripe, PayPal) for handling transactions securely.
4. Route Mapping:
   	- Utilize APIs like Google Maps to implement route mapping functionality.

•	Hardware Component Integration:
1. NodeMCU Setup:
 	- Use Arduino IDE for programming NodeMCU.
- Write firmware in Python for connecting hardware components to the web application.
 2. Relay and Power Supply Module:
- Use the relay to control power supply to the charging station.
- Ensure proper voltage regulation and safety measures with the power supply module.

  3. LED Display:
 - Integrate the LED display to show status updates and process completion alerts.
4. ThinkSpeak Integration:
- Configure NodeMCU to send hardware component data to ThingSpeak server for   storage and monitoring.

•	Integrated Development Environment (IDE):
1. Arduino IDE:
- Use Arduino IDE for programming NodeMCU and interacting with hardware  components.
2. Visual Studio:
- Utilize Visual Studio for backend development, providing a robust development environment.

•	Features Implementation:
1. User Registration and Login:
   	- Implement forms for user registration and login with validation checks.
   	2. Station Selection and Booking:
   	- Allow users to select between EV charging stations and CNG refill stations.
   	- Enable users to book slots based on availability.
3. Nearby Station Locator:
- Integrate APIs for locating nearby recharge and refill stations based on the user's current   location.
4. Payment and Plan Selection:
- Implement payment processing and allow users to select from different plans/packages.
5. Route Mapping and Navigation:
- Integrate maps for displaying routes from the current location to the destination station

6. Progress and Status Updates:
   	- Provide real-time updates on the progress of recharging and refilling processes.
   	- Send alerts upon completion of processes.

•	Hardware Prototype Demonstration:
1. Demonstration Setup:
   	- Set up a hardware prototype to demonstrate the EV charging process.
   	- Ensure all components are properly connected and functional.
2. User Interaction:
   	- Allow users to interact with the hardware prototype during demonstrations.
   	- Display relevant information on the LED display to simulate real-world scenarios.
3. Testing and Debugging:
   	- Conduct thorough testing of the entire system to identify and resolve any issues.
   	- Debug hardware and software components as needed.

 
➢ Objectives:
•	To enable faster adoption of electric vehicles by ensuring safe, reliable, accessible and affordable charging infrastructure and eco-system. 
•	To promote affordable tariff chargeable from EV owners and charging station operators.
•	To proactively support creation of EV charging infrastructure in the initial phase and eventually create a market for EV charging business.
•	To encourage preparedness of electrical distribution system to adopt EV charging infrastructure.
•	The user can locate nearby CNG pump and can book a appointment by maintaining virtual queue for each pump  which is simple and easy to use .
•	To enable users to book appointments for CNG refuelling at their preferred pump stations, to provide a user-friendly interface for easy registration and login, to allow users to select appointment slots based on availability and to facilitate online payment for seamless and secure transactions.


