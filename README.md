# Web Technology Module CW1
**Westminster International University in Tashkent**

![enter image description here](https://lrc.wiut.uz/Content/logo2.png)
## Brief info
**Module Name**: Web Technology
**Module Code**: 4BUIS011C-n
**Student ID**: 00011763
**Lecturer**: Bunyod Khoshimkhujayev

Checkout website on this link 👉 [Demo](https://web-tech-00011763.netlify.app/)

> This project was created to fulfill the requirements of Web Technology module. 

## Description
This website was created as an informative website for a Dentistry clinic. Includes dynamic pages and features to grab the user's attention. No third-party libraries were used. When user visits the website, front page will appear. In front page main features of the clinic. This page itself is 9 sections long.
### Structure

```
.
├── images						# Directory containing images
├── scripts						# Directory contains js scripts
|	├── components
|	|	├── footer.js 			# Component of Footer
|	|	├── navbar.js			# Component of Navbar
|	|	├── testimonial.js 		# Component of a single testimonial
|	├── app.js					# Main js file that imports other modules
|	├── form-validation.js		# Script for validating form data
|	├── functions.js			# Common functions, utilized by other modules
|	├── testimonials.js			# Dynamical testimonial creation
├── styles						# Directory containing stylesheets (CSS files)
|	├── style.css				# Core CSS file that load the rest modules
|	├── _about-us.css
|	├── _blog.css
|	├── _dentists.css
|	├── _features.css
|	├── _footer.css
|	├── _get_in_touch.css
|	├── _header.css
|	├── _miscellaneous.css
|	├── _navbar.css
|	├── _our-doctors.css
|	├── _services.css
|	├── _testimonials.css
|	├── _things-to-know.css
├── .gitignore					# Generated in https://www.toptal.com/developers/gitignore 
├── about.html					# About Page
├── contacts.html 				# Contacts page
├── doctors.html				# Doctors page
├── index.html					# Index page
├── feedback.json				# Mini db of feedbacks (it is fetched)
├── README.md					# This README file
```
