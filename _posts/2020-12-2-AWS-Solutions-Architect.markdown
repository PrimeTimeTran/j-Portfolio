---
layout: default
modal-id: 21
date: 2020-12-2
img: po-2.png
alt: image-alt
project-date: December 2020
client: Solution Architect
title: What to know as a AWS Certified Solutions Architect?
tags: AWS
categories: AWS-Solution-Architect
description: "What to know as a AWS Certified Solutions Architect?"
---

## Overview

A summary of the knowledge required to become a certified Solution Architect from AWS.

## Key Points

- Compute
- Storage
- Security
- Databases
- Identity & Compliance
- AWS Global Infrastructure
- Network & Content Delivery

- EC2
  - Billed by the second
  - Linux/Mac use SSH
  - Windows use Putty
  - SSH is on port 22, lockdown the security group to your IP
  - Timeouts => Security Group issue.
  - Permission issues on the SSH key => run `chmod  0400`
  - Security Groups can reference other  secrutiy Groups instead of IP ranges (very popular exam question)
  - Know difference between Private, public, Elastic IP
  - Customize EC2 instance using EC2  User  Data
  - 4 EC2 launch modes
    - On Demand
    - Reserved
    - Spot
    - Dedicated Hosts. Access to actual host with sockets. Usually for licensing issues.
  - Know basic instance types: R, C, M, I, G, T2/T3(burstable).
  - Create AMIs to pre-install software on your EC2 => faster boot
  - AMI can be copied across regions & accounts
  - EC2 instan ces can be started in placement groups:
    - Cluster
    - Spread
    - Partition
- S3 Buckets
- Security Groups
- Amazon CloudFront
- Elastic Network Interface
  - Logical component in a VPC that represent a virtual network card
  - Primary Private IPv4
  - One Elastic IP
  - One Public IPv4
  - One or more security groups
  - A MAC address
  - Bound to a specific AZ
  - Can be independently moved and attached to instances

- EC2 Hibernate
  - Available on C, M, R type instances 3-5.
  - For quickly booting the OS.
  - Dumps RAM into an EBS volume.
  - Must be an encrypted volume.
  - Can be tested with `uptime`.

- Load Balancing
  - Sits between User & Server
  - Servers that forward internet traffic to multiple servers(EC2 instances) downstream.
  - Spread load across multiple downstream instances
  - Expose a single point of access (DNS) to your app
  - Seamlessly handle failures of downstream instances
  - Do regular health checks of instances
  - Provide SSL termination(HTTPS) for your websites
  - Enforce stickiness with cookies
  - High availability across zones
  - Separate public traffic from private traffic

- ELB(EC2 Load Balancer)
  - 3 Types
    - V1, Classic Load Balancer(2009) HTTP, HTTPs, TCP
    - V2, Application Load Balancer(2016) HTTP, HTTPS, Websocket
    - V2, Network Load Balancer(2017) TCP, TLS(Secure TCP) & UDP
    - Overall it is recommended to use the newer v2 generation load balancers as they provide more features
    - Set up internal(private) or external(public) ELBs.
  - Benefts
    - AWS guarantees it'll be working
    - Take care of upgrades
    - Provides only a few configuration knobs
    - It costs less to setup your own load balancer but takes a lot more effort
    - It is integrated with many AWS offerings/services.

- Health Checks
  - Crucial for Load Balancers
  - Enable the LB to know if instance ti forwards traffic to are  available to reply to requests
  - Health check is done on a port & route(/health is common)
  - If the response  is not 200(OK), then the instance is unhealthy.

Load Balancer Security Groups(SG)
  - First SG allows HTTP/HTTPS from public users.
  - Second SG allows from the load balancer, with source specified.

  - Good to Know
    - 4xx client errors
    - 5xx app errors
    - 503 error means at capacity or no registered target
    - If LB cannot connect to to the app then check security group.

  - Monitoring
    - ELB access logs will log all access requests
    - CloudWatch Metric will give you aggregate statistics
    -
