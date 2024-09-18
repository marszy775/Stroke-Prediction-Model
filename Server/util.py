import json
import pickle
import numpy as np

__data_columns = None
__model = None


def load_saved_artifacts():
    print("Loading saved artifacts...")
    global __data_columns
    global __model

    with open('./artifacts/columns.json', 'r') as f:
        __data_columns = json.load(f)['data_columns']

    with open('./artifacts/stroke_model.pickle', 'rb') as f:
        __model = pickle.load(f)

    print('Loading saved artifacts finished')


def get_predicted_class(age, hypertension, heart_disease, married, avg_glucose_level, children):
    x = np.zeros(len(__data_columns))
    x[0] = age
    x[1] = hypertension
    x[2] = heart_disease
    x[3] = married
    x[4] = avg_glucose_level
    x[5] = children

    if __model.predict([x])[0] == 0:
        return 'This patient is unlikely to get a stroke'
    else:
        return 'This patient is likely to get a stroke'


if __name__ == '__main__':
    load_saved_artifacts()
