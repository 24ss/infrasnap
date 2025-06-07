InfraSnap is a CLI tool that visualizes and optimizes AWS cloud spending using cost breakdowns and usage trends.

Features:

1.Cost breakdown by AWS service (EC2, S3, Lambda)
2.Trend analysis (daily & monthly) with line and bar charts
3.Savings tips for idle or under-utilized resources
4.Automatic ingestion of mock billing CSV/JSON
5.Simple one-click local setup

Tech Stack: Python, Pandas, Matplotlib, Boto3

![is](https://github.com/user-attachments/assets/ee17539c-7d98-4b17-8df3-fdf3b1a6c922)

How to setup : 
git clone https://github.com/24ss/InfraSnap.git

cd InfraSnap

pip install -r requirements.txt

python main.py

