pipeline {
    agent any

    stages('Run Both Services Once') {
        parallel {
            stage('Backend') {
                agent {
                    docker {
                        image 'python:3.8-slim'
                        
                    }
                }
                steps{
                    sh "pip install flask flask-cors"
                    sh "timeout 30s python3 backend/app.py ||  echo 'Backend service finished or timed out'"
                }
            stage('Frontend') {
                agent {
                    docker {
                        image 'node:14-alpine'
                        
                    }
                }
                steps{
                    sh 'npm install'
                    sh 'timeout 30s npm start || true'
                }
            }
        }
    }
}