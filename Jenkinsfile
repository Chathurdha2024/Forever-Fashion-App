pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-credentials'
        DOCKERHUB_USERNAME = 'hasangi123'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Chathurdha2024/Forever-fashion-app.git',
                    credentialsId: 'github-token'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_USERNAME}/forever-fashion-app-frontend:latest ./frontend"
                    sh "docker build -t ${DOCKERHUB_USERNAME}/forever-fashion-app-backend:latest ./backend"
                    sh "docker build -t ${DOCKERHUB_USERNAME}/forever-fashion-app-admin:latest ./admin"
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh "docker push ${DOCKERHUB_USERNAME}/forever-fashion-app-frontend:latest"
                    sh "docker push ${DOCKERHUB_USERNAME}/forever-fashion-app-backend:latest"
                    sh "docker push ${DOCKERHUB_USERNAME}/forever-fashion-app-admin:latest"
                }
            }
        }

        stage('Optional: Run Docker Compose') {
            steps {
                script {
                    // Only if your Jenkins agent can run Docker Compose
                    sh "docker-compose up -d"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
