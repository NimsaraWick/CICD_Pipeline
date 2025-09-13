pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/NimsaraWick/CICD_Pipeline'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t nimsarawick/node_app:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
               withCredentials([string(credentialsId: 'node_app_docker_password', variable: 'node_app_docker_pass')]) {
                    script {
                        bat "docker login -u nimsarawick -p %node_app_docker_pass%"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push nimsarawick/node_app:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
