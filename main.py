from flask import Flask, render_template, request
import calculator  # your calculator.py with addition, subtraction, etc.

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = None  # default when page first loads

    if request.method == "POST":
        try:
            a = request.form["a"]
            b = request.form["b"]
            op = request.form["operation"]

            # If C was pressed or inputs empty, result = 0
            if op == "c" or a.strip() == "" or b.strip() == "":
                result = 0
            else:
                a = float(a)
                b = float(b)

                if op == "add":
                    result = calculator.addition(a, b)
                elif op == "subtract":
                    result = calculator.subtraction(a, b)
                elif op == "multiply":
                    result = calculator.multiplication(a, b)
                elif op == "divide":
                    result = calculator.division(a, b)
                else:
                    result = "Unknown operation"

        except ValueError:
            result = "Invalid input. Enter numbers only."

    return render_template("index.html", result=result)


if __name__ == "__main__":
    app.run(debug=True)