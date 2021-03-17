---
id: user
title: HRHIS User Manual
sidebar_label: User
---

# INTRODUCTION

* HRHIS General Introduction                                                    
HRHIS is an open-source software for HRH information management developed by the Department of
Computer Science, University of Dar es Salaam for the Ministry of Health and Social Welfare
(Tanzania) to support the capture of data linked to any level in the organizational hierarchy
and is customizable at both the input and output sides.
The HRHIS was implemented as an effort to improve human resources for health (HRH) management.
A situation analysis indicated the existence of several databases within and outside the
ministry dealing with HRH, often with similar information fields. It was agreed these sources
should be harmonized, and housed under Health Management Information System (HMIS) for
consistency. The HRHIS software thus became part of the HMIS and was fully developed using the
District Health Information System (DHIS) software.

 The HRHIS provides input/output mechanisms for data at different levels, such as national,
regional, district or facility level. It is designed to provide flexibility to:

* Capture and store health personnel's data and history by organizational unit, cadre, and other
criteria;

* Add any number of datasets or elements required by any sector (such as the central health
  ministry, local governments, civil services or private providers);

* Update organizational unit details according to users' requirements (e.g. allowing additional
  regions, districts and health facilities to be added dynamically without entering into system
  codes);

* Generate web-enabled reports in different formats (general and aggregated), including
graphical reporting.

# Objective

This document aims at instructing users on how to use the HRHIS to achieve their goals in the

System.


# HRHIS Modules

Functions in HRHIS are groped into different modules/apps for easier organization of data and maintenance of the system. Currently HRHIS has 10 apps as listed below;

* Health worker data

* import/export

* Data quality

* Data administration

* Maintenance

* Reports

* Training

* Worker portal

* Scheduler

* Dashboard

# Using HRHIS system
Before using any system, one has to get access to it.

**Accessing HRHIS**

HRHIS system  is available via the [Web](https://hrhis.dhis2udsm.org/). Type `https://hrhis.dhis2udsm.org/` in the address bar/search bar of a web browser(an application used to access the internet such as Internet Explorer, Mozilla Firefox, Google Chrome, Opera, etc.) to access HRHIS login screen  provided that you are connected to the Internet.

It is recommended to use Mozilla Firefox or Google Chrome. Internet Explorer is not advised to be used for accessing HRHIS, but if it is found necessary to use then, the latest version of the browser can be used). The HRHIS login page will appear as seen below,
![img alt](/img/login.png)

## Apps Menu

After successfully logging in HRHIS, you can access different applications in the system via the apps menu located at the top right hand Conner below the label that shows initials of users' full name as seen in figure below.





Each application corresponds to a specific module in the system. The steps to follow working with each module to achieve different user interests have been highlighted in the following sections.

## Health Worker Data Module

 This module is used for managing all health worker data. Data entry, updating and viewing is performed in this application. This app is available in the Apps menu. To use Health worker data app follow the steps below:

  1. Select the Health Worker Data application from the apps menu. This can be done by either searching the apps menu using the search bar available in apps menu or by scrolling down the Apps menu to find data entry app and select it.


  2. After selecting the data entry app, an interface will appear as shown in the figure below.

  3. From the interface, select the organization unit and the specify the type of data entry form for which data has to be entered.

  4. Form will be displayed with appropriate data based on the specified organization unit.

## Import/Export Module

  Sometimes you may be having a large number of employees’ records which pose a tedious work of adding them one by one into the system. Import/Export module allows users to enter massive data into the system. To access Import/Export application follow the steps below:

  1.Go to the application menu and select Import/Export application from the menu.

  2.Click on the Import/Export application, HRHIS Import/Export application window will open up as in Figure below

  3.Go to the Data Import Template tab

  4.Select the organization in which you want to import data from the organization unit tree.

  5.Click on Get Import Template to download the template of the form you want to import data. The excel sheet for importing data with all data entry fields will be downloaded.

  6.Open the downloaded excel sheet and populate the data you want to import into the system and check the excel against the data you have to make sure that the fields are in appropriate order.


  Note:
  *You are required to Get Import Templates for every organization unit you want to import data as the data will be uploaded to the organization unit from which the template was downloaded.*

   7.To import data, go to Data Import tab.

   8.Click on the 'Data Import File', to choose a file that has the data you want to import from the computer.

   9.Click on 'import data' to import the data contained in the template to the system. Upon completion of data import a message will display the status, the logger will also display the detailed import status. If the import successful, data contained in the imported file will be added to the selected organization unit when downloading the template.

## Data Quality

Data Quality app assists in checking the quality of data entered/imported into the system. This is mainly by checking and identifying duplicates that might exist in the data to avoid inconsistency. To access and use data quality application follow the steps below:
  1. Go to the apps menu and select Data Quality app

  2. Click on Data Quality application, the data duplicate manager will open up as shown in Figure below.

  3. Select form from the list of forms as seen in Figure below

  4. Click on check for duplicates, the duplicates will be identified as in Figure below.

  5. Click on View Duplicate on one of the identified duplicates, the records associated with such a duplicate will pop up as shown in Figure below.

  6. Click on one of the records to view the appropriate actions that can be taken on handling the duplicate as shown in figure below.

## Worker-portal
This app enables users to flag any incorrect fields associated with their records in the system. To access and use worker-portal app follow the steps below:

  1.Select Worker-portal app from the apps menu

  2.Click on the Worker-portal application, user profile window will open up allowing the user to flag incorrect fields.

  3.Click on the flag beside an incorrect field and fill the correct details in the fields.

  4.Click 'suggest changes' to save. Flagged field will turn into yellow color and the supervisor will be notified to take appropriate measures on the suggested changes.

## HRHIS Reports
Reports include predefined reports that shares templates but
To access report application do the following:

  1.Select report app from application menu

  2.Click on the report, the report window will open up to allow a user to specify the kind of report they want to access as in Figure 23. The system has two report groups; Metrics and Employee Reports.

  3.Select the report group you want to work on. eg. Employee Report

  4.From Employee report group select name of the report eg. Providers Report

  5.Select the organization unit and then click on Update.

  7.Providers' reports for selected organization units will be generated as displayed on Figure below.

  8.Go to Records reports to access employees reports

## HRHIS Dashboard

Dashboard is the default landing page of the system, it enables users to analyze data entered in the system easily and quickly. Dashboards can be inform of tables, charts, list and maps.

To create the dashboard follow the steps below:

  1.Click on the + sign located at the top right side of your home page, dashboard form will be displayed as in Figure below to enable user to specify the name of dashboard.

  2.Click save to save the dashboard, a new dashboard will be created as shown in Figure below.

  3.Click on Add item and select the kind of item you would like to add into the dashboard. eg Chart

  4.Name your item and select the data dimensions(data, period and organization unit) associated with your item. A new dashboard item will be created. Click on Save Changes to save the item. You can add as many items into the dashboard as possible.

  5.To edit/delete the item click on(:image)  at the top right of the item and select appropriate action.

  6.To delete the dashboard click on icon at the top of the dashboard and select delete on the screen below.

  ## Maintenance Module

  This module is concerned with management of all metadata for HRHIS system operation. To access Maintenance app follow steps below:

   1.Select maintenance app from the application menu

   2.Click on the Maintenance, maintenance window will open up as in Figure below where you can perform various metadata configurations. Go to each tab to configure metadata related to each category

   4.ClickClick on plus button to add a metadata in the respective category.

   5.On adding a metadata new form will be displayed where you will be required to fill in details for the metadata creation as in Figure below.
   6.Click on image to view metadata available in the respective category, a list of metadata configured will be displayed.
   7.You can be able to perform various actions on a metadata by clicking on icon at the right of each metadata.

## Data administration
   This module is concerned with the data analytic resource table in the system. To access data administration module do the following:

   1.Go to the applications menu and select Data Administration app

   2.Click on the app, Data administration screen will open as in Figure below.

   3.To generate a resource table check the check-boxes at the left of every item listed in Figure 69 then click Generate Resource Table. You can also check one item to generate a resource table for it. While generating the resource table, the resource table logs will be displayed to show the progress as in Figure
