const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Your MongoDB connection file
const getQuizModel = require('./models/QuizQuestion'); // The dynamic model function

// Connect to the database
connectDB();

const seedQuestions = async () => {
  // Get the model for the "machinelearning" collection
  const MLQuiz = getQuizModel('machinelearning');

  const questions = [
    // supervised-learning Questions
    {
      topic: "machinelearning",
      subtopic: "supervised-learning",
      question: "What is supervised-learning primarily used for?",
      options: ["Clustering", "Classification", "Anomaly Detection", "Dimensionality Reduction"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "supervised-learning",
      question: "Which of the following is a common algorithm used for classification?",
      options: ["K-Means", "Linear Regression", "Decision Trees", "PCA"],
      correctAnswer: 2,
    },
    {
      topic: "machinelearning",
      subtopic: "supervised-learning",
      question: "In supervised-learning, what is the main role of the target variable?",
      options: ["To predict the input data", "To evaluate the model", "To provide labels for training", "To optimize features"],
      correctAnswer: 2,
    },
    {
      topic: "machinelearning",
      subtopic: "supervised-learning",
      question: "Which of the following is NOT a type of supervised-learning?",
      options: ["Regression", "Clustering", "Classification", "Time Series Forecasting"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "supervised-learning",
      question: "What metric is commonly used to evaluate classification models?",
      options: ["Mean Squared Error", "Accuracy", "Silhouette Score", "Adjusted R²"],
      correctAnswer: 1,
    },

    // Unsupervised-learning Questions
    {
      topic: "machinelearning",
      subtopic: "unsupervised-learning",
      question: "What is the primary goal of unsupervised-learning?",
      options: ["To predict outcomes", "To find hidden patterns", "To classify data", "To optimize features"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "unsupervised-learning",
      question: "Which of the following algorithms is commonly used for clustering?",
      options: ["K-Means", "Linear Regression", "SVM", "Decision Trees"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "unsupervised-learning",
      question: "What does dimensionality reduction accomplish?",
      options: ["Increases features", "Reduces complexity", "Improves accuracy", "Prevents overfitting"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "unsupervised-learning",
      question: "Which of the following is a method for dimensionality reduction?",
      options: ["K-Means", "Principal Component Analysis (PCA)", "Linear Regression", "Logistic Regression"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "unsupervised-learning",
      question: "What type of output does unsupervised-learning produce?",
      options: ["Labeled data", "Clusters", "Predictions", "Errors"],
      correctAnswer: 1,
    },

    // neural-networks Questions
    {
      topic: "machinelearning",
      subtopic: "neural-networks",
      question: "What is the primary function of an activation function in a neural network?",
      options: ["To initialize weights", "To introduce non-linearity", "To compute loss", "To propagate errors"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "neural-networks",
      question: "Which of the following is a popular activation function?",
      options: ["ReLU", "Tanh", "Sigmoid", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "machinelearning",
      subtopic: "neural-networks",
      question: "What is the purpose of backpropagation in neural-networks?",
      options: ["To train the network", "To evaluate performance", "To initialize weights", "To modify the architecture"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "neural-networks",
      question: "Which component of a neural network is responsible for learning patterns?",
      options: ["Input layer", "Hidden layer", "Output layer", "Bias"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "neural-networks",
      question: "What is the effect of overfitting in a neural network?",
      options: ["Good generalization", "Poor performance on unseen data", "Faster training time", "Increased accuracy"],
      correctAnswer: 1,
    },

    // natural-language-processing Questions
    {
      topic: "machinelearning",
      subtopic: "natural-language-processing",
      question: "What is tokenization in NLP?",
      options: ["Dividing text into sentences", "Counting words", "Converting words to numbers", "Removing stop words"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "natural-language-processing",
      question: "Which technique is commonly used for sentiment analysis?",
      options: ["Clustering", "Text Classification", "Dimensionality Reduction", "reinforcement-learning"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "natural-language-processing",
      question: "What is the purpose of stemming in NLP?",
      options: ["To reduce words to their root form", "To tokenize sentences", "To eliminate stop words", "To translate languages"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "natural-language-processing",
      question: "Which library is widely used for NLP tasks in Python?",
      options: ["NumPy", "Pandas", "NLTK", "Matplotlib"],
      correctAnswer: 2,
    },
    {
      topic: "machinelearning",
      subtopic: "natural-language-processing",
      question: "What does TF-IDF stand for?",
      options: ["Term Frequency-Inverse Document Frequency", "Text Frequency-Independent Document Factor", "Term Frequency-Inverse Data Factor", "Text Frequency-Independent Document Frequency"],
      correctAnswer: 0,
    },

    // computer-vision Questions
    {
      topic: "machinelearning",
      subtopic: "computer-vision",
      question: "What is the primary task of image classification?",
      options: ["Detecting edges", "Labeling images", "Enhancing images", "Segmenting images"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "computer-vision",
      question: "Which of the following is a common technique used in image processing?",
      options: ["Convolution", "Clustering", "Sorting", "Regression"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "computer-vision",
      question: "What does CNN stand for in the context of deep-learning?",
      options: ["Convolutional Neural Network", "Continuous Neural Network", "Converging Neural Network", "Conditional Neural Network"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "computer-vision",
      question: "Which of the following techniques is used for image segmentation?",
      options: ["K-Means Clustering", "Gradient Descent", "reinforcement-learning", "Random Forest"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "computer-vision",
      question: "What is the main purpose of data augmentation in computer-vision?",
      options: ["To reduce training time", "To increase the dataset size", "To improve model performance", "To balance the dataset"],
      correctAnswer: 1,
    },

    // model-evaluation Questions
    {
      topic: "machinelearning",
      subtopic: "model-evaluation",
      question: "Which metric is commonly used to evaluate a classification model?",
      options: ["Mean Absolute Error", "F1 Score", "R-squared", "Root Mean Squared Error"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "model-evaluation",
      question: "What does the confusion matrix represent?",
      options: ["Actual vs predicted values", "Training vs testing data", "Hyperparameter values", "Model architecture"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "model-evaluation",
      question: "Which of the following is a measure of how well the model generalizes?",
      options: ["Bias", "Variance", "Overfitting", "Test Accuracy"],
      correctAnswer: 3,
    },
    {
      topic: "machinelearning",
      subtopic: "model-evaluation",
      question: "What does cross-validation help to mitigate?",
      options: ["Overfitting", "Underfitting", "High variance", "All of the above"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "model-evaluation",
      question: "What is the purpose of the ROC curve?",
      options: ["To measure accuracy", "To visualize the performance of a classifier", "To evaluate regression models", "To compare different algorithms"],
      correctAnswer: 1,
    },

    // clustering-algorithms Questions
    {
      topic: "machinelearning",
      subtopic: "clustering-algorithms",
      question: "What is the primary goal of clustering?",
      options: ["To reduce dimensions", "To segment data into groups", "To predict outcomes", "To visualize data"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "clustering-algorithms",
      question: "Which algorithm is commonly used for clustering?",
      options: ["K-Means", "Linear Regression", "Decision Trees", "PCA"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "clustering-algorithms",
      question: "What is the purpose of the elbow method in clustering?",
      options: ["To choose the optimal number of clusters", "To evaluate cluster quality", "To reduce dimensionality", "To visualize data"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "clustering-algorithms",
      question: "Which of the following is a hierarchical clustering method?",
      options: ["Agglomerative Clustering", "K-Means", "DBSCAN", "Gaussian Mixture Model"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "clustering-algorithms",
      question: "In clustering, what does the term 'centroid' refer to?",
      options: ["The center of a cluster", "The point furthest from the cluster", "The first data point", "The mean of all points"],
      correctAnswer: 0,
    },

    // feature-engineering Questions
    {
      topic: "machinelearning",
      subtopic: "feature-engineering",
      question: "What is the primary purpose of feature-engineering?",
      options: ["To select the right algorithm", "To improve model performance", "To reduce training time", "To visualize data"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "feature-engineering",
      question: "Which of the following is a technique used in feature-engineering?",
      options: ["Normalization", "Regularization", "Cross-validation", "Gradient Descent"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "feature-engineering",
      question: "What is one-hot encoding used for?",
      options: ["To normalize data", "To convert categorical variables into numerical", "To reduce dimensions", "To create interaction features"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "feature-engineering",
      question: "Which of the following techniques can be used to handle missing values?",
      options: ["Imputation", "Removal", "Mean substitution", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "machinelearning",
      subtopic: "feature-engineering",
      question: "What is feature scaling?",
      options: ["Reducing the number of features", "Transforming features to be on a similar scale", "Removing irrelevant features", "Creating new features"],
      correctAnswer: 1,
    },

    // deep-learning Questions
    {
      topic: "machinelearning",
      subtopic: "deep-learning",
      question: "What is deep-learning primarily based on?",
      options: ["Linear regression", "neural-networks", "Decision trees", "Support vector machines"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "deep-learning",
      question: "What is a common framework used for building deep-learning models?",
      options: ["TensorFlow", "NumPy", "Pandas", "Matplotlib"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "deep-learning",
      question: "Which of the following is NOT a type of neural network?",
      options: ["Convolutional Neural Network", "Recurrent Neural Network", "Radial Basis Function Network", "Decision Tree"],
      correctAnswer: 3,
    },
    {
      topic: "machinelearning",
      subtopic: "deep-learning",
      question: "What does a convolutional layer primarily do in a CNN?",
      options: ["Downsamples images", "Detects patterns", "Normalizes data", "Applies dropout"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "deep-learning",
      question: "Which of the following is a challenge in training deep-learning models?",
      options: ["Overfitting", "Underfitting", "Vanishing gradients", "All of the above"],
      correctAnswer: 3,
    },

    // reinforcement-learning Questions
    {
      topic: "machinelearning",
      subtopic: "reinforcement-learning",
      question: "What is the main goal of reinforcement-learning?",
      options: ["To classify data", "To maximize cumulative reward", "To minimize loss", "To optimize parameters"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "reinforcement-learning",
      question: "What does the term 'agent' refer to in reinforcement-learning?",
      options: ["The environment", "The learner or decision maker", "The reward system", "The state space"],
      correctAnswer: 1,
    },
    {
      topic: "machinelearning",
      subtopic: "reinforcement-learning",
      question: "Which of the following is a common algorithm used in reinforcement-learning?",
      options: ["Q-Learning", "K-Means", "Decision Trees", "SVM"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "reinforcement-learning",
      question: "What does the exploration-exploitation dilemma in reinforcement-learning refer to?",
      options: ["Choosing between known and unknown rewards", "Finding the optimal policy", "Exploring new states", "Balancing learning rate"],
      correctAnswer: 0,
    },
    {
      topic: "machinelearning",
      subtopic: "reinforcement-learning",
      question: "What is the role of a reward function in reinforcement-learning?",
      options: ["To evaluate actions", "To optimize policy", "To provide feedback to the agent", "All of the above"],
      correctAnswer: 3,
    },
  ];

  try {
    await MLQuiz.insertMany(questions);
    console.log('Machine Learning questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();
