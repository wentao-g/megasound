#  Project Setup Guide

This document explains how to set up the development environment for megasound.  
It covers dependency installation, SCSS compilation, and development workflow.

---

##  Dependencies

We use **Sass** (for SCSS compilation) and **Bootstrap** (for UI components).

### Install Packages

```bash
# Install Sass as a development dependency (only needed during development)
npm install --save-dev sass

# Install Bootstrap
npm install bootstrap

# Compile style.scss into plain css and keep watching the scss changes 
npx sass assets/scss/style.scss assets/css/style.css --watch
