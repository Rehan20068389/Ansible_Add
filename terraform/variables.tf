############################################
# AWS Configuration
############################################

variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
  default     = "eu-north-1"
}

############################################
# Networking Configuration
############################################

variable "vpc_id" {
  description = "Use an existing VPC ID (leave empty to create a new one)"
  type        = string
  default     = "vpc-0e85b706463e9b810" 
}

############################################
# IAM Role Configuration
############################################

variable "eks_role_name" {
  description = "Base IAM role name for Kubernetes or future EKS setup (random suffix avoids conflicts)"
  type        = string
  default     = "terraform-eks-cluster-role"
}

############################################
# ECR Repository Configuration
############################################

variable "ecr_name" {
  description = "Existing ECR repository name (Terraform will reuse it)"
  type        = string
  default     = "rehan_2003"
}
