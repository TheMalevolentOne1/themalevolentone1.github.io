---
tags:
  - CO1605
  - Systems-Analysis-and-Database-Design
---
[[CO1605 Lecture 8 - Introduction To Databases]]

---
# SQL Examples
## Create Empty Table
```sql
create table emp(  
	empno number(4,0),  
	ename varchar2(10),  
	job varchar2(9),  
	mgr number(4,0),  
	hiredate date,  
	sal number(7,2),  
	comm number(7,2),  
	deptno number(2,0),
	 
	constraint pk_emp primary key (empno),  
	constraint fk_deptno foreign key (deptno) references dept (deptno)
);
```
## Create Department Table
```sql
create table dept(  
	deptno number(2,0),  
	dname varchar2(14),  
	loc varchar2(13),  
	constraint pk_dept primary key (deptno)  
);
```
## Insert Data into Empty Table
```sql 
BEGIN

insert into emp values(  
	7839, 'KING', 'PRESIDENT', null,  
	to_date('17-11-2001','dd-mm-yyyy'),  
	82000, null, 10  
);  

insert into emp values(  
	7698, 'BLAKE', 'MANAGER', 7839,  
	to_date('1-5-2005','dd-mm-yyyy'),  
	24000, null, 30  
);  

insert into emp values(  
	7782, 'CLARK', 'MANAGER', 7839,  
	to_date('9-6-2009','dd-mm-yyyy'),  
	27500, null, 10  
);  

insert into emp values(  
	7566, 'JONES', 'MANAGER', 7839,  
	to_date('2-4-2012','dd-mm-yyyy'),  
	26850, null, 20  
);  

insert into emp values(  
	7788, 'SCOTT', 'ANALYST', 7566,  
	to_date('9-12-2008','dd-mm-yyyy'),  
	19500, null, 20  
); 
 
insert into emp values(  
	7902, 'FORD', 'ANALYST', 7566,  
	to_date('3-12-2014','dd-mm-yyyy'),  
	21500, null, 20  
);  

insert into emp values(  
	7369, 'SMITH', 'CLERK', 7902,  
	to_date('17-12-2002','dd-mm-yyyy'),  
	13750, null, 20  
);

insert into emp values(  
	7499, 'ALLEN', 'SALESMAN', 7698,  
	to_date('20-2-2006','dd-mm-yyyy'),  
	19000, 6300, 30  
);  

insert into emp values(  
	7521, 'WARD', 'SALESMAN', 7698,  
	to_date('22-2-2018','dd-mm-yyyy'),  
	18500, 4500, 30  
);  

insert into emp values(  
	7654, 'MARTIN', 'SALESMAN', 7698,  
	to_date('28-9-2008','dd-mm-yyyy'),  
	15650, 3400, 30  
);  

insert into emp values(  
	7844, 'TURNER', 'SALESMAN', 7698,  
	to_date('8-9-2011','dd-mm-yyyy'),  
	18500, 0, 30  
);
  
insert into emp values(  
	7876, 'ADAMS', 'CLERK', 7788,  
	to_date('12-1-2011', 'dd-mm-yyyy'),  
	11900, null, 20  
);
  
insert into emp values(  
	7900, 'JAMES', 'CLERK', 7698,  
	to_date('3-12-1998','dd-mm-yyyy'),  
	11950, null, 30  
);
  
insert into emp values(  
	7934, 'MILLER', 'CLERK', 7782,  
	to_date('23-1-2006','dd-mm-yyyy'),  
	13200, null, 10  
);
  
insert into emp values(  
	3258, 'GREEN', 'SALESMAN', 4422,  
	to_date('24-7-2003','dd-mm-yyyy'),  
	18200, 2750, 50  
);
  
insert into emp values(  
	4422, 'STEVENS', 'MANAGER', 7839,  
	to_date('14-2-2019','dd-mm-yyyy'),  
	24750, null, 50  
);
  
insert into emp values(  
	6548, 'BARNES', 'CLERK', 4422,  
	to_date('16-1-2018','dd-mm-yyyy'),  
	11950, null, 50  
);

COMMIT;

END;
```
## Insert Data into Department Table
```sql
BEGIN

insert into dept values(10, 'ACCOUNTING', 'LONDON');
insert into dept values(20, 'RESEARCH', 'PRESTON');
insert into dept values(30, 'SALES', 'LIVERPOOL');
insert into dept values(40, 'OPERATIONS', 'STAFFORD');
insert into dept values(50, 'MARKETING', 'LUTON');

COMMIT;

END;
```

---
[[CO1605 Lecture 8 - Introduction To Databases]]