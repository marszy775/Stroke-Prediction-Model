from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/predict_stroke', methods=['POST'])
def predict_stroke():
    age = int(request.form['age'])
    hypertension = int(request.form['hypertension'])
    heart_disease = int(request.form['heart_disease'])
    avg_glucose_level = float(request.form['avg_glucose_level'])
    married = int(request.form['married'])
    children = int(request.form['children'])

    response = jsonify({
        'predicted_class' : util.get_predicted_class(age, hypertension, heart_disease, married, avg_glucose_level, children)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    print('Starting Python Flask Server For Predicting Stroke...')
    util.load_saved_artifacts()
    app.run()
