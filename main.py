from flask import Flask, render_template, request
import calculator

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = None

    if request.method == "POST":
        try:
            a = float(request.form["a"])
            b = float(request.form["b"])
            op = request.form["operation"]

            if op == "add":
                result = calculator.addition(a, b)
            elif op == "subtract":
                result = calculator.subtraction(a, b)
            elif op == "divide":
                result = calculator.division(a, b)
            else:
                result = "Unknown operation"

        except ValueError:
            result = "Invalid input. Enter numbers only."

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
