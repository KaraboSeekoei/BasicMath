import calculator

def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Invalid number. Try again.")

while True:
    operation = input("Operation (add/subtract/multiply/divide or exit): ").strip().lower()

    if operation == "exit":
        print("Goodbye!")
        break

    a = get_int("Enter first number: ")
    b = get_int("Enter second number: ")

    if operation == "add":
        result = calculator.addition(a, b)
    elif operation == "subtract":
        result = calculator.subtraction(a, b)
    elif operation =="multiply":
        result = calculator.multiplication(a, b)
    elif operation == "divide":
        result = calculator.division(a, b)
    else:
        print("Unknown operation")
        continue

    print("Result:", result)
