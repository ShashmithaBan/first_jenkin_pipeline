pipeline {
    agent any

    stages { // Error 1: 'stages' is a block, not a function call with ()
        stage('Run Both Services Once') {
            parallel {
                stage('Backend') {
                    agent {
                        docker {
                            image 'python:3.8-slim'
                        }
                    }
                    steps {
                        sh "pip install flask flask-cors"
                        // Error 2: Ensure path is correct relative to the repo root
                        sh "timeout 30s python3 backend/app.py || echo 'Backend timed out'"
                    }
                } // Error 3: Missing closing brace for Backend stage

                stage('Frontend') {
                    agent {
                        docker {
                            image 'node:14-alpine'
                        }
                    }
                    environment {
        // This tells npm to use the workspace for its cache
        HOME = '.' 
        npm_config_cache = 'npm-cache'
    }
                    steps {
                        // Error 4: Usually need to change directory to frontend
                        dir('frontend') {
                            sh 'npm install'
                            sh 'timeout 30s npm start || true'
                        }
                    }
                }
            }
        }
    }
}