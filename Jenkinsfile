pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Chathurdha2024/Forever-fashion-app.git',
                    credentialsId: 'github-token'
            }
        }
    }
}