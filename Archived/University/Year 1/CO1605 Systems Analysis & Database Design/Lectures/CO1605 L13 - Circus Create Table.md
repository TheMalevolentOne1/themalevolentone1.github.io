---
tags:
  - CO1605
  - Systems-Analysis-and-Database-Design
---
[[CO1605 Lecture 13 - Data Integrity]]

---
# Circus Table SQL
```
create table trainee(  
	traineeno char(4) PRIMARY KEY,  
	title varchar2(6),  
	firstname varchar2(20),  
	surname varchar2(20),  
	dateofbirth date,  
	address1 varchar2(30),  
	town varchar2(30),  
	county varchar2(30),  
	postcode varchar2(13),  
	telno varchar2(13)  
);
 
create table module(  
	moduleno char(4) PRIMARY KEY,  
	modulename varchar2(50),  
	modulelevel char(1),  
	moduleduration char(2),  
	modulecost number(2,0)  
);

create table result(  
	traineeno char(4),  
	moduleno char(4),  
	completiondate date,  
	moduleresult varchar2(20),  
	constraint pk_result primary key (traineeno, moduleno, completiondate),  
	constraint fk_traineeno foreign key (traineeno) references trainee (traineeno),  
	constraint fk_moduleno foreign key (moduleno) references module (moduleno)  
);
```

---
[[CO1605 Lecture 13 - Data Integrity]]