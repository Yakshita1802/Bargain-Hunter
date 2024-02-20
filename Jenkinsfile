pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add your build commands here
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add your deployment commands here
            }
        }
    }
    
    post {
        success {
            emailext (
                to: ryb1802@gmail.com,
                subject: 'Jenkins Pipeline Notification: Build Successful',
                body: 'The Jenkins pipeline has been successfully executed.'
            )
        }
        failure {
            emailext (
                to: ryb1802@gmail.com,
                subject: 'Jenkins Pipeline Notification: Build Failed',
                body: 'The Jenkins pipeline has failed. Please check the build logs for details.'
            )
        }
    }
}
