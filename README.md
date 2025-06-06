# 👁️ GlaucoLens

**GlaucoLens** is a web-based glaucoma detection system that leverages image processing and deep learning to analyze retinal (fundus) images. The frontend is built using **React.js**, and the backend uses **Python** with a deep learning model trained in **Jupyter Notebook**.

---

## 📌 Features

- Upload and analyze retinal images for glaucoma detection
- Deep learning-based classification using TensorFlow/Keras
- Image preprocessing with OpenCV
- Frontend built in React.js
- Backend API for prediction using Flask
- Model training in Jupyter Notebook

---

## 🛠️ Technologies Used

**Frontend:**
- React.js
- JavaScript
- Axios
- HTML/CSS

**Backend:**
- Python 3.8+
- Flask
- TensorFlow / Keras
- OpenCV
- NumPy
- Pandas
- Jupyter Notebook

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MilniChandrasekara/GlaucoLens.git
cd GlaucoLens
```

### 2️⃣ Backend Setup (Python)
### Install Required Python Packages:

```bash
pip install flask
pip install tensorflow
pip install opencv-python
pip install numpy
pip install pandas
```
### Run the Backend Server:

```bash

cd backend
python app.py
```
### 3️⃣ Frontend Setup (React.js)

```bash
cd frontend
npm install
npm start
```
### 4️⃣ Train the Model (Optional)

```bash

cd model_training
jupyter notebook train_model.ipynb
```
### Make sure you have Jupyter installed:

```bash

pip install notebook
```
