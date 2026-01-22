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

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_USERNAME}/forever-fashion-app-frontend:latest ./frontend"
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_USERNAME}/forever-fashion-app-backend:latest ./backend"
                }
            }
        }

        stage('Build Admin Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_USERNAME}/forever-fashion-app-admin:latest ./admin"
                }
            }
        }

        stage('Push Frontend Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${DOCKERHUB_USERNAME}/forever-fashion-app-frontend:latest"
                    }
                }
            }
        }

        stage('Push Backend Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${DOCKERHUB_USERNAME}/forever-fashion-app-backend:latest"
                    }
                }
            }
        }

        stage('Push Admin Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${DOCKERHUB_USERNAME}/forever-fashion-app-admin:latest"
                    }
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