import os
import cv2
import numpy as np
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from werkzeug.utils import secure_filename
import openai

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Load the trained model
MODEL_PATH = "model/glaucoma_detection_model.h5"  # Update with your model path
model = tf.keras.models.load_model(MODEL_PATH)

# Set a more sensitive threshold for glaucoma detection
# Lower value = more sensitive (more images classified as glaucoma)
GLAUCOMA_THRESHOLD = 0.35  # Reduced from 0.45 to detect more cases


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


# Custom preprocessing function from training script
def custom_preprocessing(image):
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred_image = cv2.GaussianBlur(gray_image, (65, 65), 0)
    max_intensity_pixel = np.unravel_index(np.argmax(blurred_image), blurred_image.shape)
    radius = 100
    x = max(0, max_intensity_pixel[1] - radius)
    y = max(0, max_intensity_pixel[0] - radius)
    mask = np.zeros_like(image)
    cv2.circle(mask, (x + radius, y + radius), radius, (255, 255, 255), -1)
    roi_image = cv2.bitwise_and(image, mask)
    green_channel = roi_image[:, :, 1]
    clahe_op = cv2.createCLAHE(clipLimit=2)
    roi_image = clahe_op.apply(green_channel)
    roi_image = cv2.cvtColor(roi_image, cv2.COLOR_GRAY2RGB)
    return roi_image


def preprocess_input(image):
    image = cv2.resize(image, (256, 256))
    image = custom_preprocessing(image)
    return image / 255.0


def predict_glaucoma(image_path):
    try:
        # Read image
        image = cv2.imread(image_path)
        if image is None:
            return {"error": "Could not read image"}

        # Preprocess image
        processed_image = preprocess_input(image)

        # Expand dimensions for model input
        input_image = np.expand_dims(processed_image, axis=0)

        # Make prediction
        prediction = model.predict(input_image)[0][0]

        # Determine result using lower threshold for more sensitivity
        is_glaucoma = prediction > GLAUCOMA_THRESHOLD
        result_text = "Glaucoma Present" if is_glaucoma else "No Glaucoma"

        # Calculate confidence (prediction value if >0.5, otherwise 1-prediction)
        confidence = float(prediction) if prediction > 0.5 else float(1 - prediction)

        # Create result object with both previous and new fields to support both frontends
        result = {
            "prediction": "Glaucoma" if is_glaucoma else "Normal",  # From previous code
            "diagnosis": "Glaucoma" if is_glaucoma else "Normal",  # From previous code
            "confidence": confidence,  # From previous code
            "result": result_text,  # For new frontend
            "probability": float(prediction),  # For new frontend
            "class": 1 if is_glaucoma else 0,  # For new frontend
            "raw_prediction": float(prediction),  # Added raw prediction for reference
            "threshold_used": GLAUCOMA_THRESHOLD  # Added threshold used for reference
        }

        print(result)
        return result
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return {"error": str(e)}

openai.api_key = "kLjnNcZdeHvGdrXkIPAQnBBUZ9Nserr0am9uCKC3-IOO_HySglTD2XP-kywkamPpU6GBytrcLiT3BlbkFJr5ElRJdtPMDUsnOoaslPI7aSwsG-GECfbJk0hT60615aE-QzZOi-fOewO2nZ-w58Ki-8UcL44A" 

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Process image and make prediction
        try:
            result = predict_glaucoma(filepath)
            if "error" in result:
                return jsonify(result), 400
            return jsonify(result), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return jsonify({"error": "File type not allowed"}), 400

""""
@app.route('/models', methods=['GET'])
def list_models():
    try:
        models = genai.list_models()
        model_names = [m.name for m in models]
        return jsonify({"models": model_names})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
"""
@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.json
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400
    try:
        response = openai.chat.completions.create(
            model="gpt-4",  # Or "gpt-3.5-turbo"
            messages=[
                {"role": "system", "content": "You are a helpful medical assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )
        generated_text = response.choices[0].message.content
        return jsonify({"generated_text": generated_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5002)  # Run on port 5002 as requested

    
