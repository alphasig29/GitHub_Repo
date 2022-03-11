// * ============ DESIGN PATTERNS ============ * \\
// ~~~~~ CREATIONAL PATTERNS ~~~~~ \\
// Module Pattern Demo Start \\
const Counter = (function () {
  let counter = 0;

  return {
    incrementCounter: function () {
      return ++counter;
    },

    resetCounter: function () {
      return (counter = 0);
    },
  };
})();

// Usage:
console.groupCollapsed("Module Pattern");
console.log("Counter.counter:", Counter.counter); // Notice how we don't have direct access to the counter variable

let currCount;

currCount = Counter.incrementCounter();
console.log("currCount after incrementing:", currCount);

currCount = Counter.resetCounter();
console.log("currCount after reset:", currCount);
console.groupEnd();
// Module Pattern Demo End \\

// Builder Pattern Demo Start \\
class Calculator {
  constructor(props) {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
    this.result -= num;
    return this;
  }

  multiply(num) {
    this.result *= num;
    return this;
  }

  divide(num) {
    this.result /= num;
    return this;
  }

  compute() {
    return this.result;
  }
}

// Usage:
let calculator = new Calculator();
let calculator2 = new Calculator();

let expression1 = calculator.add(5).subtract(1).multiply(2).divide(2);
let expression2 = calculator2.add(1).subtract(4).multiply(2).divide(8);

console.groupCollapsed("Builder Pattern");
console.log("result 1:", expression1.result);
console.log("result 2:", expression2.result);
console.groupEnd();
// Builder Pattern Demo End \\

// ~~~~~ STRUCTURAL PATTERNS ~~~~~ \\
// Facade Pattern Demo Start \\
class CPU {
  freeze() {
    // Code here
  }
  jump(position) {
    // Code here
  }
  execute() {
    // Code here
  }
}

class Memory {
  load(pos, data) {
    // Code Here
  }
}

class HardDrive {
  read(lba, size) {
    // Code Here
  }
}

class ComputerFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    console.log("Processor Freeze Success");
    this.ram.load(
      this.BOOT_ADDRESS,
      this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE)
    );
    console.log("Ram Load Success");
    this.processor.jump(this.BOOT_ADDRESS);
    console.log("Processor Jump Success");
    // . . .
    this.processor.execute();
    console.log("Processor Execute Success");
  }
}

// Usage:
console.groupCollapsed("Facade Pattern");
let computer = new ComputerFacade();
computer.start();
console.groupEnd();
// Facade Pattern Demo End \\

// Composites Pattern Demo Start \\
// Component Class
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

// Leaf Subclass
class SoftwareDeveloper extends Employee {
  constructor(name, position) {
    super(name, position);
  }
}
// Leaf Subclass
class FreelanceDesigner extends Employee {
  constructor(name, position) {
    super(name, position);
  }
}

// Composite Subclass
class DevTeamLead extends Employee {
  constructor(name, position) {
    super(name, position);
    this.teamMembers = [];
  }

  addMember(employee) {
    this.teamMembers.push(employee);
  }

  viewTeam() {
    let employeeNames = this.teamMembers.map((member) => member.name);
    return employeeNames;
  }
  // . . .
}

// Usage:
const seniorDev = new SoftwareDeveloper("Rachel", "Senior Developer");
const companyDesigner = new FreelanceDesigner("Joey", "Web Designer");
const teamLead = new DevTeamLead("Regina", "Dev Team Lead");

teamLead.addMember(seniorDev);
teamLead.addMember(companyDesigner);

console.groupCollapsed("Composites Pattern");
console.log("Team members list:", teamLead.viewTeam());
console.groupEnd();
// Composites Pattern Demo End \\

// ~~~~~ BEHAVIORAL PATTERNS ~~~~~ \\
// Observer Pattern Demo Start \\
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((sub) => sub !== fn);
  }

  broadcast(data) {
    this.observers.forEach((sub) => sub(data));
  }
}

// Usage:
const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0);

const wordCountElement = document.createElement("p");

wordCountElement.className = "wordCount";
wordCountElement.innerHTML =
  'Word Count: <strong id="blogWordCount">0</strong>';
document.body.appendChild(wordCountElement);

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
  const blogCount = document.getElementById("blogWordCount");

  blogCount.textContent = getWordCount(text);
});

const blogPost = document.getElementById("blogPost");

blogPost.addEventListener("keyup", () =>
  blogObserver.broadcast(blogPost.value)
);
// Observer Pattern Demo End \\
